function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<!-- <app-home-page></app-home-page>  -->\n\n<!-- <app-blog-editor></app-blog-editor> -->\n<router-outlet></router-outlet>\n<!-- <app-show-article></app-show-article> -->\n\n<!-- <app-footer></app-footer> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/articles-list/articles-list.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/articles-list/articles-list.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArticlesListArticlesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-12 mt-3\" *ngFor=\"let article of allArticles\">\n        <div class=\"post-preview animated fadeInUp\">\n            <a (click)=\"getArticle(article.slug)\" style=\"cursor: pointer;\">\n                <h2 class=\"post-title\">{{article.title}}</h2>\n                <h3 class=\"post-subtitle\" *ngIf=\"article.caption\">{{article.caption.toLowerCase()}}</h3>\n            </a>\n            <p class=\"post-meta\"><small>posted by</small>&nbsp;<a routerLink=\"/articles\">\n                {{article.author.username}}</a>  ● <small class=\"text-muted\">{{article.timeCreated}}</small> \n                <span class=\"float-right\">\n                    <small class=\"text-muted\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n                        {{article.views.length}}</small>\n                    <small class=\"ml-2 text-muted\"><i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\n                           {{article.likes.length}}</small>\n                    <small class=\"ml-2 text-muted\"><i class=\"fa fa-thumbs-o-down\" aria-hidden=\"true\"></i>\n                            {{article.dislikes.length}}</small>\n                </span>\n            </p>\n        </div>\n    </div>\n    <!-- <div class=\"col-12\">\n        <div class=\"post-preview\">\n            <a routerLink=\"/articles\">\n                <h2 class=\"post-title\">I believe every human has a\n                    finite number of heartbeats. I don't intend to\n                    waste any of mine.</h2>\n            </a>\n            <p class=\"post-meta\"><small>posted by</small>&nbsp;<a routerLink=\"/articles\">Start\n                Bootstrap</a> ● <small class=\"text-muted\">September 24, 2018</small></p>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"post-preview\">\n            <a routerLink=\"/articles\">\n                <h2 class=\"post-title\">I believe every human has a\n                    finite number of heartbeats. I don't intend to\n                    waste any of mine.</h2>\n            </a>\n            <p class=\"post-meta\"><small>posted by</small>&nbsp;<a routerLink=\"/articles\">Start\n                Bootstrap</a> ● <small class=\"text-muted\">September 24, 2018</small></p>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"post-preview\">\n            <a routerLink=\"/articles\">\n                <h2 class=\"post-title\"> Science has not yet mastered\n                    prophecy</h2>\n                <h3 class=\"post-subtitle\">We predict too much for\n                    the next year and yet far too little for the\n                    next ten.</h3>\n            </a>\n            <p class=\"post-meta\"><small>posted by</small>&nbsp;<a routerLink=\"/articles\">Start\n                Bootstrap</a> ● <small class=\"text-muted\">September 24, 2018</small></p>\n        </div>\n    </div>\n\n    <div class=\"col-12\">\n        <div class=\"post-preview\">\n            <a routerLink=\"/articles\">\n                <h2 class=\"post-title\">Failure is not an option</h2>\n                <h3 class=\"post-subtitle\">Many say exploration is\n                    part of our destiny, but it’s actually our duty\n                    to future generations.</h3>\n            </a>\n            <p class=\"post-meta\"><small>posted by</small>&nbsp;<a routerLink=\"/articles\">Start\n                Bootstrap</a> ● <small class=\"text-muted\">September 24, 2018</small></p>\n        </div>\n    </div> -->\n</div>\n<div class=\"clearfix\"><button class=\"btn btn-primary float-right\"\n        type=\"button\">Older Posts&nbsp;⇒</button></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-editor/blog-editor.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog-editor/blog-editor.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogEditorBlogEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-5\">\n    <div class=\"row justify-content-center mt-5\">\n      <div class=\"col-md-9 bg-light\">\n        <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\n          {{error}}\n        </div>\n        <form *ngIf=\"!submitted || !allFieldsValid || error\" [formGroup]='editorForm' (ngSubmit)='onSubmit()'>\n          <div class=\"form-group\">\n            <label><h5 class=\"text-secondary\">Author</h5></label>\n            <input type=\"text\" class=\"form-control\" [value]=\"username\" disabled>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\"><h5 class=\"text-secondary\" [class.text-danger]=\"isFieldValid('title')\">Title *</h5></label>\n            <input #title (focus)=\"reset()\" spellcheck=\"false\" type=\"text\" class=\"form-control\" formControlName=\"title\">\n            <p class=\"text-danger mt-2\" *ngIf=\"isFieldValid('title')\">{{getErrorMsg('title', 10)}}</p>\n          </div>\n          <div class=\"form-group mt-4\">\n            <label for=\"\"><h5 class=\"text-secondary\">Caption (optional)</h5></label>\n            <input spellcheck=\"false\" type=\"text\" class=\"form-control\" formControlName='caption'>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\"><h5 class=\"text-secondary\" [class.text-danger]=\"isFieldValid('category')\">Category *</h5></label>\n            <select formControlName=\"category\" (focus)=\"reset()\" class=\"form-control\">\n              <option value=\"\" disabled>Select the category</option>\n              <option *ngFor=\"let category of categories\" value=\"{{category}}\">{{category}}</option>\n            </select>\n            <p class=\"text-danger mt-2\" *ngIf=\"isFieldValid('category')\">{{getErrorMsg('category')}}</p>\n          </div>\n          <div class=\"form-group mt-5\">\n            <label for=\"\"><h4 [class.text-danger]=\"isFieldValid('content')\" class=\"text-secondary\">Content *</h4></label>\n            <quill-editor spellcheck=\"false\"\n              (onContentChanged)='maxlength($event)' (onSelectionChanged)='reset()' [styles]=\"editorStyle\" formControlName='content'>\n              <div id=\"toolbar\" quill-editor-toolbar style=\"border: none;\">\n                <button tabindex=\"-1\" class=\"ql-bold\" data-toggle=\"tooltip\"\n                  title=\"bold\"></button>\n                <button tabindex=\"-1\" class=\"ql-italic\" data-toggle=\"tooltip\"\n                  title=\"italic\"></button>\n                <button tabindex=\"-1\" class=\"ql-underline\" data-toggle=\"tooltip\"\n                  title=\"underline\"></button>\n                <!-- Add subscript and superscript buttons -->\n                <button tabindex=\"-1\" class=\"ql-script\" value=\"sub\" data-toggle=\"tooltip\"\n                  title=\"sub\"></button>\n                <button tabindex=\"-1\" class=\"ql-script\" value=\"super\" data-toggle=\"tooltip\"\n                  title=\"super\"></button>\n                <select tabindex=\"-1\" class=\"ql-color\">\n                  <option tabindex=\"-1\" value=\"red\"></option>\n                  <option tabindex=\"-1\" value=\"grey\"></option>\n                  <option tabindex=\"-1\" value=\"blue\"></option>\n                  <option tabindex=\"-1\" value=\"green\"></option>\n                  <option tabindex=\"-1\" value=\"teal\"></option>\n                  <option tabindex=\"-1\" value=\"#6c757d\"></option>\n                  <option tabindex=\"-1\" value=\"#212529\"></option>\n                </select>\n                <select tabindex=\"-1\" class=\"ql-background\">\n                  <option tabindex=\"-1\" value=\"white\"></option>\n                  <option tabindex=\"-1\" value=\"red\"></option>\n                  <option tabindex=\"-1\" value=\"grey\"></option>\n                  <option tabindex=\"-1\" value=\"#444444\"></option>\n                  <option tabindex=\"-1\" value=\"green\"></option>\n                  <option tabindex=\"-1\" value=\"teal\"></option>\n                  <option tabindex=\"-1\" value=\"darkgray\"></option>\n                  <option tabindex=\"-1\" value=\"lightblue\"></option>\n                </select>\n                <button tabindex=\"-1\" class=\"ql-blockquote\" data-toggle=\"tooltip\"\n                  title=\"blockquote\"></button>\n                <button tabindex=\"-1\" class=\"ql-code-block\" data-toggle=\"tooltip\"\n                  title=\"code-block\"></button>\n                <button tabindex=\"-1\" class=\"ql-align\" value=\"\" data-toggle=\"tooltip\"\n                    title=\"align left\"></button>\n                <button tabindex=\"-1\" class=\"ql-align\" value=\"center\" data-toggle=\"tooltip\"\n                    title=\"align center\"></button>\n                <button tabindex=\"-1\"class=\"ql-list\" value=\"ordered\" data-toggle=\"tooltip\"\n                  title=\"number list\"></button>\n                <button tabindex=\"-1\" class=\"ql-list\" value=\"bullet\" data-toggle=\"tooltip\"\n                  title=\"bullet list\"></button>\n                <button tabindex=\"-1\" class=\"ql-header\" value=\"1\" data-toggle=\"tooltip\"\n                  title=\"heading 1\"></button>\n                <button tabindex=\"-1\" class=\"ql-header\" value=\"2\" data-toggle=\"tooltip\"\n                  title=\"heading 2\"></button>\n                <button tabindex=\"-1\" class=\"ql-indent\" value=\"-1\" data-toggle=\"tooltip\"\n                  title=\"tab backward\"></button>\n                <button tabindex=\"-1\" class=\"ql-indent\" value=\"+1\" data-toggle=\"tooltip\"\n                  title=\"tab forward\"></button>\n                <button tabindex=\"-1\" class=\"ql-link\" data-toggle=\"tooltip\"\n                  title=\"select the text first or paste the link directly\"></button>\n                <!-- <button tabindex=\"-1\" class=\"ql-image\" data-toggle=\"tooltip\"\n                  title=\"image\"></button> -->\n                <!-- <button id=\"divider-button\"><i class=\"fa fa-minus\"></i></button> -->\n              </div>\n            </quill-editor>\n            <p class=\"text-danger mt-2\" *ngIf=\"isFieldValid('content')\">{{getErrorMsg('content', 50)}}</p>\n          </div>\n          <button class=\"btn btn-primary btn-lg float-right\" type=\"submit\">Add Article</button>\n        </form>\n        <!-- <div *ngIf=\"editorForm.get('content').value!=null\">{{editorLength}}</div> -->\n        <div *ngIf=\"submitted && allFieldsValid && !error && !success\" style=\"height: 50vh;\" class=\"d-flex flex-column justify-content-center align-items-center\">\n          <div class=\"spinner-border text-primary\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n          <strong class=\"text-muted mt-3\">Loading...</strong>\n          <strong class=\"text-muted\">Please wait</strong>\n        </div>\n      </div>\n      <!-- <div class=\"col-md-4 bg-light p-4\">\n        <h3>Output</h3>\n        <quill-view [content]=\"editorContent\" format=\"text\" theme=\"snow\">\n        </quill-view>\n      </div> -->\n    </div>\n  </div>\n  \n  <!-- <app-quill-custom></app-quill-custom> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 mx-auto\">\n                <ul class=\"list-inline text-center\">\n                    <li class=\"list-inline-item\"><span class=\"fa-stack fa-lg\"><i\n                                class=\"fa fa-circle fa-stack-2x\"></i><i\n                                class=\"fa fa-twitter fa-stack-1x fa-inverse\"></i></span>\n                    </li>\n                    <li class=\"list-inline-item\"><span class=\"fa-stack fa-lg\"><i\n                                class=\"fa fa-circle fa-stack-2x\"></i><i\n                                class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i></span>\n                    </li>\n                    <li class=\"list-inline-item\"><span class=\"fa-stack fa-lg\"><i\n                                class=\"fa fa-circle fa-stack-2x\"></i><i\n                                class=\"fa fa-github fa-stack-1x fa-inverse\"></i></span>\n                    </li>\n                </ul>\n                <p class=\"text-muted copyright\">Copyright&nbsp;©&nbsp;Brand 2020\n                </p>\n            </div>\n        </div>\n    </div>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar sticky-top navbar-expand-md navbar-dark bg-dark\" style=\"z-index: 1;\">\n    <button class=\"navbar-toggler\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n        <span class=\"menu-collapsed\"> Blog</span>\n    </a>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/articles']\" routerLinkActive=\"active\" >\n            <i class=\"fas fa-home\"></i>&ensp;Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item ml-1\">\n          <a class=\"nav-link btn btn-green\" routerLink=\"/articles/new\" routerLinkActive=\"active\">\n            <i class=\"fas fa-edit\"></i>&ensp;New Article</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n        <li *ngIf=\"!_authUserService.isLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link btn btn-blue\" routerLink=\"/login\" routerLinkActive=\"active\">\n            <i class=\"fas fa-user\"></i>&ensp;Login</a>\n        </li>\n        <li *ngIf=\"!_authUserService.isLoggedIn()\" class=\"nav-item ml-1\">\n          <a class=\"nav-link\" routerLink=\"/register\" routerLinkActive=\"active\">\n            <i class=\"fas fa-user-plus\"></i>&nbsp;Register</a>\n        </li>\n        <li *ngIf=\"_authUserService.isLoggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link btn btn-blue\" style=\"cursor: pointer;\" (click)=\"_authUserService.logoutUser()\" >\n                Logout&ensp;<i class=\"fas fa-sign-out-alt\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </nav><!-- NavBar END -->\n  <!-- Bootstrap row -->\n  <div class=\"row\" id=\"body-row\">\n      <!-- Sidebar -->\n      <div #sidebarContainer id=\"sidebar-container\" class=\"sidebar-expanded\" style=\"position:fixed;top:0;z-index:5;\">\n          <!-- d-* hiddens the Sidebar in smaller devices. Its itens can be kept on the Navbar 'Menu' -->\n          <!-- Bootstrap List Group -->\n          <ul class=\"list-group\">\n              <!-- Separator with title -->\n              <li class=\"list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed\">\n                <small>MAIN MENU</small><button class=\"shrink-sidebar close ml-auto text-white\" style=\"font-size:1rem;\" ><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n              </li>\n              <!-- /END Separator -->\n              <!-- Menu with submenu -->\n              <a href=\"#submenu1\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"bg-dark list-group-item list-group-item-action flex-column align-items-start\">\n                  <div class=\"d-flex w-100 justify-content-start align-items-center\">\n                      <span class=\"fa fa-dashboard fa-fw mr-3\"></span>\n                      <span class=\"menu-collapsed\">Dashboard</span>\n                      <span class=\"submenu-icon ml-auto\"></span>\n                  </div>\n              </a>\n              <!-- Submenu content -->\n              <div id='submenu1' class=\"collapse sidebar-submenu\">\n                  <a routerLink=\"/articles\" class=\"shrink-sidebar list-group-item list-group-item-action bg-dark text-white\">\n                      <span class=\"menu-collapsed\"><i class=\"fas fa-home\"></i>&emsp;Home</span>\n                  </a>\n                  <a routerLink=\"/articles/new\" class=\"shrink-sidebar list-group-item list-group-item-action bg-dark text-white\">\n                      <span class=\"menu-collapsed\"><i class=\"fas fa-edit\"></i>&emsp;New Article</span>\n                  </a>\n                  <!-- <a href=\"#\" class=\"list-group-item list-group-item-action bg-dark text-white\">\n                      <span class=\"menu-collapsed\">Tables</span>\n                  </a> -->\n              </div>\n              <a href=\"#submenu2\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"bg-dark list-group-item list-group-item-action flex-column align-items-start\">\n                  <div class=\"d-flex w-100 justify-content-start align-items-center\">\n                      <span class=\"fa fa-user fa-fw mr-3\"></span>\n                      <span class=\"menu-collapsed\">Profile</span>\n                      <span class=\"submenu-icon ml-auto\"></span>\n                  </div>\n              </a>\n              <!-- Submenu content -->\n              <div id='submenu2' class=\"collapse sidebar-submenu\">\n                  <a (click)=\"hide()\" *ngIf=\"!_authUserService.isLoggedIn()\" routerLink=\"/login\" class=\"shrink-sidebar list-group-item list-group-item-action bg-dark text-white\">\n                      <span class=\"menu-collapsed\"><i class=\"far fa-user\"></i>&emsp;Login</span>\n                  </a>\n                  <a (click)=\"hide()\" *ngIf=\"!_authUserService.isLoggedIn()\" routerLink=\"/register\" class=\"shrink-sidebar list-group-item list-group-item-action bg-dark text-white\">\n                      <span class=\"menu-collapsed\"><i class=\"fas fa-user-plus\"></i>&emsp;Sign Up</span>\n                  </a>\n                  <a *ngIf=\"_authUserService.isLoggedIn()\" (click)=\"hide2()\" class=\"shrink-sidebar list-group-item list-group-item-action bg-dark text-white\">\n                    <span class=\"menu-collapsed\"><i class=\"fas fa-sign-out-alt\"></i>&emsp;Logout</span>\n                </a>\n              </div>\n              <!-- <a href=\"#\" class=\"bg-dark list-group-item list-group-item-action\">\n                  <div class=\"d-flex w-100 justify-content-start align-items-center\">\n                      <span class=\"fa fa-tasks fa-fw mr-3\"></span>\n                      <span class=\"menu-collapsed\">Tasks</span>\n                  </div>\n              </a> -->\n              <!-- Separator with title -->\n              <!-- <li class=\"list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed\">\n                  <small>OPTIONS</small>\n              </li> -->\n              <!-- /END Separator -->\n              <!-- <a href=\"#\" class=\"bg-dark list-group-item list-group-item-action\">\n                  <div class=\"d-flex w-100 justify-content-start align-items-center\">\n                      <span class=\"fa fa-calendar fa-fw mr-3\"></span>\n                      <span class=\"menu-collapsed\">Calendar</span>\n                  </div>\n              </a>\n              <a routerLink=\"/articles\" routerLinkActive=\"active\" class=\"bg-dark list-group-item list-group-item-action\">\n                  <div class=\"d-flex w-100 justify-content-start align-items-center\">\n                      <span class=\"fa fa-envelope-o fa-fw mr-3\"></span>\n                      <span class=\"menu-collapsed\">Messages <span class=\"badge badge-pill badge-primary ml-2\">5</span></span>\n                  </div>\n              </a> -->\n              <!-- Separator without title -->\n              <li class=\"list-group-item sidebar-separator menu-collapsed\"></li>\n              <!-- /END Separator -->\n              <a class=\"shrink-sidebar bg-dark list-group-item list-group-item-action\">\n                  <div class=\"d-flex w-100 justify-content-start align-items-center\">\n                      <span class=\"fa fa-question fa-fw mr-3\"></span>\n                      <span class=\"menu-collapsed\">About Me</span>\n                  </div>\n              </a>\n          </ul><!-- List Group END-->\n      </div><!-- sidebar-container END -->\n  </div><!-- body-row END -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row justify-content-around\">\n        <div class=\"col-0 col-md-3 col-xl-2 mt-5\" style=\"position: relative;\">\n            <div class=\"post-options\"></div>\n        </div>\n        <div class=\"col-12 col-md-8 col-xl-8 mt-md-5\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"write-article\">\n                        <div *ngIf=\"_authUserService.isLoggedIn()\">\n                            <i class=\"fa fa-user-circle\"></i><a class=\"d-inline ml-2\" routerLink=\"/articles\">{{username}}</a>\n                        </div>\n                        <h5 (click)=\"addArticle()\">Write your article</h5>\n                    </div>\n                    <hr>\n                </div>            \n            </div>\n            <app-articles-list></app-articles-list>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login-user/login-user.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-user/login-user.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginUserLoginUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" style=\"margin-top: 5vh;\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-7 px-4\">\r\n            <div class=\"header\">\r\n                <h5>Login</h5>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row justify-content-center\" style=\"margin-top: 4rem;\">\r\n        <div class=\"col-md-7\">\r\n            <div class=\"alert alert-danger\" *ngIf = \"error\">\r\n                {{error}}\r\n            </div>\r\n            <div class=\"alert alert-success\" *ngIf = \"success\">\r\n                {{success}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-4 justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\" *ngIf=\"!submitted || !allFieldsValid || error\">\r\n                <div class=\"card-body card-shadow\">\r\n                    <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\r\n                        <div class=\"form-group\">\r\n                            <label>Username</label>\r\n                            <input type=\"text\" formControlName=\"username\" (focus)=\"reset()\"\r\n                             class=\"form-control input-control-shadow rounded-0\" \r\n                             [class.is-invalid]=\"isFieldValid('username')\">\r\n                             <small *ngIf=\"isFieldValid('username')\"\r\n                             class=\"text-danger\">{{getErrorMsg('username', 5)}}</small>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Password</label>\r\n                            <input type=\"password\" formControlName=\"password\" (focus)=\"reset()\"\r\n                             class=\"form-control input-control-shadow rounded-0\" \r\n                             [class.is-invalid]=\"isFieldValid('password')\">\r\n                             <small *ngIf=\"isFieldValid('password')\"\r\n                             class=\"text-danger\">{{getErrorMsg('password', 8)}}</small>\r\n                        </div>\r\n                        <a routerLink=\"/login\">Forgot Password</a>\r\n                        <button class=\"btn btn-primary float-right\" type=\"submit\">Login</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"submitted && allFieldsValid && !error && !success\" style=\"height: 50vh;\" class=\"d-flex flex-column justify-content-center align-items-center\">\r\n                <div class=\"spinner-border text-primary\" role=\"status\">\r\n                  <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <strong class=\"text-muted mt-3\">Loading...</strong>\r\n                <strong class=\"text-muted\">Please wait</strong>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register-user/register-user.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register-user/register-user.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterUserRegisterUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" style=\"margin-top: 5vh;\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-7 px-4\">\r\n            <div class=\"header\">\r\n                <h5>Register Yourself</h5>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row justify-content-center\" style=\"margin-top: 4rem;\">\r\n        <div class=\"col-md-7\">\r\n            <div class=\"alert alert-danger\" *ngIf = \"errorMsg\">\r\n                {{errorMsg}}\r\n            </div>\r\n            <div class=\"alert alert-success\" *ngIf = \"successMsg\">\r\n                {{successMsg}}\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-8\" *ngIf=\"!errorMsg && !successMsg\">\r\n            <ul class=\"progressbar mx-auto\">\r\n                <li #firstProgress class=\"progress-active\">User Info</li>\r\n                <li #secondProgress class=\"\">Personal Info</li>\r\n                <li #thirdProgress class=\"\">Qualification/Job Info</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"row mt-4 justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\" *ngIf=\"!submitted3 || !allFieldsValid3\">\r\n                <div class=\"card-body card-shadow\">\r\n                    <form [formGroup]=\"regisForm1\" (ngSubmit)=\"onSubmitOne()\" *ngIf=\"!submitted1 || !allFieldsValid1\">\r\n                        <div class=\"form-group\">\r\n                            <label>Username</label>\r\n                            <input type=\"text\" class=\"form-control rounded-0 input-control-shadow\"\r\n                            (focus)=\"resetOne()\" formControlName=\"username\" [class.is-invalid]=\"isFieldValidOne('username')\"\r\n                            [class.is-valid]=\"regisForm1.get('username').touched && !isFieldValidOne('username')\">\r\n                            <small class=\"form-text text-muted\">*username must be unique</small>\r\n                            <small *ngIf=\"isFieldValidOne('username')\"\r\n                                 class=\"text-danger\">{{getErrorMsgOne('username', 5)}}</small>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>E-mail</label>\r\n                            <input type=\"email\" class=\"form-control rounded-0 input-control-shadow\"\r\n                            (focus)=\"resetOne()\" [class.is-invalid]=\"isFieldValidOne('email')\" formControlName=\"email\"\r\n                            [class.is-valid]=\"regisForm1.get('email').touched && !isFieldValidOne('email')\">\r\n                            <small class=\"form-text text-muted\">*provide e-mail in case you forget password</small>\r\n                            <small class=\"text-danger\" *ngIf=\"isFieldValidOne('email')\">{{getErrorMsgOne('email')}}</small>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Password</label>\r\n                            <input type=\"password\" class=\"form-control rounded-0 input-control-shadow\"\r\n                            (focus)=\"resetOne()\" [class.is-invalid]=\"isFieldValidOne('password')\" formControlName=\"password\">\r\n                            <small class=\"form-text text-muted\">*password must be min 8 characters long</small>\r\n                            <small *ngIf=\"isFieldValidOne('password')\"\r\n                                class=\"text-danger\">{{getErrorMsgOne('password', 8)}}</small>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Confirm Password</label>\r\n                            <input type=\"password\" class=\"form-control rounded-0 input-control-shadow\"\r\n                                (focus)=\"resetOne()\" formControlName=\"confirmPassword\"\r\n                                [class.is-invalid]=\"regisForm1.errors?.misMatch || isFieldValidOne('confirmPassword')\">\r\n                            <small class=\"text-danger\" \r\n                                *ngIf=\"regisForm1.errors?.misMatch || isFieldValidOne('confirmPassword')\">passwords do not match</small>\r\n                        </div>\r\n                        <button class=\"btn btn-primary float-right\" type=\"submit\">Next</button>\r\n                    </form>\r\n                    <form [formGroup]=\"regisForm2\" (ngSubmit)=\"onSubmitTwo()\" *ngIf=\"submitted1 && regisForm1.valid && (!submitted2 || !allFieldsValid2)\">\r\n                        <div class=\"form-group\">\r\n                            <label>First Name</label>\r\n                            <input type=\"text\" class=\"form-control rounded-0 input-control-shadow\"\r\n                            (focus)=\"resetTwo()\" formControlName=\"firstName\" [class.is-invalid]=\"isFieldValidTwo('firstName')\">\r\n                            <small *ngIf=\"isFieldValidTwo('firstName')\"\r\n                                 class=\"text-danger\">{{getErrorMsgTwo('firstName')}}</small>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Last Name</label>\r\n                            <input type=\"text\" class=\"form-control rounded-0 input-control-shadow\"\r\n                            (focus)=\"resetTwo()\" [class.is-invalid]=\"isFieldValidTwo('lastName')\" formControlName=\"lastName\">\r\n                            <small class=\"text-danger\" *ngIf=\"isFieldValidTwo('lastName')\">{{getErrorMsgTwo('lastName')}}</small>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Gender</label>\r\n                            <select formControlName=\"gender\" class=\"form-control rounded-0 input-control-shadow\" \r\n                                (focus)=\"resetTwo()\" [class.is-invalid]=\"isFieldValidTwo('gender')\">\r\n                                <option disabled value=\"\">Select your gender</option>\r\n                                <option *ngFor=\"let gender of genders\" value=\"{{gender}}\">{{gender}}</option>\r\n                            </select>\r\n                            <small *ngIf=\"isFieldValidTwo('gender')\"\r\n                                class=\"text-danger\">{{getErrorMsgTwo('gender')}}</small>\r\n                        </div>\r\n                        <button class=\"btn btn-primary float-right\" type=\"submit\">Next</button>\r\n                    </form>\r\n                    <form [formGroup]=\"regisForm3\" (ngSubmit)=\"onSubmitThree()\" *ngIf=\"submitted2 && regisForm2.valid && (!submitted3 || !allFieldsValid3)\">\r\n                        <div class=\"form-group\">\r\n                            <label>Course</label>\r\n                            <select formControlName=\"course\" class=\"form-control rounded-0 input-control-shadow\" \r\n                                (focus)=\"resetThree()\" [class.is-invalid]=\"isFieldValidThree('course')\">\r\n                                <option disabled value=\"\">Select your highest qualification</option>\r\n                                <option *ngFor=\"let course of courses\" value=\"{{course}}\">{{course}}</option>\r\n                            </select>\r\n                            <small *ngIf=\"isFieldValidThree('course')\"\r\n                                 class=\"text-danger\">{{getErrorMsgThree('course')}}</small>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>College</label>\r\n                            <select formControlName=\"college\" class=\"form-control rounded-0 input-control-shadow\" \r\n                                (focus)=\"resetThree()\" [class.is-invalid]=\"isFieldValidThree('college')\">\r\n                                <option disabled value=\"\">Select your college</option>\r\n                                <option *ngFor=\"let college of colleges\" value=\"{{college}}\">{{college}}</option>\r\n                            </select>\r\n                            <small *ngIf=\"isFieldValidThree('college')\"\r\n                                 class=\"text-danger\">{{getErrorMsgThree('college')}}</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>Passing Year</label>\r\n                            <select formControlName=\"passingYear\" class=\"form-control rounded-0 input-control-shadow\" \r\n                                (focus)=\"resetThree()\" [class.is-invalid]=\"isFieldValidThree('passingYear')\">\r\n                                <option disabled value=\"\">Select your passing Year</option>\r\n                                <option *ngFor=\"let passingYear of passingYears\" value=\"{{passingYear}}\">{{passingYear}}</option>\r\n                            </select>\r\n                            <small *ngIf=\"isFieldValidThree('passingYear')\"\r\n                                 class=\"text-danger\">{{getErrorMsgThree('passingYear')}}</small>\r\n                        </div>\r\n                        <div>\r\n                            <span class=\"text-muted mr-2\"><i class=\"fas fa-plus\"></i></span>\r\n                            <a href=\"#collapse\" data-toggle=\"collapse\" aria-expanded=\"false\" aria-controls=\"collapse\">Add Job Description</a>\r\n                            <small class=\"text-muted ml-2\" >(Optional)</small>\r\n                        </div>\r\n                        <div class=\"collapse\" id=\"collapse\">\r\n                            <div class=\"form-group\">\r\n                                <label>Job Title</label>\r\n                                <input type=\"text\" class=\"form-control rounded-0 input-control-shadow\"\r\n                                 formControlName=\"job\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Company Name</label>\r\n                                <input type=\"text\" class=\"form-control rounded-0 input-control-shadow\"\r\n                                 formControlName=\"company\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Working in the company since: </label>\r\n                                <select formControlName=\"since\" class=\"form-control rounded-0 input-control-shadow\">\r\n                                    <option disabled value=\"\">Select one of these</option>\r\n                                    <option *ngFor=\"let since of jobSinceYrs\" value=\"{{passingYear}}\">{{since}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <button class=\"btn btn-primary float-right\" type=\"submit\">Sign Up</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"submitted3 && allFieldsValid3 && !errorMsg && !successMsg\" style=\"height: 50vh;\" class=\"d-flex flex-column justify-content-center align-items-center\">\r\n                <div class=\"spinner-border text-primary\" role=\"status\">\r\n                  <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <strong class=\"text-muted mt-3\">Loading...</strong>\r\n                <strong class=\"text-muted\">Please wait</strong>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/show-article/show-article.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-article/show-article.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShowArticleShowArticleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"masthead\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-10 col-lg-8 mx-auto\">\n                <div class=\"post-heading\">\n                    <h1>{{article.title}}</h1>\n                    <h2 class=\"subheading\">{{article.caption.toLowerCase()}}\n                    </h2><span class=\"meta\">Posted by&nbsp;<a\n                            [routerLink]=\"['/articles', article.slug]\">{{article.author.username}},</a>&nbsp;on\n                        {{article.timeCreated}}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n<article>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-10 mx-auto quill-container\">\n                <quill-view [content]=\"article.content\" format=\"text\"\n                    theme='snow'>\n                </quill-view>\n                <!-- <div class=\"ql-container ql-snow\" style=\"border-width: 0;\">\n                        <div class=\"ql-editor\" [innerHTML]=\"editorContent\">\n                        </div>\n                </div> -->\n                <div *ngIf=\"!isAuthor\" class=\"d-flex\">\n                    <button class=\"mr-1 border-0 bg-white\"\n                        style=\"outline: none;\"><i class=\"fa fa-eye\"\n                            aria-hidden=\"true\"></i>\n                        <small\n                            class=\"text-muted views\">&ensp;{{article.views.length}}</small></button>\n                    <!-- <button class=\"cstmbtn1 mx-1 border-0 bg-white text-secondary\">like</button> -->\n                    <button (click)=\"like()\" *ngIf=\"!isLiked\"\n                        class=\"cstmbtn1 mx-1 border-0 bg-white text-secondary\">like</button>\n                    <button (click)=\"nonlike()\" *ngIf=\"isLiked\"\n                        class=\"cstmbtn2 mx-1 border-0 bg-white text-success\">liked!</button>\n                    <!-- <small class=\"text-muted\">&ensp;{{article.likes.length}}</small> -->\n                    <button (click)=\"dislike()\" *ngIf=\"!isDisliked\"\n                        class=\"cstmbtn1 mx-1 border-0 bg-white text-secondary\">dislike</button>\n                    <button (click)=\"nondislike()\" *ngIf=\"isDisliked\"\n                        class=\"cstmbtn2 mx-1 border-0 bg-white text-danger\">disliked!</button>\n                    <a class=\"ml-1\" [href]=\"link\" target=\"_blank\"><i class=\"fa fa-whatsapp\" aria-hidden=\"true\"></i></a>\n                    \n                    <!-- <small class=\"text-muted\">&ensp;{{article.dislikes.length}}</small> -->\n                </div>\n                <div  *ngIf=\"isAuthor\" class=\"d-flex\">\n                    <button (click)=\"showViews()\" class=\"mr-1 border-0 bg-white\"\n                        style=\"outline: none;\"><i class=\"fa fa-eye\"\n                            aria-hidden=\"true\"></i>\n                        <small\n                            class=\"text-muted views\">&ensp;{{article.views.length}}</small></button>\n                    <button (click)=\"showLikes()\" class=\"mr-1 border-0 bg-white\"\n                        style=\"outline: none;\"><i\n                            class=\"fa fa-heart-o text-danger\"\n                            aria-hidden=\"true\"></i>\n                        <small\n                            class=\"text-muted views\">&ensp;{{article.likes.length}}</small></button>\n                    <button (click)=\"showDislikes()\" class=\"mr-1 border-0 bg-white\"\n                        style=\"outline: none;\"><i\n                            class=\"fa fa-thumbs-o-down text-primary\"\n                            aria-hidden=\"true\"></i>\n                        <small\n                            class=\"text-muted views\">&ensp;{{article.dislikes.length}}</small></button>\n                    <!-- <a href=\"whatsapp://send\" data-action=\"share/whatsapp/share\" target=\"_blank\">WA</a> -->\n                    <a class=\"ml-1\" [href]=\"link\" target=\"_blank\"><i class=\"fa fa-whatsapp\" aria-hidden=\"true\"></i></a>\n                </div>\n\n                <div #viewsSheet class=\"bottom-sheet\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <h5 class=\"text-white m-0\" style=\"font-weight:700;\">views</h5>\n                            <button (click)=\"close()\" class=\"btn text-white\" style=\"font-size: 2rem;\">&times;</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 p-3 my-2\"\n                            *ngFor=\"let view of article.views\">\n                            <div class=\"media\">\n                                <img src=\"https://img.favpng.com/23/0/3/computer-icons-user-profile-clip-art-portable-network-graphics-png-favpng-YEj6NsJygkt6nFTNgiXg9fg9w.jpg\"\n                                    height=\"22px\" width=\"22px\" class=\"mr-3 rounded-circle\" alt=\"...\">\n                                <div class=\"media-body\">\n                                    <strong class=\"mt-0\">{{view.username}}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                \n                <div #likesSheet class=\"bottom-sheet\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <h5 class=\"text-white m-0\" style=\"font-weight:700;\">likes</h5>\n                            <button (click)=\"close()\" class=\"btn text-white\" style=\"font-size: 2rem;\">&times;</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 p-3 my-2\"\n                            *ngFor=\"let like of article.likes\">\n                            <div class=\"media\">\n                                <img src=\"https://img.favpng.com/23/0/3/computer-icons-user-profile-clip-art-portable-network-graphics-png-favpng-YEj6NsJygkt6nFTNgiXg9fg9w.jpg\"\n                                    height=\"22px\" width=\"22px\" class=\"mr-3 rounded-circle\" alt=\"...\">\n                                <div class=\"media-body\">\n                                    <strong class=\"mt-0\">{{like.username}}</strong>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"article.likes.length===0\" class=\"nohover col-12 p-3 my-2\">\n                            No Likes\n                        </div>\n                    </div>\n                </div>\n\n                <div #dislikesSheet class=\"bottom-sheet\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <h5 class=\"text-white m-0\" style=\"font-weight:700;\">dislikes</h5>\n                            <button (click)=\"close()\" class=\"btn text-white\" style=\"font-size: 2rem;\">&times;</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 p-3 my-2\"\n                            *ngFor=\"let dislike of article.dislikes\">\n                            <div class=\"media\">\n                                <img src=\"https://img.favpng.com/23/0/3/computer-icons-user-profile-clip-art-portable-network-graphics-png-favpng-YEj6NsJygkt6nFTNgiXg9fg9w.jpg\"\n                                    height=\"22px\" width=\"22px\" class=\"mr-3 rounded-circle\" alt=\"...\">\n                                <div class=\"media-body\">\n                                    <strong class=\"mt-0\">{{dislike.username}}</strong>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"article.dislikes.length===0\" class=\"nohover col-12 p-3 my-2\">\n                            No Dislikes\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</article>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/waves-button/waves-button.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/waves-button/waves-button.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWavesButtonWavesButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button #waveEffectButton (click)=\"waveEffect($event)\" class=\"waves-effect float-right\" type=\"submit\">Next\n    <span *ngIf=\"buttonClicked\" [ngStyle]=\"spanStyle()\" class=\"waves-ripple\"></span>\n</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wild-card/wild-card.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wild-card/wild-card.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWildCardWildCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-8 d-flex flex-column justify-content-center align-items-center\" style=\"min-height: 70vh;\">\n            <div class=\"text-center wildcard\">404 Not Found&nbsp;<i class=\"far fa-frown\"></i></div>\n            <p class=\"text-muted mt-2 link\" >Go To&nbsp;<a routerLink=\"/articles\">Home</a></p>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, routingComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routingComponents", function () {
      return routingComponents;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _blog_editor_blog_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blog-editor/blog-editor.component */
    "./src/app/blog-editor/blog-editor.component.ts");
    /* harmony import */


    var _show_article_show_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./show-article/show-article.component */
    "./src/app/show-article/show-article.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login-user/login-user.component */
    "./src/app/login-user/login-user.component.ts");
    /* harmony import */


    var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./register-user/register-user.component */
    "./src/app/register-user/register-user.component.ts");
    /* harmony import */


    var _guards_auth_user_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./guards/auth-user.guard */
    "./src/app/guards/auth-user.guard.ts");
    /* harmony import */


    var _wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./wild-card/wild-card.component */
    "./src/app/wild-card/wild-card.component.ts");
    /* harmony import */


    var _guards_login_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./guards/login.guard */
    "./src/app/guards/login.guard.ts");

    var routes = [{
      path: '',
      redirectTo: '/articles',
      pathMatch: 'full'
    }, {
      path: 'articles',
      component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"]
    }, {
      path: 'articles/new',
      component: _blog_editor_blog_editor_component__WEBPACK_IMPORTED_MODULE_3__["BlogEditorComponent"],
      canActivate: [_guards_auth_user_guard__WEBPACK_IMPORTED_MODULE_8__["AuthUserGuard"]]
    }, {
      path: 'articles/:slug',
      component: _show_article_show_article_component__WEBPACK_IMPORTED_MODULE_4__["ShowArticleComponent"],
      canActivate: [_guards_auth_user_guard__WEBPACK_IMPORTED_MODULE_8__["AuthUserGuard"]]
    }, {
      path: 'login',
      component: _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_6__["LoginUserComponent"],
      canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_10__["LoginGuard"]]
    }, {
      path: 'register',
      component: _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_7__["RegisterUserComponent"],
      canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_10__["LoginGuard"]]
    }, {
      path: '**',
      component: _wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_9__["WildCardComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    var routingComponents = [_blog_editor_blog_editor_component__WEBPACK_IMPORTED_MODULE_3__["BlogEditorComponent"], _show_article_show_article_component__WEBPACK_IMPORTED_MODULE_4__["ShowArticleComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"], _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_6__["LoginUserComponent"], _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_7__["RegisterUserComponent"], _wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_9__["WildCardComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angular-Frontend';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-quill */
    "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _articles_list_articles_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./articles-list/articles-list.component */
    "./src/app/articles-list/articles-list.component.ts");
    /* harmony import */


    var _waves_button_waves_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./waves-button/waves-button.component */
    "./src/app/waves-button/waves-button.component.ts");
    /* harmony import */


    var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/token-interceptor.service */
    "./src/app/services/token-interceptor.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _articles_list_articles_list_component__WEBPACK_IMPORTED_MODULE_10__["ArticlesListComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["routingComponents"], _waves_button_waves_button_component__WEBPACK_IMPORTED_MODULE_11__["WavesButtonComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillModule"].forRoot({
        modules: {
          syntax: true,
          toolbar: '#toolbar'
        },
        placeholder: '   Tell your story'
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptorService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/articles-list/articles-list.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/articles-list/articles-list.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppArticlesListArticlesListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".post-preview {\r\n    border: 0.04rem solid rgba(180, 180, 180, 0.8);\r\n    padding-bottom: 1.5rem;\r\n    padding-left: 1.4rem;\r\n    padding-right: 1rem;\r\n    margin-bottom: 1.5rem;\r\n    border-radius: 0.3rem;\r\n    background-color: white;\r\n    box-shadow: 0 7px 15px rgba(180, 180, 180, 0.4), 0 2px 7px rgba(180, 180, 180, 0.7);\r\n    transition: all 0.3s ease-out;\r\n  }\r\n\r\n  .post-preview:hover {\r\n    transform: translateY(-2%);\r\n    box-shadow: 0 9px 17px rgba(180, 180, 180, 0.2), 0 7px 15px rgba(180, 180, 180, 0.4), 0 2px 7px rgba(180, 180, 180, 0.7);\r\n  }\r\n\r\n  .post-preview > a {\r\n    color: #212529;\r\n  }\r\n\r\n  .post-preview > a:focus,\r\n  .post-preview > a:hover {\r\n    text-decoration: none;\r\n    color: #0085a1;\r\n  }\r\n\r\n  .post-preview > a > .post-title {\r\n    font-size: 36px;\r\n    margin-top: 30px;\r\n    margin-bottom: 10px;\r\n    font-weight: 800;\r\n  }\r\n\r\n  .post-preview > a > .post-subtitle {\r\n    font-weight: 300;\r\n    margin: 0 0 10px;\r\n    font-size: 1.2rem;\r\n    color: #6c757d;\r\n  }\r\n\r\n  .post-preview > .post-meta {\r\n    font-size: 1rem;\r\n    font-style: italic;\r\n    margin-top: 0;\r\n    color: #6c757d;\r\n  }\r\n\r\n  .post-preview > .post-meta > a {\r\n    text-decoration: none;\r\n    color: #212529;\r\n  }\r\n\r\n  .post-preview > .post-meta > a:focus,\r\n  .post-preview > .post-meta > a:hover {\r\n    text-decoration: underline;\r\n    color: #0085a1;\r\n  }\r\n\r\n  @media (max-width: 767.98px) {\r\n    .post-preview > a > .post-title {\r\n      color: #0085a1;\r\n    }\r\n  }\r\n\r\n  @-webkit-keyframes fadeInUp {\r\n    from {\r\n      opacity: 0;\r\n      transform: translate3d(0, 100%, 0);\r\n    }\r\n  \r\n    to {\r\n      opacity: 1;\r\n      transform: translate3d(0, 0, 0);\r\n    }\r\n  }\r\n\r\n  @keyframes fadeInUp {\r\n    from {\r\n      opacity: 0;\r\n      transform: translate3d(0, 100%, 0);\r\n    }\r\n  \r\n    to {\r\n      opacity: 1;\r\n      transform: translate3d(0, 0, 0);\r\n    }\r\n  }\r\n\r\n  .fadeInUp {\r\n    -webkit-animation-name: fadeInUp;\r\n    animation-name: fadeInUp;\r\n  }\r\n\r\n  .animated {\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n    /* -webkit-animation-delay: 0.4s;\r\n    animation-delay: 0.4s; */\r\n    -webkit-animation-timing-function: ease;\r\n    animation-timing-function: ease;\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXMtbGlzdC9hcnRpY2xlcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4Q0FBOEM7SUFDOUMsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUZBQW1GO0lBQ25GLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQix3SEFBd0g7RUFDMUg7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUNBOztJQUVFLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7RUFDaEI7O0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztFQUNoQjs7RUFDQTs7SUFFRSwwQkFBMEI7SUFDMUIsY0FBYztFQUNoQjs7RUFFQTtJQUNFO01BQ0UsY0FBYztJQUNoQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxVQUFVO01BRVYsa0NBQWtDO0lBQ3BDOztJQUVBO01BQ0UsVUFBVTtNQUVWLCtCQUErQjtJQUNqQztFQUNGOztFQUVBO0lBQ0U7TUFDRSxVQUFVO01BRVYsa0NBQWtDO0lBQ3BDOztJQUVBO01BQ0UsVUFBVTtNQUVWLCtCQUErQjtJQUNqQztFQUNGOztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6Qjs0QkFDd0I7SUFDeEIsdUNBQXVDO0lBQ3ZDLCtCQUErQjtFQUNqQyIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVzLWxpc3QvYXJ0aWNsZXMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtcHJldmlldyB7XHJcbiAgICBib3JkZXI6IDAuMDRyZW0gc29saWQgcmdiYSgxODAsIDE4MCwgMTgwLCAwLjgpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMS40cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCA3cHggMTVweCByZ2JhKDE4MCwgMTgwLCAxODAsIDAuNCksIDAgMnB4IDdweCByZ2JhKDE4MCwgMTgwLCAxODAsIDAuNyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIC5wb3N0LXByZXZpZXc6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDlweCAxN3B4IHJnYmEoMTgwLCAxODAsIDE4MCwgMC4yKSwgMCA3cHggMTVweCByZ2JhKDE4MCwgMTgwLCAxODAsIDAuNCksIDAgMnB4IDdweCByZ2JhKDE4MCwgMTgwLCAxODAsIDAuNyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3N0LXByZXZpZXcgPiBhIHtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gIH1cclxuICAucG9zdC1wcmV2aWV3ID4gYTpmb2N1cyxcclxuICAucG9zdC1wcmV2aWV3ID4gYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzAwODVhMTtcclxuICB9XHJcbiAgLnBvc3QtcHJldmlldyA+IGEgPiAucG9zdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG4gIC5wb3N0LXByZXZpZXcgPiBhID4gLnBvc3Qtc3VidGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gIH1cclxuICAucG9zdC1wcmV2aWV3ID4gLnBvc3QtbWV0YSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgfVxyXG4gIC5wb3N0LXByZXZpZXcgPiAucG9zdC1tZXRhID4gYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxuICB9XHJcbiAgLnBvc3QtcHJldmlldyA+IC5wb3N0LW1ldGEgPiBhOmZvY3VzLFxyXG4gIC5wb3N0LXByZXZpZXcgPiAucG9zdC1tZXRhID4gYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjMDA4NWExO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAucG9zdC1wcmV2aWV3ID4gYSA+IC5wb3N0LXRpdGxlIHtcclxuICAgICAgY29sb3I6ICMwMDg1YTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVXAge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICAgIH1cclxuICBcclxuICAgIHRvIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0byB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJblVwIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xyXG4gIH1cclxuXHJcbiAgLmFuaW1hdGVkIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgLyogLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7ICovXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gIH1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/articles-list/articles-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/articles-list/articles-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: ArticlesListComponent */

  /***/
  function srcAppArticlesListArticlesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlesListComponent", function () {
      return ArticlesListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_blog_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/blog-post.service */
    "./src/app/services/blog-post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ArticlesListComponent = /*#__PURE__*/function () {
      function ArticlesListComponent(_blogPostService, _router, _route) {
        _classCallCheck(this, ArticlesListComponent);

        this._blogPostService = _blogPostService;
        this._router = _router;
        this._route = _route;
        this.allArticles = [];
        this.errorMsg = "";
      }

      _createClass(ArticlesListComponent, [{
        key: "getArticle",
        value: function getArticle(slug) {
          this._router.navigate(['/articles', slug]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // console.log("component initialised");
          this._blogPostService.getArticles().subscribe(function (items) {
            _this.allArticles = items; // console.log("data received");
          }, function (err) {
            return _this.errorMsg = err.error;
          }); // this.allArticles = this._route.snapshot.data.allArticles;

        }
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {}
      }]);

      return ArticlesListComponent;
    }();

    ArticlesListComponent.ctorParameters = function () {
      return [{
        type: _services_blog_post_service__WEBPACK_IMPORTED_MODULE_2__["BlogPostService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ArticlesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-articles-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./articles-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/articles-list/articles-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./articles-list.component.css */
      "./src/app/articles-list/articles-list.component.css"))["default"]]
    })], ArticlesListComponent);
    /***/
  },

  /***/
  "./src/app/blog-editor/blog-editor.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/blog-editor/blog-editor.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogEditorBlogEditorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* quill-editor hr {\r\n    border: none;\r\n    color: #111;\r\n    letter-spacing: 1em;\r\n    text-align: center;\r\n}\r\nquill-editor hr:before {\r\n    content: '...';\r\n} */\r\n\r\n* {\r\n    font-family: Lora, 'Times New Roman', serif;\r\n    letter-spacing: 0.8px;\r\n    color: #333;\r\n}\r\n\r\n#toolbar button {\r\n    background: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n    color: rgba(360, 360, 360, .2);\r\n    display: inline-block;\r\n    font-size: 1rem;\r\n    padding: 0.2rem;\r\n    height: 1.9rem;\r\n    width: 1.9rem;\r\n    text-align: center;\r\n  }\r\n\r\ninput, input:focus, input:hover, select, select:focus, select:hover {\r\n      border: 0rem solid rgba(180, 180, 180, 0.3);\r\n      box-shadow: 0 4px 10px rgba(180, 180, 180, 0.4), 0 2px 2px rgba(180, 180, 180, 0.7);\r\n      outline: none;\r\n      height: 3.5rem;\r\n      padding-left: 1.5rem;\r\n      padding-right: 1.5rem;\r\n      font-size: 1.15rem;\r\n      color: #666;\r\n      /* font-family: cursive; */\r\n      letter-spacing: 0.8px;\r\n  }\r\n\r\nlabel h5, h4 {\r\n      font-family: cursive;\r\n  }\r\n\r\nbutton:active, button:focus {\r\n    outline: none;\r\n  }\r\n\r\n#toolbar {\r\n      text-align: center;\r\n      background-color: rgb(26, 24, 24);\r\n      color: white;\r\n  }\r\n\r\nbutton.btn.btn-primary {\r\n      color: rgba(360, 360, 360, 0.9);\r\n      box-shadow: 2px 2px 5px rgba(150, 150, 150, 1), 3px 3px 5px rgba(180, 180, 180, 0.3);\r\n      transition: all 0.7s ease-out;\r\n  }\r\n\r\nbutton.btn.btn-primary:hover, button.btn.btn-primary:active {\r\n    transform: translateY(-8%);\r\n    color: rgba(360, 360, 360, 0.9);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy1lZGl0b3IvYmxvZy1lZGl0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRzs7QUFFSDtJQUNJLDJDQUEyQztJQUMzQyxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCOztBQUVBO01BQ0ksMkNBQTJDO01BQzNDLG1GQUFtRjtNQUNuRixhQUFhO01BQ2IsY0FBYztNQUNkLG9CQUFvQjtNQUNwQixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCwwQkFBMEI7TUFDMUIscUJBQXFCO0VBQ3pCOztBQUVBO01BQ0ksb0JBQW9CO0VBQ3hCOztBQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVBO01BQ0ksa0JBQWtCO01BQ2xCLGlDQUFpQztNQUNqQyxZQUFZO0VBQ2hCOztBQUVBO01BQ0ksK0JBQStCO01BQy9CLG9GQUFvRjtNQUNwRiw2QkFBNkI7RUFDakM7O0FBRUE7SUFDRSwwQkFBMEI7SUFDMUIsK0JBQStCO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvYmxvZy1lZGl0b3IvYmxvZy1lZGl0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHF1aWxsLWVkaXRvciBociB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzExMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxucXVpbGwtZWRpdG9yIGhyOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnLi4uJztcclxufSAqL1xyXG5cclxuKiB7XHJcbiAgICBmb250LWZhbWlseTogTG9yYSwgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbiN0b29sYmFyIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiByZ2JhKDM2MCwgMzYwLCAzNjAsIC4yKTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgIGhlaWdodDogMS45cmVtO1xyXG4gICAgd2lkdGg6IDEuOXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGlucHV0LCBpbnB1dDpmb2N1cywgaW5wdXQ6aG92ZXIsIHNlbGVjdCwgc2VsZWN0OmZvY3VzLCBzZWxlY3Q6aG92ZXIge1xyXG4gICAgICBib3JkZXI6IDByZW0gc29saWQgcmdiYSgxODAsIDE4MCwgMTgwLCAwLjMpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMTgwLCAxODAsIDE4MCwgMC40KSwgMCAycHggMnB4IHJnYmEoMTgwLCAxODAsIDE4MCwgMC43KTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgIC8qIGZvbnQtZmFtaWx5OiBjdXJzaXZlOyAqL1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbiAgfVxyXG5cclxuICBsYWJlbCBoNSwgaDQge1xyXG4gICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjphY3RpdmUsIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgI3Rvb2xiYXIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNiwgMjQsIDI0KTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDM2MCwgMzYwLCAzNjAsIDAuOSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMTUwLCAxNTAsIDE1MCwgMSksIDNweCAzcHggNXB4IHJnYmEoMTgwLCAxODAsIDE4MCwgMC4zKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICBidXR0b24uYnRuLmJ0bi1wcmltYXJ5OmhvdmVyLCBidXR0b24uYnRuLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTglKTtcclxuICAgIGNvbG9yOiByZ2JhKDM2MCwgMzYwLCAzNjAsIDAuOSk7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/blog-editor/blog-editor.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/blog-editor/blog-editor.component.ts ***!
    \******************************************************/

  /*! exports provided: BlogEditorComponent */

  /***/
  function srcAppBlogEditorBlogEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogEditorComponent", function () {
      return BlogEditorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_blog_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/blog-post.service */
    "./src/app/services/blog-post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/auth-user.service */
    "./src/app/services/auth-user.service.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");

    var BlogEditorComponent = /*#__PURE__*/function () {
      function BlogEditorComponent(fb, _blogPostService, _router, _authUserService, _dataService) {
        _classCallCheck(this, BlogEditorComponent);

        this.fb = fb;
        this._blogPostService = _blogPostService;
        this._router = _router;
        this._authUserService = _authUserService;
        this._dataService = _dataService;
        this.editorMaxLength = 50000;
        this.submitted = false;
        this.allFieldsValid = false;
        this.categories = [];
        this.error = "";
        this.success = "";
        this.editorStyle = {
          minHeight: "80vh",
          backgroundColor: "white",
          color: "#212529",
          letterSpacing: "1.25px",
          fontSize: "20px",
          border: "0.04rem solid rgba(180, 180, 180, 0.3)",
          borderRadius: "5px",
          boxShadow: "0 7px 15px rgba(180, 180, 180, 0.4), 0 2px 7px rgba(180, 180, 180, 0.7)",
          padding: "1.5rem"
        };
      }

      _createClass(BlogEditorComponent, [{
        key: "maxlength",
        value: function maxlength(e) {
          this.editorLength = e.editor.getLength() - 1;

          if (e.editor.getLength() > this.editorMaxLength) {
            e.editor.deleteText(this.editorMaxLength, e.editor.getLength());
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          if (this.submitted) {
            this.submitted = false; // let tempForm = this.editorForm.value;
            // console.log("reset ho gya");

            this.editorForm.markAsPristine();
            this.editorForm.markAsUntouched(); // console.log("reset hone k baad");
            // console.log(this.editorForm.value);
          }
        }
      }, {
        key: "getErrorMsg",
        value: function getErrorMsg(field, minlength) {
          var result = "";
          var errors = this.editorForm.get(field).errors;
          var element = this.editorForm.get(field); // agar yha pr error aaye ki cannot get property required of null
          // toh errors.required se phle this.editorForm.get(field).touched laga dena
          // pata nhi ye kyu hota h but isse error ht gya tha

          if (element.touched && errors.required) {
            result += "*" + field + " is required";
          }

          if (element.touched && errors.minlength) {
            result += "*" + field + " must be at least " + minlength + " characters long";
          }

          return result;
        }
      }, {
        key: "isFieldValid",
        value: function isFieldValid(field) {
          return this.editorForm.get(field).invalid && this.editorForm.get(field).touched || this.editorForm.get(field).untouched && this.submitted;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this2 = this;

          // this.editorContent = this.editorForm.get("editor").value;
          // console.log(this.editorForm.get("editor").value);
          this.submitted = true;

          if (this.editorForm.valid) {
            // console.log("submit ho gya");
            console.log(this.editorForm);
            this.allFieldsValid = true; // this._blogPostService.setContent(this.editorForm.get('content').value);
            // this._router.navigate(['/articles/show']);
            // console.log(this.editorForm.valid);

            this._blogPostService.postArticle(this.editorForm.value).subscribe(function (res) {
              console.log("success"), _this2.success = "Successfully Uploaded";

              _this2._router.navigate(['/articles', res.slug]);
            }, function (err) {
              console.log(err);
              _this2.error = err.error;

              _this2.editorForm.markAsPristine();

              _this2.editorForm.markAsUntouched();
            });
          } // else {
          //   console.log('submit nhi ho paya');
          //   console.log(this.editorForm);
          // }

        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.editorForm = this.fb.group({
            title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
            caption: [""],
            category: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            content: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(50)]]
          });
          $('[data-toggle="tooltip"]').tooltip();
          this.username = localStorage.getItem('username');
          this.categories = this._dataService.getCategories();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {// this.title.nativeElement.focus();
        }
      }]);

      return BlogEditorComponent;
    }();

    BlogEditorComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_blog_post_service__WEBPACK_IMPORTED_MODULE_3__["BlogPostService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_auth_user_service__WEBPACK_IMPORTED_MODULE_5__["AuthUserService"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("title", {
      "static": false
    })], BlogEditorComponent.prototype, "title", void 0);
    BlogEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-blog-editor",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog-editor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-editor/blog-editor.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog-editor.component.css */
      "./src/app/blog-editor/blog-editor.component.css"))["default"]]
    })], BlogEditorComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer {\r\n    padding: 50px 0 65px;\r\n  }\r\n  footer .list-inline {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  footer .copyright {\r\n    font-size: 14px;\r\n    margin-bottom: 0;\r\n    text-align: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDAgNjVweDtcclxuICB9XHJcbiAgZm9vdGVyIC5saXN0LWlubGluZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBmb290ZXIgLmNvcHlyaWdodCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/guards/auth-user.guard.ts":
  /*!*******************************************!*\
    !*** ./src/app/guards/auth-user.guard.ts ***!
    \*******************************************/

  /*! exports provided: AuthUserGuard */

  /***/
  function srcAppGuardsAuthUserGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthUserGuard", function () {
      return AuthUserGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth-user.service */
    "./src/app/services/auth-user.service.ts");

    var AuthUserGuard = /*#__PURE__*/function () {
      function AuthUserGuard(_authUserService, _router) {
        _classCallCheck(this, AuthUserGuard);

        this._authUserService = _authUserService;
        this._router = _router;
      }

      _createClass(AuthUserGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this._authUserService.isLoggedIn()) {
            return true;
          } else {
            this._router.navigate(['/login']);

            return false;
          }
        }
      }]);

      return AuthUserGuard;
    }();

    AuthUserGuard.ctorParameters = function () {
      return [{
        type: _services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__["AuthUserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthUserGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthUserGuard);
    /***/
  },

  /***/
  "./src/app/guards/login.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/guards/login.guard.ts ***!
    \***************************************/

  /*! exports provided: LoginGuard */

  /***/
  function srcAppGuardsLoginGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
      return LoginGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth-user.service */
    "./src/app/services/auth-user.service.ts");

    var LoginGuard = /*#__PURE__*/function () {
      function LoginGuard(_authUserService, _router) {
        _classCallCheck(this, LoginGuard);

        this._authUserService = _authUserService;
        this._router = _router;
      }

      _createClass(LoginGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this._authUserService.isLoggedIn()) {
            return true;
          } else {
            this._router.navigate(['/articles']);

            return false;
          }
        }
      }]);

      return LoginGuard;
    }();

    LoginGuard.ctorParameters = function () {
      return [{
        type: _services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__["AuthUserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginGuard);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#body-row {\r\n    margin-left:0;\r\n    margin-right:0;\r\n}\r\n#sidebar-container {\r\n    min-height: 100vh;   \r\n    background-color: #333;\r\n    padding: 0;\r\n    left: -100%;\r\n}\r\n/* Sidebar sizes when expanded and expanded */\r\n.sidebar-expanded {\r\n    width: 230px;\r\n}\r\n.sidebar-collapsed {\r\n    width: 60px;\r\n}\r\n/* Menu item*/\r\n#sidebar-container .list-group a {\r\n    height: 50px;\r\n    color: white;\r\n}\r\n/* Submenu item*/\r\n#sidebar-container .list-group .sidebar-submenu a {\r\n    height: 45px;\r\n    padding-left: 40px;\r\n}\r\n.sidebar-submenu {\r\n    font-size: 0.9rem;\r\n}\r\n/* Separators */\r\n.sidebar-separator-title {\r\n    background-color: #333;\r\n    height: 35px;\r\n}\r\n.sidebar-separator {\r\n    background-color: #333;\r\n    height: 25px;\r\n}\r\n.logo-separator {\r\n    background-color: #333;    \r\n    height: 60px;\r\n}\r\n/* Closed submenu icon */\r\n#sidebar-container .list-group .list-group-item[aria-expanded=\"false\"] .submenu-icon::after {\r\n  content: \" \\f0d7\";\r\n  font-family: FontAwesome;\r\n  display: inline;\r\n  text-align: right;\r\n  padding-left: 10px;\r\n}\r\n/* Opened submenu icon */\r\n#sidebar-container .list-group .list-group-item[aria-expanded=\"true\"] .submenu-icon::after {\r\n  content: \" \\f0da\";\r\n  font-family: FontAwesome;\r\n  display: inline;\r\n  text-align: right;\r\n  padding-left: 10px;\r\n}\r\nli.nav-item a.nav-link {\r\n    color: rgba(360, 360, 360, 0.85);\r\n}\r\nli.nav-item a.nav-link:hover {\r\n    color: rgba(360, 360, 360, 1);\r\n}\r\nli.nav-item > a.btn-green {\r\n    background-color: rgb(0, 139, 0);\r\n    color: rgba(360, 360, 360, 0.9);\r\n}\r\nli.nav-item > a.btn-blue {\r\n    background-color: #1b5f9e;\r\n    color: rgba(360, 360, 360, 0.9);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBLDZDQUE2QztBQUM3QztJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBLGFBQWE7QUFDYjtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUEsZUFBZTtBQUNmO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQSx3QkFBd0I7QUFDeEI7RUFDRSxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLCtCQUErQjtBQUNuQztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLCtCQUErQjtBQUNuQyIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib2R5LXJvdyB7XHJcbiAgICBtYXJnaW4tbGVmdDowO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjA7XHJcbn1cclxuI3NpZGViYXItY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoOyAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxufVxyXG5cclxuLyogU2lkZWJhciBzaXplcyB3aGVuIGV4cGFuZGVkIGFuZCBleHBhbmRlZCAqL1xyXG4uc2lkZWJhci1leHBhbmRlZCB7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbn1cclxuLnNpZGViYXItY29sbGFwc2VkIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4vKiBNZW51IGl0ZW0qL1xyXG4jc2lkZWJhci1jb250YWluZXIgLmxpc3QtZ3JvdXAgYSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIFN1Ym1lbnUgaXRlbSovXHJcbiNzaWRlYmFyLWNvbnRhaW5lciAubGlzdC1ncm91cCAuc2lkZWJhci1zdWJtZW51IGEge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG59XHJcbi5zaWRlYmFyLXN1Ym1lbnUge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi8qIFNlcGFyYXRvcnMgKi9cclxuLnNpZGViYXItc2VwYXJhdG9yLXRpdGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuLnNpZGViYXItc2VwYXJhdG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuLmxvZ28tc2VwYXJhdG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7ICAgIFxyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4vKiBDbG9zZWQgc3VibWVudSBpY29uICovXHJcbiNzaWRlYmFyLWNvbnRhaW5lciAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtW2FyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXSAuc3VibWVudS1pY29uOjphZnRlciB7XHJcbiAgY29udGVudDogXCIgXFxmMGQ3XCI7XHJcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLyogT3BlbmVkIHN1Ym1lbnUgaWNvbiAqL1xyXG4jc2lkZWJhci1jb250YWluZXIgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSAuc3VibWVudS1pY29uOjphZnRlciB7XHJcbiAgY29udGVudDogXCIgXFxmMGRhXCI7XHJcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmxpLm5hdi1pdGVtIGEubmF2LWxpbmsge1xyXG4gICAgY29sb3I6IHJnYmEoMzYwLCAzNjAsIDM2MCwgMC44NSk7XHJcbn1cclxuXHJcbmxpLm5hdi1pdGVtIGEubmF2LWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMzYwLCAzNjAsIDM2MCwgMSk7XHJcbn1cclxuXHJcbmxpLm5hdi1pdGVtID4gYS5idG4tZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEzOSwgMCk7XHJcbiAgICBjb2xvcjogcmdiYSgzNjAsIDM2MCwgMzYwLCAwLjkpO1xyXG59XHJcblxyXG5saS5uYXYtaXRlbSA+IGEuYnRuLWJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiNWY5ZTtcclxuICAgIGNvbG9yOiByZ2JhKDM2MCwgMzYwLCAzNjAsIDAuOSk7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth-user.service */
    "./src/app/services/auth-user.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(_authUserService) {
        _classCallCheck(this, HeaderComponent);

        this._authUserService = _authUserService;
      }

      _createClass(HeaderComponent, [{
        key: "hide",
        value: function hide() {
          this.sidebarContainer.nativeElement.style.left = '-100%';
          this.sidebarContainer.nativeElement.style.transition = '0.8s ease-in';
        }
      }, {
        key: "hide2",
        value: function hide2() {
          this._authUserService.logoutUser();

          this.sidebarContainer.nativeElement.style.left = '-100%';
          this.sidebarContainer.nativeElement.style.transition = '0.8s ease-in';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          $('.navbar-toggler').click(function () {
            $('#sidebar-container').css({
              'left': '0',
              'transition': '0.8s ease-out'
            });
          });
          $('.shrink-sidebar').click(function () {
            $('#sidebar-container').css({
              'left': '-100%',
              'transition': '0.8s ease-in'
            });
          }); // Hide submenus

          $('#body-row .collapse').collapse('hide'); // Collapse/Expand icon

          $('#collapse-icon').addClass('fa-angle-double-left'); // Collapse click
          // $('[data-toggle=sidebar-colapse]').click(function() {
          //     SidebarCollapse();
          // });
          // function SidebarCollapse () {
          //     $('.menu-collapsed').toggleClass('d-none');
          //     $('.sidebar-submenu').toggleClass('d-none');
          //     $('.submenu-icon').toggleClass('d-none');
          //     $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
          //     $('#sidebar-container').css('transition', '0.2s');
          //     // Treating d-flex/d-none on separators with title
          //     var SeparatorTitle = $('.sidebar-separator-title');
          //     if ( SeparatorTitle.hasClass('d-flex') ) {
          //         SeparatorTitle.removeClass('d-flex');
          //     } else {
          //         SeparatorTitle.addClass('d-flex');
          //     }
          //     // Collapse/Expand icon
          //     $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
          // }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebarContainer', {
      "static": false
    })], HeaderComponent.prototype, "sidebarContainer", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home-page/home-page.component.css":
  /*!***************************************************!*\
    !*** ./src/app/home-page/home-page.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageHomePageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "header.masthead {\r\n  margin-bottom: 50px;\r\n  background: no-repeat 50%;\r\n  background-color: #6c757d;\r\n  background-attachment: scroll;\r\n  position: relative;\r\n  background-size: cover;\r\n}\r\nheader.masthead .overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: #212529;\r\n  opacity: 0.5;\r\n}\r\nheader.masthead .page-heading,\r\nheader.masthead .post-heading,\r\nheader.masthead .site-heading {\r\n  padding: 200px 0 150px;\r\n  color: #fff;\r\n}\r\n@media only screen and (min-width: 768px) {\r\n  header.masthead .page-heading,\r\n  header.masthead .post-heading,\r\n  header.masthead .site-heading {\r\n    padding: 200px 0;\r\n  }\r\n}\r\nheader.masthead .page-heading,\r\nheader.masthead .site-heading {\r\n  text-align: center;\r\n}\r\nheader.masthead .page-heading h1,\r\nheader.masthead .site-heading h1 {\r\n  font-size: 50px;\r\n  margin-top: 0;\r\n}\r\nheader.masthead .page-heading .subheading,\r\nheader.masthead .site-heading .subheading {\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n  line-height: 1.1;\r\n  display: block;\r\n  margin: 10px 0 0;\r\n  font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n}\r\n@media only screen and (min-width: 768px) {\r\n  header.masthead .page-heading h1,\r\n  header.masthead .site-heading h1 {\r\n    font-size: 80px;\r\n  }\r\n}\r\nheader.masthead .post-heading h1 {\r\n  font-size: 35px;\r\n}\r\nheader.masthead .post-heading .meta,\r\nheader.masthead .post-heading .subheading {\r\n  line-height: 1.1;\r\n  display: block;\r\n}\r\nheader.masthead .post-heading .subheading {\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  margin: 10px 0 30px;\r\n  font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n}\r\nheader.masthead .post-heading .meta {\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n  font-style: italic;\r\n  font-family: Lora, Times New Roman, serif;\r\n}\r\nheader.masthead .post-heading .meta a {\r\n  color: #fff;\r\n}\r\n@media only screen and (min-width: 768px) {\r\n  header.masthead .post-heading h1 {\r\n    font-size: 55px;\r\n  }\r\n  header.masthead .post-heading .subheading {\r\n    font-size: 30px;\r\n  }\r\n}\r\n.floating-label-form-group {\r\n  font-size: 14px;\r\n  position: relative;\r\n  margin-bottom: 0;\r\n  padding-bottom: 0.5em;\r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n.floating-label-form-group input,\r\n.floating-label-form-group textarea {\r\n  font-size: 1.5em;\r\n  position: relative;\r\n  z-index: 1;\r\n  padding: 0;\r\n  resize: none;\r\n  border: none;\r\n  border-radius: 0;\r\n  background: none;\r\n  box-shadow: none !important;\r\n  font-family: Lora, Times New Roman, serif;\r\n}\r\n.floating-label-form-group input::-webkit-input-pflaceholder,\r\n.floating-label-form-group textarea::-webkit-input-placeholder {\r\n  color: #6c757d;\r\n  font-family: Lora, Times New Roman, serif;\r\n}\r\n.floating-label-form-group label {\r\n  font-size: 0.85em;\r\n  line-height: 1.764705882em;\r\n  position: relative;\r\n  z-index: 0;\r\n  top: 2em;\r\n  display: block;\r\n  margin: 0;\r\n  transition: top 0.3s ease, opacity 0.3s ease;\r\n  opacity: 0;\r\n}\r\n.floating-label-form-group .help-block {\r\n  margin: 15px 0;\r\n}\r\n.floating-label-form-group-with-value label {\r\n  top: 0;\r\n  opacity: 1;\r\n}\r\n.floating-label-form-group-with-focus label {\r\n  color: #0085a1;\r\n}\r\nform .form-group:first-child .floating-label-form-group {\r\n  border-top: 1px solid #dee2e6;\r\n}\r\n.form-text {\r\n  font-size: 16px;\r\n}\r\n.post-options {\r\n  position: fixed;\r\n  width: 18%;\r\n  left: inherit;\r\n  top: inherit;\r\n  background-color: aqua;\r\n  height: 500px;\r\n}\r\n@media (max-width: 767.98px) {\r\n    .post-options {\r\n        display: none;\r\n    }\r\n}\r\n@media (min-width: 1200px) {\r\n  .post-options {\r\n    width: 14%;\r\n  }\r\n}\r\n.write-article {\r\n  border: 0.04rem solid rgba(180, 180, 180, 0.8);\r\n  padding-bottom: 1.5rem;\r\n  padding-left: 1.4rem;\r\n  padding-right: 1rem;\r\n  margin-bottom: 1.5rem;\r\n  border-radius: 0.3rem;\r\n  background-color: white;\r\n  box-shadow: 0 7px 15px rgba(180, 180, 180, 0.4), 0 2px 7px rgba(180, 180, 180, 0.7);\r\n  transition: all 0.3s ease-out;\r\n  height: 7rem;\r\n  margin-bottom: 2rem;\r\n  padding: 2rem;\r\n  color: #6c757d;\r\n  font-family: Lora, Times New Roman, serif;\r\n  font-weight: 600;\r\n  border-color: rgba(180, 180, 180, 0.4);\r\n  opacity: 0.9;\r\n  cursor: text;\r\n}\r\n.write-article h5 {\r\n  margin-top: 0.1rem;\r\n  font-weight: 600;\r\n  opacity: 0.6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBOzs7RUFHRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBQ0E7RUFDRTs7O0lBR0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixvRUFBb0U7QUFDdEU7QUFDQTtFQUNFOztJQUVFLGVBQWU7RUFDakI7QUFDRjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvRUFBb0U7QUFDdEU7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGdDQUFnQztBQUNsQztBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLHlDQUF5QztBQUMzQztBQUNBOztFQUVFLGNBQWM7RUFDZCx5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsY0FBYztFQUNkLFNBQVM7RUFDVCw0Q0FBNEM7RUFDNUMsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxNQUFNO0VBQ04sVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUVBO0VBQ0UsOENBQThDO0VBQzlDLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG1GQUFtRjtFQUNuRiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxnQkFBZ0I7RUFDaEIsc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyLm1hc3RoZWFkIHtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5oZWFkZXIubWFzdGhlYWQgLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuaGVhZGVyLm1hc3RoZWFkIC5wYWdlLWhlYWRpbmcsXHJcbmhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nLFxyXG5oZWFkZXIubWFzdGhlYWQgLnNpdGUtaGVhZGluZyB7XHJcbiAgcGFkZGluZzogMjAwcHggMCAxNTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaGVhZGVyLm1hc3RoZWFkIC5wYWdlLWhlYWRpbmcsXHJcbiAgaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcsXHJcbiAgaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZzogMjAwcHggMDtcclxuICB9XHJcbn1cclxuaGVhZGVyLm1hc3RoZWFkIC5wYWdlLWhlYWRpbmcsXHJcbmhlYWRlci5tYXN0aGVhZCAuc2l0ZS1oZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaGVhZGVyLm1hc3RoZWFkIC5wYWdlLWhlYWRpbmcgaDEsXHJcbmhlYWRlci5tYXN0aGVhZCAuc2l0ZS1oZWFkaW5nIGgxIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5oZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyAuc3ViaGVhZGluZyxcclxuaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcgLnN1YmhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMDtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaGVhZGVyLm1hc3RoZWFkIC5wYWdlLWhlYWRpbmcgaDEsXHJcbiAgaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcgaDEge1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gIH1cclxufVxyXG5oZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyBoMSB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbmhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5tZXRhLFxyXG5oZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyAuc3ViaGVhZGluZyB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5oZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyAuc3ViaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMzBweDtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5oZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyAubWV0YSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtZmFtaWx5OiBMb3JhLCBUaW1lcyBOZXcgUm9tYW4sIHNlcmlmO1xyXG59XHJcbmhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5tZXRhIGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBoZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyBoMSB7XHJcbiAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgfVxyXG4gIGhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5zdWJoZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIGlucHV0LFxyXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCB0ZXh0YXJlYSB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogTG9yYSwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcclxufVxyXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wZmxhY2Vob2xkZXIsXHJcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBmb250LWZhbWlseTogTG9yYSwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcclxufVxyXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzY0NzA1ODgyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgdG9wOiAyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRyYW5zaXRpb246IHRvcCAwLjNzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAgLmhlbHAtYmxvY2sge1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG59XHJcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwLXdpdGgtdmFsdWUgbGFiZWwge1xyXG4gIHRvcDogMDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwLXdpdGgtZm9jdXMgbGFiZWwge1xyXG4gIGNvbG9yOiAjMDA4NWExO1xyXG59XHJcbmZvcm0gLmZvcm0tZ3JvdXA6Zmlyc3QtY2hpbGQgLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcbi5mb3JtLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnBvc3Qtb3B0aW9ucyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxOCU7XHJcbiAgbGVmdDogaW5oZXJpdDtcclxuICB0b3A6IGluaGVyaXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIC5wb3N0LW9wdGlvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAucG9zdC1vcHRpb25zIHtcclxuICAgIHdpZHRoOiAxNCU7XHJcbiAgfVxyXG59XHJcblxyXG4ud3JpdGUtYXJ0aWNsZSB7XHJcbiAgYm9yZGVyOiAwLjA0cmVtIHNvbGlkIHJnYmEoMTgwLCAxODAsIDE4MCwgMC44KTtcclxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMS40cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDdweCAxNXB4IHJnYmEoMTgwLCAxODAsIDE4MCwgMC40KSwgMCAycHggN3B4IHJnYmEoMTgwLCAxODAsIDE4MCwgMC43KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICBoZWlnaHQ6IDdyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGZvbnQtZmFtaWx5OiBMb3JhLCBUaW1lcyBOZXcgUm9tYW4sIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE4MCwgMTgwLCAxODAsIDAuNCk7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIGN1cnNvcjogdGV4dDtcclxufVxyXG5cclxuLndyaXRlLWFydGljbGUgaDUge1xyXG4gIG1hcmdpbi10b3A6IDAuMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home-page/home-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-page/home-page.component.ts ***!
    \**************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth-user.service */
    "./src/app/services/auth-user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomePageComponent = /*#__PURE__*/function () {
      function HomePageComponent(_authUserService, _router) {
        _classCallCheck(this, HomePageComponent);

        this._authUserService = _authUserService;
        this._router = _router;
      }

      _createClass(HomePageComponent, [{
        key: "addArticle",
        value: function addArticle() {
          if (this._authUserService.isLoggedIn()) {
            this._router.navigate(['/articles/new']);
          } else {
            this._router.navigate(['/login']);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          $(document).ready(function () {
            "use strict"; // Start of use strict
            // Floating label headings for the contact form
            // $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            //   $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
            // }).on("focus", ".floating-label-form-group", function() {
            //   $(this).addClass("floating-label-form-group-with-focus");
            // }).on("blur", ".floating-label-form-group", function() {
            //   $(this).removeClass("floating-label-form-group-with-focus");
            // });
          });
          this.username = localStorage.getItem("username");
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ctorParameters = function () {
      return [{
        type: _services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page.component.css */
      "./src/app/home-page/home-page.component.css"))["default"]]
    })], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/login-user/login-user.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/login-user/login-user.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginUserLoginUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-shadow {\r\n    box-shadow: 1px 3px 10px rgba(180, 180, 180, 0.5), 2px 5px 15px rgba(180, 180, 180, 0.2)\r\n}\r\n\r\n.input-control-shadow {\r\n    box-shadow: 0px 0px 5px rgba(180, 180, 180, 0.5), 0px 0px 10px rgba(180, 180, 180, 0.2)\r\n}\r\n\r\n.header {\r\n    text-align: center;\r\n}\r\n\r\nh5 {\r\n    display: inline;\r\n    font-size: 1.5rem;\r\n    font-weight: 400;\r\n    color: rgba(0, 0, 0, 0.85);\r\n    text-align: center;\r\n    padding-bottom: 1rem;\r\n    border-bottom: 2px solid rgba(0, 0, 0, 0.85);\r\n}\r\n\r\na {\r\n    color: #007bff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tdXNlci9sb2dpbi11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi11c2VyL2xvZ2luLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXNoYWRvdyB7XHJcbiAgICBib3gtc2hhZG93OiAxcHggM3B4IDEwcHggcmdiYSgxODAsIDE4MCwgMTgwLCAwLjUpLCAycHggNXB4IDE1cHggcmdiYSgxODAsIDE4MCwgMTgwLCAwLjIpXHJcbn1cclxuXHJcbi5pbnB1dC1jb250cm9sLXNoYWRvdyB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDE4MCwgMTgwLCAxODAsIDAuNSksIDBweCAwcHggMTBweCByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMilcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjg1KTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login-user/login-user.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/login-user/login-user.component.ts ***!
    \****************************************************/

  /*! exports provided: LoginUserComponent */

  /***/
  function srcAppLoginUserLoginUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginUserComponent", function () {
      return LoginUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth-user.service */
    "./src/app/services/auth-user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");

    var LoginUserComponent = /*#__PURE__*/function () {
      function LoginUserComponent(_authUserService, _router, fb, _dataService) {
        _classCallCheck(this, LoginUserComponent);

        this._authUserService = _authUserService;
        this._router = _router;
        this.fb = fb;
        this._dataService = _dataService;
        this.submitted = false;
        this.error = "";
        this.success = "";
        this.allFieldsValid = false;
      }

      _createClass(LoginUserComponent, [{
        key: "isFieldValid",
        value: function isFieldValid(field) {
          return this.form.get(field).invalid && this.form.get(field).touched || this.form.get(field).untouched && this.submitted;
        }
      }, {
        key: "getErrorMsg",
        value: function getErrorMsg(field, minlength) {
          var result = "";
          var errors = this.form.get(field).errors;
          var element = this.form.get(field);

          if (element.touched && errors.required) {
            result += "*" + field + " is required";
          } else if (element.touched && errors.minlength) {
            result = "*" + field + " must be at least " + minlength + " characters long";
          }

          return result;
        }
      }, {
        key: "reset",
        value: function reset() {
          if (this.submitted) {
            this.submitted = false;
            this.form.markAsUntouched();
            this.form.markAsPristine();
          }
        }
      }, {
        key: "login",
        value: function login() {
          var _this3 = this;

          this.submitted = true;

          if (this.form.valid) {
            this.allFieldsValid = true;

            this._authUserService.loginUser(this.form.value).subscribe(function (res) {
              _this3.success = "logged in";
              var expiresAt = moment__WEBPACK_IMPORTED_MODULE_4__().add(res.expiresIn, 'second');
              localStorage.setItem('token', res.idToken);
              localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
              localStorage.setItem('username', res.username);

              _this3._router.navigate(['/articles']);
            }, function (err) {
              _this3.error = err.error;
              console.log(err);

              _this3.reset();
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8)]]
          });
        }
      }]);

      return LoginUserComponent;
    }();

    LoginUserComponent.ctorParameters = function () {
      return [{
        type: _services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
      }];
    };

    LoginUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login-user/login-user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-user.component.css */
      "./src/app/login-user/login-user.component.css"))["default"]]
    })], LoginUserComponent);
    /***/
  },

  /***/
  "./src/app/models/article.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/article.model.ts ***!
    \*****************************************/

  /*! exports provided: Article */

  /***/
  function srcAppModelsArticleModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Article", function () {
      return Article;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user.model */
    "./src/app/models/user.model.ts");

    var Article = /*#__PURE__*/function () {
      function Article() {
        _classCallCheck(this, Article);
      }

      _createClass(Article, [{
        key: "deserialize",
        value: function deserialize(input) {
          Object.assign(this, input);
          this.likes = input.likes.map(function (like) {
            return new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"]().deserialize(like);
          });
          this.dislikes = input.dislikes.map(function (dislike) {
            return new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"]().deserialize(dislike);
          });
          this.views = input.views.map(function (view) {
            return new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"]().deserialize(view);
          });
          return this;
        }
      }]);

      return Article;
    }();
    /***/

  },

  /***/
  "./src/app/models/user.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/user.model.ts ***!
    \**************************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = /*#__PURE__*/function () {
      function User() {
        _classCallCheck(this, User);
      }

      _createClass(User, [{
        key: "deserialize",
        value: function deserialize(input) {
          return Object.assign(this, input);
        }
      }]);

      return User;
    }();
    /***/

  },

  /***/
  "./src/app/register-user/register-user.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/register-user/register-user.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterUserRegisterUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .progressbar {\r\n    counter-reset: step;\r\n} */\r\n\r\n.progressbar li {\r\n    list-style-type: none;\r\n    float: left;\r\n    width: 33.33%;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n@media (max-width: 767.98px) {\r\n    .progressbar li {\r\n        font-size: 0.85rem;\r\n    }\r\n}\r\n\r\n.progressbar li:nth-child(1)::before {\r\n    content: '\\f007';\r\n}\r\n\r\n.progressbar li:nth-child(2)::before {\r\n    content: '\\f2bb';\r\n}\r\n\r\n.progressbar li:nth-child(3)::before {\r\n    content: '\\f19c';\r\n}\r\n\r\n.progressbar li::before {\r\n    /* content: counter(step);\r\n    counter-increment: step; */\r\n    font-family: \"Font Awesome 5 Free\";\r\n    font-weight: 600;\r\n    width: 50px;\r\n    height: 50px;\r\n    line-height: 45px;\r\n    color: #666;\r\n    border: 2px solid #888;\r\n    display: block;\r\n    text-align: center;\r\n    margin: 0 auto 10px auto;\r\n    border-radius: 50%;\r\n    background-color: white;\r\n}\r\n\r\n.progressbar li::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 3px;\r\n    background-color: #888;\r\n    top: 25px;\r\n    left: -50%;\r\n    z-index: -1;\r\n}\r\n\r\n.progressbar li:first-child::after {\r\n    content: none;\r\n}\r\n\r\n.progressbar li:first-child {\r\n    margin-left: -5%;\r\n}\r\n\r\n.progressbar li.progress-active {\r\n    color: green;\r\n}\r\n\r\n.progressbar li.progress-active::before, .progressbar li.progress-done::before {\r\n    border-color: green;\r\n    background-color: lightgreen;\r\n    color: green;\r\n}\r\n\r\n.progressbar li.progress-active + li::after {\r\n    background-color: green;\r\n}\r\n\r\n.progressbar li.progress-done::before {\r\n    content: '\\f00c';\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.header {\r\n    /* background-color: rgba(0, 0, 0, 0.05);\r\n    padding: 5px 10px;\r\n    border: 0.5px solid rgba(0, 0, 0, 0.10); */\r\n    text-align: center;\r\n}\r\n\r\nh5 {\r\n    display: inline;\r\n    font-size: 1.5rem;\r\n    font-weight: 400;\r\n    color: rgba(0, 0, 0, 0.85);\r\n    text-align: center;\r\n    padding-bottom: 1rem;\r\n    border-bottom: 2px solid rgba(0, 0, 0, 0.85);\r\n}\r\n\r\n.card-shadow {\r\n    box-shadow: 1px 3px 10px rgba(180, 180, 180, 0.5), 2px 5px 15px rgba(180, 180, 180, 0.2)\r\n}\r\n\r\n.input-control-shadow {\r\n    box-shadow: 0px 0px 5px rgba(180, 180, 180, 0.5), 0px 0px 10px rgba(180, 180, 180, 0.2)\r\n}\r\n\r\nselect {\r\n    overflow: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItdXNlci9yZWdpc3Rlci11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJOzhCQUMwQjtJQUMxQixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTs7OENBRTBDO0lBQzFDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXItdXNlci9yZWdpc3Rlci11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAucHJvZ3Jlc3NiYXIge1xyXG4gICAgY291bnRlci1yZXNldDogc3RlcDtcclxufSAqL1xyXG5cclxuLnByb2dyZXNzYmFyIGxpIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAucHJvZ3Jlc3NiYXIgbGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLnByb2dyZXNzYmFyIGxpOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdcXGYwMDcnO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NiYXIgbGk6bnRoLWNoaWxkKDIpOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ1xcZjJiYic7XHJcbn1cclxuXHJcbi5wcm9ncmVzc2JhciBsaTpudGgtY2hpbGQoMyk6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnXFxmMTljJztcclxufVxyXG5cclxuLnByb2dyZXNzYmFyIGxpOjpiZWZvcmUge1xyXG4gICAgLyogY29udGVudDogY291bnRlcihzdGVwKTtcclxuICAgIGNvdW50ZXItaW5jcmVtZW50OiBzdGVwOyAqL1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4ODg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvIDEwcHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NiYXIgbGk6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XHJcbiAgICB0b3A6IDI1cHg7XHJcbiAgICBsZWZ0OiAtNTAlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5wcm9ncmVzc2JhciBsaTpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogbm9uZTtcclxufVxyXG4ucHJvZ3Jlc3NiYXIgbGk6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01JTtcclxufVxyXG5cclxuLnByb2dyZXNzYmFyIGxpLnByb2dyZXNzLWFjdGl2ZSB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5wcm9ncmVzc2JhciBsaS5wcm9ncmVzcy1hY3RpdmU6OmJlZm9yZSwgLnByb2dyZXNzYmFyIGxpLnByb2dyZXNzLWRvbmU6OmJlZm9yZSB7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnByb2dyZXNzYmFyIGxpLnByb2dyZXNzLWFjdGl2ZSArIGxpOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnByb2dyZXNzYmFyIGxpLnByb2dyZXNzLWRvbmU6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnXFxmMDBjJztcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMCk7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjg1KTtcclxufVxyXG5cclxuLmNhcmQtc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDFweCAzcHggMTBweCByZ2JhKDE4MCwgMTgwLCAxODAsIDAuNSksIDJweCA1cHggMTVweCByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMilcclxufVxyXG5cclxuLmlucHV0LWNvbnRyb2wtc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMTgwLCAxODAsIDE4MCwgMC41KSwgMHB4IDBweCAxMHB4IHJnYmEoMTgwLCAxODAsIDE4MCwgMC4yKVxyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/register-user/register-user.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/register-user/register-user.component.ts ***!
    \**********************************************************/

  /*! exports provided: RegisterUserComponent */

  /***/
  function srcAppRegisterUserRegisterUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function () {
      return RegisterUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _validators_username_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../validators/username.validator */
    "./src/app/validators/username.validator.ts");
    /* harmony import */


    var _validators_password_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../validators/password.validator */
    "./src/app/validators/password.validator.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/auth-user.service */
    "./src/app/services/auth-user.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterUserComponent = /*#__PURE__*/function () {
      function RegisterUserComponent(fb, _dataService, _authUserService, _router) {
        _classCallCheck(this, RegisterUserComponent);

        this.fb = fb;
        this._dataService = _dataService;
        this._authUserService = _authUserService;
        this._router = _router;
        this.genders = ['Male', 'Female', 'Other'];
        this.colleges = [];
        this.courses = [];
        this.passingYears = [];
        this.jobSinceYrs = [];
        this.successMsg = '';
        this.errorMsg = '';
        this.submitted1 = false;
        this.submitted2 = false;
        this.submitted3 = false;
        this.allFieldsValid1 = false;
        this.allFieldsValid2 = false;
        this.allFieldsValid3 = false;
      }

      _createClass(RegisterUserComponent, [{
        key: "isFieldValidOne",
        value: function isFieldValidOne(field) {
          return this.regisForm1.get(field).invalid && this.regisForm1.get(field).touched || this.regisForm1.get(field).untouched && this.submitted1;
        }
      }, {
        key: "isFieldValidTwo",
        value: function isFieldValidTwo(field) {
          return this.regisForm2.get(field).invalid && this.regisForm2.get(field).touched || this.regisForm2.get(field).untouched && this.submitted2;
        }
      }, {
        key: "isFieldValidThree",
        value: function isFieldValidThree(field) {
          return this.regisForm3.get(field).invalid && this.regisForm3.get(field).touched || this.regisForm3.get(field).untouched && this.submitted3;
        }
      }, {
        key: "getErrorMsgOne",
        value: function getErrorMsgOne(field, minlength) {
          var result = "";
          var errors = this.regisForm1.get(field).errors;
          var element = this.regisForm1.get(field);

          if (element.touched && errors.required) {
            result += "*" + field + " is required";
          } else if (element.touched && errors.email) {
            result = '*email must be in form of abc@abc.com';
          } else if (element.touched && errors.forbiddenName) {
            result = "*" + errors.forbiddenName.value + " " + field + " is not allowed";
          } else if (element.touched && errors.allowedName) {
            result = "*username first character should be character and must contain only alphanumeric characters afterwards";
          } else if (element.touched && errors.minlength) {
            result = "*" + field + " must be at least " + minlength + " characters long";
          } else if (element.hasError('isUsernameUnique')) {
            result = "username already used. try another username.";
          } else if (element.hasError('isEmailUnique')) {
            result = "email already used. try another email.";
          }

          return result;
        }
      }, {
        key: "resetOne",
        value: function resetOne() {
          if (this.submitted1) {
            this.submitted1 = false; // this.regisForm1.markAsPristine();
            // this.regisForm1.markAsUntouched();

            var tempForm = this.regisForm1.value; // this.regisForm1.reset();

            this.regisForm1.setValue({
              username: tempForm.username,
              email: tempForm.email,
              password: tempForm.password,
              confirmPassword: tempForm.confirmPassword
            });
          }
        }
      }, {
        key: "onSubmitOne",
        value: function onSubmitOne(form) {
          this.submitted1 = true;

          if (this.regisForm1.valid) {
            this.regisForm3.patchValue({
              username: this.regisForm1.value.username,
              email: this.regisForm1.value.email,
              password: this.regisForm1.value.password
            });
            this.allFieldsValid1 = true; // console.log(this.regisForm1.value);

            this.progress(this.firstProgress, this.secondProgress);
          }
        }
      }, {
        key: "getErrorMsgTwo",
        value: function getErrorMsgTwo(field) {
          var result = "";
          var errors = this.regisForm2.get(field).errors;
          var element = this.regisForm2.get(field);

          if (element.touched && errors.required) {
            result += "*" + field + " is required";
          } else if (element.touched && errors.allowedName) {
            result = "*the name should contain only alphabets";
          } else if (field === "gender" && element.untouched) {
            result = "*select your gender";
          }

          return result;
        }
      }, {
        key: "resetTwo",
        value: function resetTwo() {
          if (this.submitted2) {
            this.submitted2 = false;
            this.regisForm2.markAsPristine();
            this.regisForm2.markAsUntouched();
          }
        }
      }, {
        key: "onSubmitTwo",
        value: function onSubmitTwo(form) {
          this.submitted2 = true;

          if (this.regisForm2.valid) {
            this.regisForm3.patchValue({
              firstName: this.regisForm2.value.firstName,
              lastName: this.regisForm2.value.lastName,
              gender: this.regisForm2.value.gender
            });
            this.allFieldsValid2 = true; // console.log(this.regisForm2.value);

            this.progress(this.secondProgress, this.thirdProgress);
          }
        }
      }, {
        key: "getErrorMsgThree",
        value: function getErrorMsgThree(field) {
          var result = "";
          var errors = this.regisForm3.get(field).errors;
          var element = this.regisForm3.get(field);

          if (element.touched && errors.required) {
            result += "*" + field + " is required";
          } else if ((field === "course" || field === "college" || field === "passingYear") && element.untouched) {
            result = "*select your gender";
          }

          return result;
        }
      }, {
        key: "resetThree",
        value: function resetThree() {
          if (this.submitted3) {
            this.submitted3 = false;
            this.regisForm3.markAsPristine();
            this.regisForm3.markAsUntouched();
          }
        }
      }, {
        key: "onSubmitThree",
        value: function onSubmitThree(form) {
          var _this4 = this;

          this.submitted3 = true;

          if (this.regisForm3.valid) {
            this.allFieldsValid3 = true; // console.log(this.regisForm3.value);

            this.progress(this.thirdProgress, this.thirdProgress);

            this._authUserService.registerUser(this.regisForm3.value).subscribe(function (res) {
              _this4.successMsg = "Successfully Registered";
              var expiresAt = moment__WEBPACK_IMPORTED_MODULE_7__().add(res.expiresIn, 'second'); // localStorage.setItem('token', res.idToken);
              // localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
              // localStorage.setItem('username', res.username);

              _this4._router.navigate(['/login']);
            }, function (err) {
              _this4.errorMsg = err.error;
              console.log(_this4.errorMsg);

              _this4._router.navigate(['/register']);
            });
          }
        }
      }, {
        key: "validateUsername",
        value: function validateUsername(control) {
          var _this5 = this;

          var q = new Promise(function (resolve, reject) {
            setTimeout(function (res) {
              _this5._authUserService.validateUsername(control.value).subscribe(function (res) {
                // console.log(res);
                resolve(null);
              }, function (err) {
                // console.log(err);
                if (err.status === 200) resolve(null);else resolve({
                  'isUsernameUnique': true
                });
              });
            }, 1000);
          });
          return q;
        }
      }, {
        key: "validateEmail",
        value: function validateEmail(control) {
          var _this6 = this;

          var q = new Promise(function (resolve, reject) {
            setTimeout(function (res) {
              _this6._authUserService.validateEmail(control.value).subscribe(function () {
                resolve(null);
              }, function (err) {
                if (err.status === 200) resolve(null);else resolve({
                  'isEmailUnique': true
                });
              });
            }, 1000);
          });
          return q;
        }
      }, {
        key: "progress",
        value: function progress(btn1, btn2) {
          btn1.nativeElement.classList.add('progress-done');
          btn2.nativeElement.classList.add('progress-active');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.regisForm1 = this.fb.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), Object(_validators_username_validator__WEBPACK_IMPORTED_MODULE_3__["forbiddenNameValidator"])(/admin|password/), Object(_validators_username_validator__WEBPACK_IMPORTED_MODULE_3__["allowedNameValidator"])(/^[a-zA-Z]\w+$/)], this.validateUsername.bind(this)],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email], this.validateEmail.bind(this)],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }, {
            validators: _validators_password_validator__WEBPACK_IMPORTED_MODULE_4__["PasswordValidator"]
          });
          this.regisForm2 = this.fb.group({
            firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_validators_username_validator__WEBPACK_IMPORTED_MODULE_3__["allowedNameValidator"])(/^[a-zA-Z]+$/)]],
            lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_validators_username_validator__WEBPACK_IMPORTED_MODULE_3__["allowedNameValidator"])(/^[a-zA-Z]+$/)]],
            gender: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.regisForm3 = this.fb.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), Object(_validators_username_validator__WEBPACK_IMPORTED_MODULE_3__["forbiddenNameValidator"])(/admin|password/), Object(_validators_username_validator__WEBPACK_IMPORTED_MODULE_3__["allowedNameValidator"])(/^[a-zA-Z]\w+$/)]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_validators_username_validator__WEBPACK_IMPORTED_MODULE_3__["allowedNameValidator"])(/^[a-zA-Z]+$/)]],
            lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_validators_username_validator__WEBPACK_IMPORTED_MODULE_3__["allowedNameValidator"])(/^[a-zA-Z]+$/)]],
            gender: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            course: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            college: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            passingYear: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            job: [""],
            company: [""],
            since: [""],
            profileImg: [""]
          });
          this.colleges = this._dataService.getCollegeList();
          this.courses = this._dataService.getCourseList();
          this.passingYears = this._dataService.getPassingYears();
          this.jobSinceYrs = this._dataService.getJobSince();
        }
      }]);

      return RegisterUserComponent;
    }();

    RegisterUserComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
      }, {
        type: _services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__["AuthUserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('firstProgress', {
      "static": false
    })], RegisterUserComponent.prototype, "firstProgress", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('secondProgress', {
      "static": false
    })], RegisterUserComponent.prototype, "secondProgress", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thirdProgress', {
      "static": false
    })], RegisterUserComponent.prototype, "thirdProgress", void 0);
    RegisterUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register-user/register-user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register-user.component.css */
      "./src/app/register-user/register-user.component.css"))["default"]]
    })], RegisterUserComponent);
    /***/
  },

  /***/
  "./src/app/services/auth-user.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/auth-user.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthUserService */

  /***/
  function srcAppServicesAuthUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthUserService", function () {
      return AuthUserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var AuthUserService = /*#__PURE__*/function () {
      function AuthUserService(http, _router) {
        _classCallCheck(this, AuthUserService);

        this.http = http;
        this._router = _router;
        this._registerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].host + "/register";
        this._loginUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].host + "/login";
      }

      _createClass(AuthUserService, [{
        key: "registerUser",
        value: function registerUser(user) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers.append("Content-Type", "application/json");
          return this.http.post(this._registerUrl, user, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
        }
      }, {
        key: "loginUser",
        value: function loginUser(user) {
          console.log();
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers.append("Content-Type", "application/json");
          return this.http.post(this._loginUrl, user, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
        }
      }, {
        key: "validateUsername",
        value: function validateUsername(username) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].host + "/users/checkusername/?username=" + username, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
        }
      }, {
        key: "validateEmail",
        value: function validateEmail(email) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].host + "/users/checkemail/?email=" + email, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          // return !!localStorage.getItem('token');
          return !!this.getToken() && moment__WEBPACK_IMPORTED_MODULE_4__().isBefore(this.getExpiration()) && !!this.getUsername();
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          return localStorage.getItem('username');
        } // getUser() {
        //   return this.http.get<any>(this.header+"/users/" + this.getUsername())
        //   .pipe(catchError(this.errorHandler));
        // }
        // isUserValid() {
        //   this.getUser().subscribe(
        //     res => this.userValid = true,
        //     err => this.userValid = false
        //   )
        // }

      }, {
        key: "logoutUser",
        value: function logoutUser() {
          localStorage.removeItem('token');
          localStorage.removeItem('expires_at');
          localStorage.removeItem('username');

          this._router.navigate(['/articles']);
        }
      }, {
        key: "getExpiration",
        value: function getExpiration() {
          var expiration = localStorage.getItem('expires_at');
          var expiresAt = JSON.parse(expiration);
          return moment__WEBPACK_IMPORTED_MODULE_4__(expiresAt);
        }
      }, {
        key: "errorHandler",
        value: function errorHandler(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        }
      }]);

      return AuthUserService;
    }();

    AuthUserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthUserService);
    /***/
  },

  /***/
  "./src/app/services/blog-post.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/blog-post.service.ts ***!
    \***********************************************/

  /*! exports provided: BlogPostService */

  /***/
  function srcAppServicesBlogPostServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPostService", function () {
      return BlogPostService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var BlogPostService = /*#__PURE__*/function () {
      function BlogPostService(http) {
        _classCallCheck(this, BlogPostService);

        this.http = http;
      }

      _createClass(BlogPostService, [{
        key: "postArticle",
        value: function postArticle(article) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers.append("Content-Type", "application/json");
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].host + "/articless", article, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        }
      }, {
        key: "getArticles",
        value: function getArticles() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].host + "/articless").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        }
      }, {
        key: "getArticle",
        value: function getArticle(slug) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].host + "/articless/" + slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        }
      }, {
        key: "likeArticle",
        value: function likeArticle(slug) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].host + "/articless/" + slug + "/like", {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        }
      }, {
        key: "nonlikeArticle",
        value: function nonlikeArticle(slug) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].host + "/articless/" + slug + "/nonlike", {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        }
      }, {
        key: "dislikeArticle",
        value: function dislikeArticle(slug) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].host + "/articless/" + slug + "/dislike", {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        }
      }, {
        key: "nondislikeArticle",
        value: function nondislikeArticle(slug) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].host + "/articless/" + slug + "/nondislike", {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        }
      }, {
        key: "errorHandler",
        value: function errorHandler(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        }
      }]);

      return BlogPostService;
    }();

    BlogPostService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    BlogPostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BlogPostService);
    /***/
  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DataService = /*#__PURE__*/function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.colleges = ["GLA University, Mathura, UP", "VIT, Vellore, Tamil Nadu", "Chandigarh University, Ajitgarh, Punjab", "Lovely Professional University, Phagwara, Punjab", "SRM Institute of Science and Technology, Kattankulathur, Tamil Nadu", "Amity University, Noida, UP", "BITS, Pilani, Rajasthan", "Jaypee Institute of Information Technology, Noida, UP"];
        this.courses = ["BE/BTech", "BBA", "MBA", "MTech", "BA", "MA", "BSc", "MSc", "Other"];
        this.passingYears = [];
        this.jobSince = ["<2010"];
        this.categories = ["Data Science", "Web Development", "Art", "Science and Technology", "Job and Interview", "Gaming", "Business", "Economy", "Politics", "Culture", "Travel", "Entertainment", "Philosophy", "Self-Improvement", "Others"];
      }

      _createClass(DataService, [{
        key: "getCollegeList",
        value: function getCollegeList() {
          return this.colleges;
        }
      }, {
        key: "getCourseList",
        value: function getCourseList() {
          return this.courses;
        }
      }, {
        key: "getPassingYears",
        value: function getPassingYears() {
          for (var i = 1990; i < 2025; i++) {
            var s = i.toString();
            this.passingYears.unshift(s);
          }

          return this.passingYears;
        }
      }, {
        key: "getJobSince",
        value: function getJobSince() {
          for (var i = 2010; i < 2020; i++) {
            var s = i.toString();
            this.jobSince.unshift(s);
          }

          return this.jobSince;
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          return this.categories;
        }
      }]);

      return DataService;
    }();

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/app/services/token-interceptor.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/token-interceptor.service.ts ***!
    \*******************************************************/

  /*! exports provided: TokenInterceptorService */

  /***/
  function srcAppServicesTokenInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
      return TokenInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth-user.service */
    "./src/app/services/auth-user.service.ts");

    var TokenInterceptorService = /*#__PURE__*/function () {
      function TokenInterceptorService(injector) {
        _classCallCheck(this, TokenInterceptorService);

        this.injector = injector;
      }

      _createClass(TokenInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authService = this.injector.get(_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"]);
          var tokenizedReq = req.clone({
            setHeaders: {
              Authorization: "Bearer ".concat(authService.getToken(), " ").concat(authService.getUsername())
            }
          });
          return next.handle(tokenizedReq);
        }
      }]);

      return TokenInterceptorService;
    }();

    TokenInterceptorService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TokenInterceptorService);
    /***/
  },

  /***/
  "./src/app/show-article/show-article.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/show-article/show-article.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShowArticleShowArticleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Lobster&family=Permanent+Marker&display=swap');/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  -o-tab-size: 4;\n     tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}.ql-editor > * {\n  cursor: text;\n}.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}.ql-editor ul > li::before {\n  content: '\\2022';\n}.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}.ql-editor .ql-bg-black {\n  background-color: #000;\n}.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}.ql-editor .ql-color-white {\n  color: #fff;\n}.ql-editor .ql-color-red {\n  color: #e60000;\n}.ql-editor .ql-color-orange {\n  color: #f90;\n}.ql-editor .ql-color-yellow {\n  color: #ff0;\n}.ql-editor .ql-color-green {\n  color: #008a00;\n}.ql-editor .ql-color-blue {\n  color: #06c;\n}.ql-editor .ql-color-purple {\n  color: #93f;\n}.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}.ql-editor .ql-align-center {\n  text-align: center;\n}.ql-editor .ql-align-justify {\n  text-align: justify;\n}.ql-editor .ql-align-right {\n  text-align: right;\n}.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  -o-tab-size: 4;\n     tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}.ql-editor > * {\n  cursor: text;\n}.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}.ql-editor ul > li::before {\n  content: '\\2022';\n}.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}.ql-editor .ql-bg-black {\n  background-color: #000;\n}.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}.ql-editor .ql-color-white {\n  color: #fff;\n}.ql-editor .ql-color-red {\n  color: #e60000;\n}.ql-editor .ql-color-orange {\n  color: #f90;\n}.ql-editor .ql-color-yellow {\n  color: #ff0;\n}.ql-editor .ql-color-green {\n  color: #008a00;\n}.ql-editor .ql-color-blue {\n  color: #06c;\n}.ql-editor .ql-color-purple {\n  color: #93f;\n}.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}.ql-editor .ql-align-center {\n  text-align: center;\n}.ql-editor .ql-align-justify {\n  text-align: justify;\n}.ql-editor .ql-align-right {\n  text-align: right;\n}.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}.ql-bubble.ql-toolbar:after,\n.ql-bubble .ql-toolbar:after {\n  clear: both;\n  content: '';\n  display: table;\n}.ql-bubble.ql-toolbar button,\n.ql-bubble .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}.ql-bubble.ql-toolbar button svg,\n.ql-bubble .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}.ql-bubble.ql-toolbar button:active:hover,\n.ql-bubble .ql-toolbar button:active:hover {\n  outline: none;\n}.ql-bubble.ql-toolbar input.ql-image[type=file],\n.ql-bubble .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}.ql-bubble.ql-toolbar button:hover,\n.ql-bubble .ql-toolbar button:hover,\n.ql-bubble.ql-toolbar button:focus,\n.ql-bubble .ql-toolbar button:focus,\n.ql-bubble.ql-toolbar button.ql-active,\n.ql-bubble .ql-toolbar button.ql-active,\n.ql-bubble.ql-toolbar .ql-picker-label:hover,\n.ql-bubble .ql-toolbar .ql-picker-label:hover,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active,\n.ql-bubble.ql-toolbar .ql-picker-item:hover,\n.ql-bubble .ql-toolbar .ql-picker-item:hover,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected {\n  color: #fff;\n}.ql-bubble.ql-toolbar button:hover .ql-fill,\n.ql-bubble .ql-toolbar button:hover .ql-fill,\n.ql-bubble.ql-toolbar button:focus .ql-fill,\n.ql-bubble .ql-toolbar button:focus .ql-fill,\n.ql-bubble.ql-toolbar button.ql-active .ql-fill,\n.ql-bubble .ql-toolbar button.ql-active .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-bubble.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #fff;\n}.ql-bubble.ql-toolbar button:hover .ql-stroke,\n.ql-bubble .ql-toolbar button:hover .ql-stroke,\n.ql-bubble.ql-toolbar button:focus .ql-stroke,\n.ql-bubble .ql-toolbar button:focus .ql-stroke,\n.ql-bubble.ql-toolbar button.ql-active .ql-stroke,\n.ql-bubble .ql-toolbar button.ql-active .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-bubble.ql-toolbar button:hover .ql-stroke-miter,\n.ql-bubble .ql-toolbar button:hover .ql-stroke-miter,\n.ql-bubble.ql-toolbar button:focus .ql-stroke-miter,\n.ql-bubble .ql-toolbar button:focus .ql-stroke-miter,\n.ql-bubble.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-bubble .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #fff;\n}@media (pointer: coarse) {\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active),\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) {\n    color: #ccc;\n  }\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #ccc;\n  }\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #ccc;\n  }\n}.ql-bubble {\n  box-sizing: border-box;\n}.ql-bubble * {\n  box-sizing: border-box;\n}.ql-bubble .ql-hidden {\n  display: none;\n}.ql-bubble .ql-out-bottom,\n.ql-bubble .ql-out-top {\n  visibility: hidden;\n}.ql-bubble .ql-tooltip {\n  position: absolute;\n  transform: translateY(10px);\n}.ql-bubble .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}.ql-bubble .ql-tooltip.ql-flip {\n  transform: translateY(-10px);\n}.ql-bubble .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}.ql-bubble .ql-formats:after {\n  clear: both;\n  content: '';\n  display: table;\n}.ql-bubble .ql-stroke {\n  fill: none;\n  stroke: #ccc;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}.ql-bubble .ql-stroke-miter {\n  fill: none;\n  stroke: #ccc;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}.ql-bubble .ql-fill,\n.ql-bubble .ql-stroke.ql-fill {\n  fill: #ccc;\n}.ql-bubble .ql-empty {\n  fill: none;\n}.ql-bubble .ql-even {\n  fill-rule: evenodd;\n}.ql-bubble .ql-thin,\n.ql-bubble .ql-stroke.ql-thin {\n  stroke-width: 1;\n}.ql-bubble .ql-transparent {\n  opacity: 0.4;\n}.ql-bubble .ql-direction svg:last-child {\n  display: none;\n}.ql-bubble .ql-direction.ql-active svg:last-child {\n  display: inline;\n}.ql-bubble .ql-direction.ql-active svg:first-child {\n  display: none;\n}.ql-bubble .ql-editor h1 {\n  font-size: 2em;\n}.ql-bubble .ql-editor h2 {\n  font-size: 1.5em;\n}.ql-bubble .ql-editor h3 {\n  font-size: 1.17em;\n}.ql-bubble .ql-editor h4 {\n  font-size: 1em;\n}.ql-bubble .ql-editor h5 {\n  font-size: 0.83em;\n}.ql-bubble .ql-editor h6 {\n  font-size: 0.67em;\n}.ql-bubble .ql-editor a {\n  text-decoration: underline;\n}.ql-bubble .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}.ql-bubble .ql-editor code,\n.ql-bubble .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}.ql-bubble .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}.ql-bubble .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}.ql-bubble .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}.ql-bubble .ql-editor img {\n  max-width: 100%;\n}.ql-bubble .ql-picker {\n  color: #ccc;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}.ql-bubble .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}.ql-bubble .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}.ql-bubble .ql-picker-options {\n  background-color: #444;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}.ql-bubble .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}.ql-bubble .ql-picker.ql-expanded .ql-picker-label {\n  color: #777;\n  z-index: 2;\n}.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #777;\n}.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #777;\n}.ql-bubble .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}.ql-bubble .ql-color-picker,\n.ql-bubble .ql-icon-picker {\n  width: 28px;\n}.ql-bubble .ql-color-picker .ql-picker-label,\n.ql-bubble .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}.ql-bubble .ql-color-picker .ql-picker-label svg,\n.ql-bubble .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}.ql-bubble .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}.ql-bubble .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}.ql-bubble .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}.ql-bubble .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}.ql-bubble .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}.ql-bubble .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n  content: attr(data-label);\n}.ql-bubble .ql-picker.ql-header {\n  width: 98px;\n}.ql-bubble .ql-picker.ql-header .ql-picker-label::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item::before {\n  content: 'Normal';\n}.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: 'Heading 1';\n}.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: 'Heading 2';\n}.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: 'Heading 3';\n}.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: 'Heading 4';\n}.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: 'Heading 5';\n}.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: 'Heading 6';\n}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}.ql-bubble .ql-picker.ql-font {\n  width: 108px;\n}.ql-bubble .ql-picker.ql-font .ql-picker-label::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item::before {\n  content: 'Sans Serif';\n}.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: 'Serif';\n}.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: 'Monospace';\n}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}.ql-bubble .ql-picker.ql-size {\n  width: 98px;\n}.ql-bubble .ql-picker.ql-size .ql-picker-label::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item::before {\n  content: 'Normal';\n}.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: 'Small';\n}.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: 'Large';\n}.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: 'Huge';\n}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}.ql-bubble .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}.ql-bubble .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}.ql-bubble .ql-toolbar .ql-formats {\n  margin: 8px 12px 8px 0px;\n}.ql-bubble .ql-toolbar .ql-formats:first-child {\n  margin-left: 12px;\n}.ql-bubble .ql-color-picker svg {\n  margin: 1px;\n}.ql-bubble .ql-color-picker .ql-picker-item.ql-selected,\n.ql-bubble .ql-color-picker .ql-picker-item:hover {\n  border-color: #fff;\n}.ql-bubble .ql-tooltip {\n  background-color: #444;\n  border-radius: 25px;\n  color: #fff;\n}.ql-bubble .ql-tooltip-arrow {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  content: \" \";\n  display: block;\n  left: 50%;\n  margin-left: -6px;\n  position: absolute;\n}.ql-bubble .ql-tooltip:not(.ql-flip) .ql-tooltip-arrow {\n  border-bottom: 6px solid #444;\n  top: -6px;\n}.ql-bubble .ql-tooltip.ql-flip .ql-tooltip-arrow {\n  border-top: 6px solid #444;\n  bottom: -6px;\n}.ql-bubble .ql-tooltip.ql-editing .ql-tooltip-editor {\n  display: block;\n}.ql-bubble .ql-tooltip.ql-editing .ql-formats {\n  visibility: hidden;\n}.ql-bubble .ql-tooltip-editor {\n  display: none;\n}.ql-bubble .ql-tooltip-editor input[type=text] {\n  background: transparent;\n  border: none;\n  color: #fff;\n  font-size: 13px;\n  height: 100%;\n  outline: none;\n  padding: 10px 20px;\n  position: absolute;\n  width: 100%;\n}.ql-bubble .ql-tooltip-editor a {\n  top: 10px;\n  position: absolute;\n  right: 20px;\n}.ql-bubble .ql-tooltip-editor a:before {\n  color: #ccc;\n  content: \"\\D7\";\n  font-size: 16px;\n  font-weight: bold;\n}.ql-container.ql-bubble:not(.ql-disabled) a {\n  position: relative;\n  white-space: nowrap;\n}.ql-container.ql-bubble:not(.ql-disabled) a::before {\n  background-color: #444;\n  border-radius: 15px;\n  top: -5px;\n  font-size: 12px;\n  color: #fff;\n  content: attr(href);\n  font-weight: normal;\n  overflow: hidden;\n  padding: 5px 15px;\n  text-decoration: none;\n  z-index: 1;\n}.ql-container.ql-bubble:not(.ql-disabled) a::after {\n  border-top: 6px solid #444;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  top: 0;\n  content: \" \";\n  height: 0;\n  width: 0;\n}.ql-container.ql-bubble:not(.ql-disabled) a::before,\n.ql-container.ql-bubble:not(.ql-disabled) a::after {\n  left: 0;\n  margin-left: 50%;\n  position: absolute;\n  transform: translate(-50%, -100%);\n  transition: visibility 0s ease 200ms;\n  visibility: hidden;\n}.ql-container.ql-bubble:not(.ql-disabled) a:hover::before,\n.ql-container.ql-bubble:not(.ql-disabled) a:hover::after {\n  visibility: visible;\n}/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  -o-tab-size: 4;\n     tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}.ql-editor > * {\n  cursor: text;\n}.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}.ql-editor ul > li::before {\n  content: '\\2022';\n}.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}.ql-editor .ql-bg-black {\n  background-color: #000;\n}.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}.ql-editor .ql-color-white {\n  color: #fff;\n}.ql-editor .ql-color-red {\n  color: #e60000;\n}.ql-editor .ql-color-orange {\n  color: #f90;\n}.ql-editor .ql-color-yellow {\n  color: #ff0;\n}.ql-editor .ql-color-green {\n  color: #008a00;\n}.ql-editor .ql-color-blue {\n  color: #06c;\n}.ql-editor .ql-color-purple {\n  color: #93f;\n}.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}.ql-editor .ql-align-center {\n  text-align: center;\n}.ql-editor .ql-align-justify {\n  text-align: justify;\n}.ql-editor .ql-align-right {\n  text-align: right;\n}.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\n  clear: both;\n  content: '';\n  display: table;\n}.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\n  outline: none;\n}.ql-snow.ql-toolbar input.ql-image[type=file],\n.ql-snow .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n  color: #06c;\n}.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #06c;\n}.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #06c;\n}@media (pointer: coarse) {\n  .ql-snow.ql-toolbar button:hover:not(.ql-active),\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) {\n    color: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #444;\n  }\n}.ql-snow {\n  box-sizing: border-box;\n}.ql-snow * {\n  box-sizing: border-box;\n}.ql-snow .ql-hidden {\n  display: none;\n}.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\n  visibility: hidden;\n}.ql-snow .ql-tooltip {\n  position: absolute;\n  transform: translateY(10px);\n}.ql-snow .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}.ql-snow .ql-tooltip.ql-flip {\n  transform: translateY(-10px);\n}.ql-snow .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}.ql-snow .ql-formats:after {\n  clear: both;\n  content: '';\n  display: table;\n}.ql-snow .ql-stroke {\n  fill: none;\n  stroke: #444;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}.ql-snow .ql-stroke-miter {\n  fill: none;\n  stroke: #444;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n  fill: #444;\n}.ql-snow .ql-empty {\n  fill: none;\n}.ql-snow .ql-even {\n  fill-rule: evenodd;\n}.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\n  stroke-width: 1;\n}.ql-snow .ql-transparent {\n  opacity: 0.4;\n}.ql-snow .ql-direction svg:last-child {\n  display: none;\n}.ql-snow .ql-direction.ql-active svg:last-child {\n  display: inline;\n}.ql-snow .ql-direction.ql-active svg:first-child {\n  display: none;\n}.ql-snow .ql-editor h1 {\n  font-size: 2em;\n}.ql-snow .ql-editor h2 {\n  font-size: 1.5em;\n}.ql-snow .ql-editor h3 {\n  font-size: 1.17em;\n}.ql-snow .ql-editor h4 {\n  font-size: 1em;\n}.ql-snow .ql-editor h5 {\n  font-size: 0.83em;\n}.ql-snow .ql-editor h6 {\n  font-size: 0.67em;\n}.ql-snow .ql-editor a {\n  text-decoration: underline;\n}.ql-snow .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}.ql-snow .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}.ql-snow .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}.ql-snow .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}.ql-snow .ql-editor img {\n  max-width: 100%;\n}.ql-snow .ql-picker {\n  color: #444;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}.ql-snow .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}.ql-snow .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}.ql-snow .ql-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}.ql-snow .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #ccc;\n  z-index: 2;\n}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #ccc;\n}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #ccc;\n}.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n  width: 28px;\n}.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}.ql-snow .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}.ql-snow .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}.ql-snow .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}.ql-snow .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n  content: attr(data-label);\n}.ql-snow .ql-picker.ql-header {\n  width: 98px;\n}.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n  content: 'Normal';\n}.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: 'Heading 1';\n}.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: 'Heading 2';\n}.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: 'Heading 3';\n}.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: 'Heading 4';\n}.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: 'Heading 5';\n}.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: 'Heading 6';\n}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}.ql-snow .ql-picker.ql-font {\n  width: 108px;\n}.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n  content: 'Sans Serif';\n}.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: 'Serif';\n}.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: 'Monospace';\n}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}.ql-snow .ql-picker.ql-size {\n  width: 98px;\n}.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n  content: 'Normal';\n}.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: 'Small';\n}.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: 'Large';\n}.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: 'Huge';\n}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}.ql-toolbar.ql-snow {\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  padding: 8px;\n}.ql-toolbar.ql-snow .ql-formats {\n  margin-right: 15px;\n}.ql-toolbar.ql-snow .ql-picker-label {\n  border: 1px solid transparent;\n}.ql-toolbar.ql-snow .ql-picker-options {\n  border: 1px solid transparent;\n  box-shadow: rgba(0,0,0,0.2) 0 2px 8px;\n}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  border-color: #ccc;\n}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  border-color: #ccc;\n}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n  border-color: #000;\n}.ql-toolbar.ql-snow + .ql-container.ql-snow {\n  border-top: 0px;\n}.ql-snow .ql-tooltip {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}.ql-snow .ql-tooltip::before {\n  content: \"Visit URL:\";\n  line-height: 26px;\n  margin-right: 8px;\n}.ql-snow .ql-tooltip input[type=text] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0px;\n  padding: 3px 5px;\n  width: 170px;\n}.ql-snow .ql-tooltip a.ql-preview {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}.ql-snow .ql-tooltip a.ql-action::after {\n  border-right: 1px solid #ccc;\n  content: 'Edit';\n  margin-left: 16px;\n  padding-right: 8px;\n}.ql-snow .ql-tooltip a.ql-remove::before {\n  content: 'Remove';\n  margin-left: 8px;\n}.ql-snow .ql-tooltip a {\n  line-height: 26px;\n}.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n  display: none;\n}.ql-snow .ql-tooltip.ql-editing input[type=text] {\n  display: inline-block;\n}.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n  border-right: 0px;\n  content: 'Save';\n  padding-right: 0px;\n}.ql-snow .ql-tooltip[data-mode=link]::before {\n  content: \"Enter link:\";\n}.ql-snow .ql-tooltip[data-mode=formula]::before {\n  content: \"Enter formula:\";\n}.ql-snow .ql-tooltip[data-mode=video]::before {\n  content: \"Enter video:\";\n}.ql-snow a {\n  color: #06c;\n}.ql-container.ql-snow {\n  border: 1px solid #ccc;\n}* {\r\n  font-family: Lora, 'Times New Roman', serif;\r\n  letter-spacing: 0.8px;\r\n  color: #333;\r\n}header.masthead {\r\n    margin-bottom: 50px;\r\n    background: no-repeat 50%;\r\n    background-color: #6c757d;\r\n    background-attachment: scroll;\r\n    position: relative;\r\n    background-size: cover;\r\n    background-color: rgba(0, 0, 0, 0.15);\r\n  }header.masthead .page-heading,\r\n  header.masthead .post-heading,\r\n  header.masthead .site-heading {\r\n    padding: 200px 0 150px;\r\n    color: #fff;\r\n  }@media only screen and (min-width: 768px) {\r\n    header.masthead .page-heading,\r\n    header.masthead .post-heading,\r\n    header.masthead .site-heading {\r\n      padding: 200px 0;\r\n    }\r\n  }header.masthead .page-heading,\r\n  header.masthead .site-heading {\r\n    text-align: center;\r\n  }header.masthead .page-heading h1,\r\n  header.masthead .site-heading h1 {\r\n    font-size: 50px;\r\n    margin-top: 0;\r\n  }header.masthead .page-heading .subheading,\r\n  header.masthead .site-heading .subheading {\r\n    font-size: 24px;\r\n    font-weight: 300;\r\n    line-height: 1.1;\r\n    display: block;\r\n    margin: 10px 0 0;;\r\n    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n  }@media only screen and (min-width: 768px) {\r\n    header.masthead .page-heading h1,\r\n    header.masthead .site-heading h1 {\r\n      font-size: 80px;\r\n    }\r\n  }header.masthead .post-heading h1 {\r\n    font-size: 35px;\r\n  }header.masthead .post-heading .meta,\r\n  header.masthead .post-heading .subheading {\r\n    line-height: 1.1;\r\n    display: block;\r\n  }header.masthead .post-heading .subheading {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n    margin: 10px 0 30px;\r\n    color: #6c757d;\r\n    font-family: monospace;\r\n    letter-spacing: 0.5px;\r\n    \r\n  }header.masthead .post-heading .meta {\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    font-style: italic;\r\n    font-family: Lora, Times New Roman, serif;\r\n  }header.masthead .post-heading .meta a {\r\n    color: #6c757d;\r\n  }@media only screen and (min-width: 768px) {\r\n    header.masthead .post-heading h1 {\r\n      font-size: 55px;\r\n    }\r\n    header.masthead .post-heading .subheading {\r\n      font-size: 30px;\r\n    }\r\n  }p {\r\n    line-height: 1.5;\r\n    margin: 30px 0;\r\n  }p a {\r\n    text-decoration: underline;\r\n  }h1,\r\n  h2,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    font-weight: 800;\r\n    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n  }a {\r\n    color: #212529;\r\n    transition: all 0.2s;\r\n  }a:focus,\r\n  a:hover {\r\n    color: #007bff;\r\n  }blockquote {\r\n    font-style: italic;\r\n    color: #6c757d;\r\n  }.section-heading {\r\n    font-size: 36px;\r\n    font-weight: 700;\r\n    margin-top: 60px;\r\n  }.ql-snow .ql-editor h1 {\r\n    font-size: 5rem;\r\n    font-weight: 600;\r\n}.quill-container {\r\n  background-color: white;\r\n  padding: 2rem 3rem 3rem 3rem;\r\n  box-shadow: 3px 6px 5px rgba(0, 0, 0, 0.1),\r\n  10px 14px 7px rgba(0, 0, 0, 0.05);\r\n}@media (max-width: 767.98px) {\r\n  .quill-container {\r\n    padding: 1rem 0.4rem 3rem 0.4rem;\r\n  }\r\n}/* .button2::before {\r\n  content: '\\f004';\r\n  font-family: FontAwesome;\r\n  display: inline;\r\n} */.cstmbtn1 {\r\n  letter-spacing: 2px;\r\n  font-weight: 600;\r\n  outline: none;\r\n  font-family: 'Permanent Marker','Lobster', cursive;\r\n}.cstmbtn2 {\r\n  letter-spacing: 0.8px;\r\n  font-weight: 800;\r\n  outline: none;\r\n  /* text-transform: lowercase; */\r\n  font-family: 'Permanent Marker', 'Lobster', cursive;\r\n}.views {\r\n  font-size: 0.9rem;\r\n  font-weight: 900;\r\n}.bottom-sheet {\r\n  position: fixed;\r\n  bottom: -100%;\r\n  left: 27.5vw;\r\n  right: 27.5vw;\r\n  width: 45vw;\r\n  background-color: white;\r\n  border-radius: 10px 10px 0 0;\r\n  box-shadow: 0px 0px 15px 5px rgba(200, 200, 200, 0.15);\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  transition: all 0.9s ease-out;\r\n}@media (max-width: 575.98px) {\r\n  .bottom-sheet {\r\n    width: 90vw;\r\n    left: 3vw;\r\n    right: 5vw;\r\n  }\r\n}@media (min-width: 576px) and (max-width: 767.98px) {\r\n  .bottom-sheet {\r\n    width: 70vw;\r\n    left: 14vw;\r\n    right: 16vw;\r\n  }\r\n}@media (min-width: 768px) and (max-width: 991.98px) {\r\n  .bottom-sheet {\r\n    width: 60vw;\r\n    left: 20vw;\r\n    right: 20vw;\r\n  }\r\n}@media (min-width: 992px) and (max-width: 1199.98px) {\r\n  .bottom-sheet {\r\n    width: 54vw;\r\n    left: 23vw;\r\n    right: 23vw;\r\n  }\r\n}.bottom-sheet .row:nth-child(1) .col-12 {\r\n  background-color: #007bff;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px 42px 10px 42px;\r\n}.bottom-sheet .row:nth-child(2) {\r\n  padding: 16px 32px 16px 32px;\r\n  max-height: 30vh;\r\n}.bottom-sheet .row:nth-child(2) .col-12 {\r\n  background-color: rgba(200, 200, 200, .15);\r\n}.bottom-sheet .row:nth-child(2) .col-12:nth-child(1n):not(.nohover):hover {\r\n  background-color: rgb(228, 162, 88);\r\n}.bottom-sheet .row:nth-child(2) .col-12:nth-child(2n):hover {\r\n  background-color: #007bff;\r\n}.bottom-sheet .row:nth-child(2) .col-12:hover .media .media-body strong {\r\n  color: white;\r\n}.fa.fa-whatsapp {\r\n  color: green;\r\n  font-weight: 600;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy1hcnRpY2xlL3Nob3ctYXJ0aWNsZS5jb21wb25lbnQuY3NzIiwibm9kZV9tb2R1bGVzL3F1aWxsL2Rpc3QvcXVpbGwuY29yZS5jc3MiLCJub2RlX21vZHVsZXMvcXVpbGwvZGlzdC9xdWlsbC5idWJibGUuY3NzIiwibm9kZV9tb2R1bGVzL3F1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLHdIQUF3SCxDQ0h4SDs7Ozs7RUFLRSxDQUNGO0VBQ0Usc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEIsQ0FDQTtFQUNFLGtCQUFrQjtBQUNwQixDQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCLENBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWLENBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaLENBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFXO0tBQVgsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2QixDQUNBO0VBQ0UsWUFBWTtBQUNkLENBQ0E7Ozs7Ozs7Ozs7O0VBV0UsU0FBUztFQUNULFVBQVU7RUFDViw2RUFBNkU7QUFDL0UsQ0FDQTs7RUFFRSxtQkFBbUI7QUFDckIsQ0FDQTs7RUFFRSxxQkFBcUI7QUFDdkIsQ0FDQTtFQUNFLGdCQUFnQjtBQUNsQixDQUNBOztFQUVFLG9CQUFvQjtBQUN0QixDQUNBOztFQUVFLG1CQUFtQjtBQUNyQixDQUNBOztFQUVFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCLENBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIsQ0FDQTtFQUNFLGdCQUFn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QkFBK0I7RUFDL0IsbURBQW1EO0FBQ3JELENBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCLENBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsc0RBQXNEO0VBQ3RELGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9CLENBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtFQUNaO0FBQ0YsQ0FFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDRixDQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNGLENBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztFQUNiO0FBQ0YsQ0FFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUIsQ0FFQTtFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEIsQ0FFQTtFQUNFLDBDQUEwQztBQUM1QyxDQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDLENBRUE7RUFDRSx5QkFBeUI7QUFDM0IsQ0FFQTtFQUNFLFlBQVk7QUFDZCxDQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaG93LWFydGljbGUvc2hvdy1hcnRpY2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+cXVpbGwvZGlzdC9xdWlsbC5jb3JlLmNzcyc7XHJcbkBpbXBvcnQgJ35xdWlsbC9kaXN0L3F1aWxsLmJ1YmJsZS5jc3MnO1xyXG5AaW1wb3J0ICd+cXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcyc7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluZGllK0Zsb3dlciZmYW1pbHk9TG9ic3RlciZmYW1pbHk9UGVybWFuZW50K01hcmtlciZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiBMb3JhLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG5oZWFkZXIubWFzdGhlYWQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB9XHJcbiAgaGVhZGVyLm1hc3RoZWFkIC5wYWdlLWhlYWRpbmcsXHJcbiAgaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcsXHJcbiAgaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZzogMjAwcHggMCAxNTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBoZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyxcclxuICAgIGhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nLFxyXG4gICAgaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcge1xyXG4gICAgICBwYWRkaW5nOiAyMDBweCAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBoZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyxcclxuICBoZWFkZXIubWFzdGhlYWQgLnNpdGUtaGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGhlYWRlci5tYXN0aGVhZCAucGFnZS1oZWFkaW5nIGgxLFxyXG4gIGhlYWRlci5tYXN0aGVhZCAuc2l0ZS1oZWFkaW5nIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG4gIGhlYWRlci5tYXN0aGVhZCAucGFnZS1oZWFkaW5nIC5zdWJoZWFkaW5nLFxyXG4gIGhlYWRlci5tYXN0aGVhZCAuc2l0ZS1oZWFkaW5nIC5zdWJoZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwOztcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBoZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyBoMSxcclxuICAgIGhlYWRlci5tYXN0aGVhZCAuc2l0ZS1oZWFkaW5nIGgxIHtcclxuICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBoZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyBoMSB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG4gIGhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5tZXRhLFxyXG4gIGhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5zdWJoZWFkaW5nIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgLnN1YmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbjogMTBweCAwIDMwcHg7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICBcclxuICB9XHJcbiAgaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgLm1ldGEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtZmFtaWx5OiBMb3JhLCBUaW1lcyBOZXcgUm9tYW4sIHNlcmlmO1xyXG4gIH1cclxuICBoZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyAubWV0YSBhIHtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBoZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTVweDtcclxuICAgIH1cclxuICAgIGhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5zdWJoZWFkaW5nIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgfVxyXG4gIHAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQsXHJcbiAgaDUsXHJcbiAgaDYge1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBhIHtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgfVxyXG4gIGE6Zm9jdXMsXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICB9XHJcbiAgYmxvY2txdW90ZSB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICB9XHJcbiAgLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICB9XHJcblxyXG4gIC5xbC1zbm93IC5xbC1lZGl0b3IgaDEge1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnF1aWxsLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMnJlbSAzcmVtIDNyZW0gM3JlbTtcclxuICBib3gtc2hhZG93OiAzcHggNnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSksXHJcbiAgMTBweCAxNHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAucXVpbGwtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMC40cmVtIDNyZW0gMC40cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLyogLmJ1dHRvbjI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ1xcZjAwNCc7XHJcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufSAqL1xyXG5cclxuLmNzdG1idG4xIHtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCdMb2JzdGVyJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmNzdG1idG4yIHtcclxuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIC8qIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7ICovXHJcbiAgZm9udC1mYW1pbHk6ICdQZXJtYW5lbnQgTWFya2VyJywgJ0xvYnN0ZXInLCBjdXJzaXZlO1xyXG59XHJcblxyXG4udmlld3Mge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5ib3R0b20tc2hlZXQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IC0xMDAlO1xyXG4gIGxlZnQ6IDI3LjV2dztcclxuICByaWdodDogMjcuNXZ3O1xyXG4gIHdpZHRoOiA0NXZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDVweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMTUpO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuOXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gIC5ib3R0b20tc2hlZXQge1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICBsZWZ0OiAzdnc7XHJcbiAgICByaWdodDogNXZ3O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAuYm90dG9tLXNoZWV0IHtcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgbGVmdDogMTR2dztcclxuICAgIHJpZ2h0OiAxNnZ3O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuICAuYm90dG9tLXNoZWV0IHtcclxuICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgbGVmdDogMjB2dztcclxuICAgIHJpZ2h0OiAyMHZ3O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XHJcbiAgLmJvdHRvbS1zaGVldCB7XHJcbiAgICB3aWR0aDogNTR2dztcclxuICAgIGxlZnQ6IDIzdnc7XHJcbiAgICByaWdodDogMjN2dztcclxuICB9XHJcbn1cclxuXHJcbi5ib3R0b20tc2hlZXQgLnJvdzpudGgtY2hpbGQoMSkgLmNvbC0xMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggNDJweCAxMHB4IDQycHg7XHJcbn1cclxuXHJcbi5ib3R0b20tc2hlZXQgLnJvdzpudGgtY2hpbGQoMikge1xyXG4gIHBhZGRpbmc6IDE2cHggMzJweCAxNnB4IDMycHg7XHJcbiAgbWF4LWhlaWdodDogMzB2aDtcclxufVxyXG5cclxuLmJvdHRvbS1zaGVldCAucm93Om50aC1jaGlsZCgyKSAuY29sLTEyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIC4xNSk7XHJcbn1cclxuXHJcbi5ib3R0b20tc2hlZXQgLnJvdzpudGgtY2hpbGQoMikgLmNvbC0xMjpudGgtY2hpbGQoMW4pOm5vdCgubm9ob3Zlcik6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDE2MiwgODgpO1xyXG59XHJcblxyXG4uYm90dG9tLXNoZWV0IC5yb3c6bnRoLWNoaWxkKDIpIC5jb2wtMTI6bnRoLWNoaWxkKDJuKTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuLmJvdHRvbS1zaGVldCAucm93Om50aC1jaGlsZCgyKSAuY29sLTEyOmhvdmVyIC5tZWRpYSAubWVkaWEtYm9keSBzdHJvbmcge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZhLmZhLXdoYXRzYXBwIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG4iLCIvKiFcbiAqIFF1aWxsIEVkaXRvciB2MS4zLjdcbiAqIGh0dHBzOi8vcXVpbGxqcy5jb20vXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEphc29uIENoZW5cbiAqIENvcHlyaWdodCAoYykgMjAxMywgc2FsZXNmb3JjZS5jb21cbiAqL1xuLnFsLWNvbnRhaW5lciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5xbC1jb250YWluZXIucWwtZGlzYWJsZWQgLnFsLXRvb2x0aXAge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ucWwtY29udGFpbmVyLnFsLWRpc2FibGVkIC5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkXSA+IGxpOjpiZWZvcmUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5xbC1jbGlwYm9hcmQge1xuICBsZWZ0OiAtMTAwMDAwcHg7XG4gIGhlaWdodDogMXB4O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG59XG4ucWwtY2xpcGJvYXJkIHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ucWwtZWRpdG9yIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI7XG4gIGhlaWdodDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICB0YWItc2l6ZTogNDtcbiAgLW1vei10YWItc2l6ZTogNDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4ucWwtZWRpdG9yID4gKiB7XG4gIGN1cnNvcjogdGV4dDtcbn1cbi5xbC1lZGl0b3IgcCxcbi5xbC1lZGl0b3Igb2wsXG4ucWwtZWRpdG9yIHVsLFxuLnFsLWVkaXRvciBwcmUsXG4ucWwtZWRpdG9yIGJsb2NrcXVvdGUsXG4ucWwtZWRpdG9yIGgxLFxuLnFsLWVkaXRvciBoMixcbi5xbC1lZGl0b3IgaDMsXG4ucWwtZWRpdG9yIGg0LFxuLnFsLWVkaXRvciBoNSxcbi5xbC1lZGl0b3IgaDYge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtMSBsaXN0LTIgbGlzdC0zIGxpc3QtNCBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCxcbi5xbC1lZGl0b3IgdWwge1xuICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xufVxuLnFsLWVkaXRvciBvbCA+IGxpLFxuLnFsLWVkaXRvciB1bCA+IGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLnFsLWVkaXRvciB1bCA+IGxpOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFwyMDIyJztcbn1cbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPXRydWVdLFxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9ZmFsc2VdIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD10cnVlXSA+IGxpICosXG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD1mYWxzZV0gPiBsaSAqIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPXRydWVdID4gbGk6OmJlZm9yZSxcbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPWZhbHNlXSA+IGxpOjpiZWZvcmUge1xuICBjb2xvcjogIzc3NztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9dHJ1ZV0gPiBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcMjYxMSc7XG59XG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD1mYWxzZV0gPiBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcMjYxMCc7XG59XG4ucWwtZWRpdG9yIGxpOjpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxLjJlbTtcbn1cbi5xbC1lZGl0b3IgbGk6bm90KC5xbC1kaXJlY3Rpb24tcnRsKTo6YmVmb3JlIHtcbiAgbWFyZ2luLWxlZnQ6IC0xLjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucWwtZWRpdG9yIGxpLnFsLWRpcmVjdGlvbi1ydGw6OmJlZm9yZSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjNlbTtcbiAgbWFyZ2luLXJpZ2h0OiAtMS41ZW07XG59XG4ucWwtZWRpdG9yIG9sIGxpOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCksXG4ucWwtZWRpdG9yIHVsIGxpOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1kaXJlY3Rpb24tcnRsLFxuLnFsLWVkaXRvciB1bCBsaS5xbC1kaXJlY3Rpb24tcnRsIHtcbiAgcGFkZGluZy1yaWdodDogMS41ZW07XG59XG4ucWwtZWRpdG9yIG9sIGxpIHtcbiAgY291bnRlci1yZXNldDogbGlzdC0xIGxpc3QtMiBsaXN0LTMgbGlzdC00IGxpc3QtNSBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTA7XG59XG4ucWwtZWRpdG9yIG9sIGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC0wLCBkZWNpbWFsKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMSB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTE7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC0xLCBsb3dlci1hbHBoYSkgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTEge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTIgbGlzdC0zIGxpc3QtNCBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMiB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTI7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC0yLCBsb3dlci1yb21hbikgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTIge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTMgbGlzdC00IGxpc3QtNSBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0zIHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtMztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTM6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTMsIGRlY2ltYWwpICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0zIHtcbiAgY291bnRlci1yZXNldDogbGlzdC00IGxpc3QtNSBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC00IHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtNDtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTQ6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTQsIGxvd2VyLWFscGhhKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNCB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtNSBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC01IHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtNTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTU6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTUsIGxvd2VyLXJvbWFuKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNSB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtNiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTYge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC02O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNjpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtNiwgZGVjaW1hbCkgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTYge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTcge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC03O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNzpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtNywgbG93ZXItYWxwaGEpICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC03IHtcbiAgY291bnRlci1yZXNldDogbGlzdC04IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTgge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC04O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtODpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtOCwgbG93ZXItcm9tYW4pICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC04IHtcbiAgY291bnRlci1yZXNldDogbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtOSB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC05OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC05LCBkZWNpbWFsKSAnLiAnO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTE6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogM2VtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiA0LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC0xLnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAzZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC0xLnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiA0LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC0yOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDZlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTI6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogNy41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMi5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogNmVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMi5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogNy41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMzpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiA5ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC0zOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDEwLjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC0zLnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiA5ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC0zLnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMC41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNDpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxMmVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNDpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxMy41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNC5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTJlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTQucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEzLjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC01Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDE1ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC01Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDE2LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC01LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNWVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTYuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTY6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMThlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTY6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMTkuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTYucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE4ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC02LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxOS41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNzpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAyMWVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNzpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAyMi41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNy5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMjFlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTcucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIyLjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC04Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDI0ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC04Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDI1LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC04LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAyNGVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtOC5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMjUuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTk6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMjdlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTk6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMjguNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTkucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDI3ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC05LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAyOC41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC12aWRlbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ucWwtZWRpdG9yIC5xbC12aWRlby5xbC1hbGlnbi1jZW50ZXIge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5xbC1lZGl0b3IgLnFsLXZpZGVvLnFsLWFsaWduLXJpZ2h0IHtcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xufVxuLnFsLWVkaXRvciAucWwtYmctYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuLnFsLWVkaXRvciAucWwtYmctcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2MDAwMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWJnLW9yYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOTA7XG59XG4ucWwtZWRpdG9yIC5xbC1iZy15ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwO1xufVxuLnFsLWVkaXRvciAucWwtYmctZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4YTAwO1xufVxuLnFsLWVkaXRvciAucWwtYmctYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNmM7XG59XG4ucWwtZWRpdG9yIC5xbC1iZy1wdXJwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNmO1xufVxuLnFsLWVkaXRvciAucWwtY29sb3Itd2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5xbC1lZGl0b3IgLnFsLWNvbG9yLXJlZCB7XG4gIGNvbG9yOiAjZTYwMDAwO1xufVxuLnFsLWVkaXRvciAucWwtY29sb3Itb3JhbmdlIHtcbiAgY29sb3I6ICNmOTA7XG59XG4ucWwtZWRpdG9yIC5xbC1jb2xvci15ZWxsb3cge1xuICBjb2xvcjogI2ZmMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWNvbG9yLWdyZWVuIHtcbiAgY29sb3I6ICMwMDhhMDA7XG59XG4ucWwtZWRpdG9yIC5xbC1jb2xvci1ibHVlIHtcbiAgY29sb3I6ICMwNmM7XG59XG4ucWwtZWRpdG9yIC5xbC1jb2xvci1wdXJwbGUge1xuICBjb2xvcjogIzkzZjtcbn1cbi5xbC1lZGl0b3IgLnFsLWZvbnQtc2VyaWYge1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcbn1cbi5xbC1lZGl0b3IgLnFsLWZvbnQtbW9ub3NwYWNlIHtcbiAgZm9udC1mYW1pbHk6IE1vbmFjbywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbn1cbi5xbC1lZGl0b3IgLnFsLXNpemUtc21hbGwge1xuICBmb250LXNpemU6IDAuNzVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLXNpemUtbGFyZ2Uge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtc2l6ZS1odWdlIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWRpcmVjdGlvbi1ydGwge1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbn1cbi5xbC1lZGl0b3IgLnFsLWFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5xbC1lZGl0b3IgLnFsLWFsaWduLWp1c3RpZnkge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLnFsLWVkaXRvciAucWwtYWxpZ24tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5xbC1lZGl0b3IucWwtYmxhbms6OmJlZm9yZSB7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGVmdDogMTVweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG59XG4iLCIvKiFcbiAqIFF1aWxsIEVkaXRvciB2MS4zLjdcbiAqIGh0dHBzOi8vcXVpbGxqcy5jb20vXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEphc29uIENoZW5cbiAqIENvcHlyaWdodCAoYykgMjAxMywgc2FsZXNmb3JjZS5jb21cbiAqL1xuLnFsLWNvbnRhaW5lciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5xbC1jb250YWluZXIucWwtZGlzYWJsZWQgLnFsLXRvb2x0aXAge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ucWwtY29udGFpbmVyLnFsLWRpc2FibGVkIC5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkXSA+IGxpOjpiZWZvcmUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5xbC1jbGlwYm9hcmQge1xuICBsZWZ0OiAtMTAwMDAwcHg7XG4gIGhlaWdodDogMXB4O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG59XG4ucWwtY2xpcGJvYXJkIHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ucWwtZWRpdG9yIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI7XG4gIGhlaWdodDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICB0YWItc2l6ZTogNDtcbiAgLW1vei10YWItc2l6ZTogNDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4ucWwtZWRpdG9yID4gKiB7XG4gIGN1cnNvcjogdGV4dDtcbn1cbi5xbC1lZGl0b3IgcCxcbi5xbC1lZGl0b3Igb2wsXG4ucWwtZWRpdG9yIHVsLFxuLnFsLWVkaXRvciBwcmUsXG4ucWwtZWRpdG9yIGJsb2NrcXVvdGUsXG4ucWwtZWRpdG9yIGgxLFxuLnFsLWVkaXRvciBoMixcbi5xbC1lZGl0b3IgaDMsXG4ucWwtZWRpdG9yIGg0LFxuLnFsLWVkaXRvciBoNSxcbi5xbC1lZGl0b3IgaDYge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtMSBsaXN0LTIgbGlzdC0zIGxpc3QtNCBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCxcbi5xbC1lZGl0b3IgdWwge1xuICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xufVxuLnFsLWVkaXRvciBvbCA+IGxpLFxuLnFsLWVkaXRvciB1bCA+IGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLnFsLWVkaXRvciB1bCA+IGxpOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFwyMDIyJztcbn1cbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPXRydWVdLFxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9ZmFsc2VdIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD10cnVlXSA+IGxpICosXG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD1mYWxzZV0gPiBsaSAqIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPXRydWVdID4gbGk6OmJlZm9yZSxcbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPWZhbHNlXSA+IGxpOjpiZWZvcmUge1xuICBjb2xvcjogIzc3NztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9dHJ1ZV0gPiBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcMjYxMSc7XG59XG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD1mYWxzZV0gPiBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcMjYxMCc7XG59XG4ucWwtZWRpdG9yIGxpOjpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxLjJlbTtcbn1cbi5xbC1lZGl0b3IgbGk6bm90KC5xbC1kaXJlY3Rpb24tcnRsKTo6YmVmb3JlIHtcbiAgbWFyZ2luLWxlZnQ6IC0xLjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucWwtZWRpdG9yIGxpLnFsLWRpcmVjdGlvbi1ydGw6OmJlZm9yZSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjNlbTtcbiAgbWFyZ2luLXJpZ2h0OiAtMS41ZW07XG59XG4ucWwtZWRpdG9yIG9sIGxpOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCksXG4ucWwtZWRpdG9yIHVsIGxpOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1kaXJlY3Rpb24tcnRsLFxuLnFsLWVkaXRvciB1bCBsaS5xbC1kaXJlY3Rpb24tcnRsIHtcbiAgcGFkZGluZy1yaWdodDogMS41ZW07XG59XG4ucWwtZWRpdG9yIG9sIGxpIHtcbiAgY291bnRlci1yZXNldDogbGlzdC0xIGxpc3QtMiBsaXN0LTMgbGlzdC00IGxpc3QtNSBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTA7XG59XG4ucWwtZWRpdG9yIG9sIGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC0wLCBkZWNpbWFsKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMSB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTE7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC0xLCBsb3dlci1hbHBoYSkgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTEge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTIgbGlzdC0zIGxpc3QtNCBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMiB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTI7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC0yLCBsb3dlci1yb21hbikgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTIge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTMgbGlzdC00IGxpc3QtNSBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0zIHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtMztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTM6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTMsIGRlY2ltYWwpICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0zIHtcbiAgY291bnRlci1yZXNldDogbGlzdC00IGxpc3QtNSBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC00IHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtNDtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTQ6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTQsIGxvd2VyLWFscGhhKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNCB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtNSBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC01IHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtNTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTU6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTUsIGxvd2VyLXJvbWFuKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNSB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtNiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTYge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC02O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNjpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtNiwgZGVjaW1hbCkgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTYge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTcge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC03O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNzpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtNywgbG93ZXItYWxwaGEpICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC03IHtcbiAgY291bnRlci1yZXNldDogbGlzdC04IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTgge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC04O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtODpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtOCwgbG93ZXItcm9tYW4pICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC04IHtcbiAgY291bnRlci1yZXNldDogbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtOSB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC05OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC05LCBkZWNpbWFsKSAnLiAnO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTE6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogM2VtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiA0LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC0xLnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAzZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC0xLnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiA0LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC0yOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDZlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTI6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogNy41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMi5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogNmVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMi5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogNy41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMzpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiA5ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC0zOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDEwLjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC0zLnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiA5ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC0zLnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMC41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNDpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxMmVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNDpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxMy41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNC5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTJlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTQucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEzLjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC01Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDE1ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC01Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDE2LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC01LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNWVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTYuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTY6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMThlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTY6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMTkuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTYucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE4ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC02LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxOS41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNzpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAyMWVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNzpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAyMi41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNy5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMjFlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTcucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIyLjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC04Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDI0ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC04Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDI1LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC04LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAyNGVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtOC5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMjUuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTk6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMjdlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTk6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMjguNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTkucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDI3ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC05LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAyOC41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC12aWRlbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ucWwtZWRpdG9yIC5xbC12aWRlby5xbC1hbGlnbi1jZW50ZXIge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5xbC1lZGl0b3IgLnFsLXZpZGVvLnFsLWFsaWduLXJpZ2h0IHtcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xufVxuLnFsLWVkaXRvciAucWwtYmctYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuLnFsLWVkaXRvciAucWwtYmctcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2MDAwMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWJnLW9yYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOTA7XG59XG4ucWwtZWRpdG9yIC5xbC1iZy15ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwO1xufVxuLnFsLWVkaXRvciAucWwtYmctZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4YTAwO1xufVxuLnFsLWVkaXRvciAucWwtYmctYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNmM7XG59XG4ucWwtZWRpdG9yIC5xbC1iZy1wdXJwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNmO1xufVxuLnFsLWVkaXRvciAucWwtY29sb3Itd2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5xbC1lZGl0b3IgLnFsLWNvbG9yLXJlZCB7XG4gIGNvbG9yOiAjZTYwMDAwO1xufVxuLnFsLWVkaXRvciAucWwtY29sb3Itb3JhbmdlIHtcbiAgY29sb3I6ICNmOTA7XG59XG4ucWwtZWRpdG9yIC5xbC1jb2xvci15ZWxsb3cge1xuICBjb2xvcjogI2ZmMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWNvbG9yLWdyZWVuIHtcbiAgY29sb3I6ICMwMDhhMDA7XG59XG4ucWwtZWRpdG9yIC5xbC1jb2xvci1ibHVlIHtcbiAgY29sb3I6ICMwNmM7XG59XG4ucWwtZWRpdG9yIC5xbC1jb2xvci1wdXJwbGUge1xuICBjb2xvcjogIzkzZjtcbn1cbi5xbC1lZGl0b3IgLnFsLWZvbnQtc2VyaWYge1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcbn1cbi5xbC1lZGl0b3IgLnFsLWZvbnQtbW9ub3NwYWNlIHtcbiAgZm9udC1mYW1pbHk6IE1vbmFjbywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbn1cbi5xbC1lZGl0b3IgLnFsLXNpemUtc21hbGwge1xuICBmb250LXNpemU6IDAuNzVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLXNpemUtbGFyZ2Uge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtc2l6ZS1odWdlIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWRpcmVjdGlvbi1ydGwge1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbn1cbi5xbC1lZGl0b3IgLnFsLWFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5xbC1lZGl0b3IgLnFsLWFsaWduLWp1c3RpZnkge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLnFsLWVkaXRvciAucWwtYWxpZ24tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5xbC1lZGl0b3IucWwtYmxhbms6OmJlZm9yZSB7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGVmdDogMTVweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG59XG4ucWwtYnViYmxlLnFsLXRvb2xiYXI6YWZ0ZXIsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5xbC1idWJibGUucWwtdG9vbGJhciBidXR0b24sXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIGJ1dHRvbiBzdmcsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIGJ1dHRvbiBzdmcge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIGJ1dHRvbjphY3RpdmU6aG92ZXIsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIGJ1dHRvbjphY3RpdmU6aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIGlucHV0LnFsLWltYWdlW3R5cGU9ZmlsZV0sXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIGlucHV0LnFsLWltYWdlW3R5cGU9ZmlsZV0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcixcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyxcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3Zlcixcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3Zlcixcbi5xbC1idWJibGUucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSxcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5xbC1idWJibGUucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLWZpbGwsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtZmlsbCxcbi5xbC1idWJibGUucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLWZpbGwsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyAucWwtZmlsbCxcbi5xbC1idWJibGUucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1maWxsLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1maWxsLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIgLnFsLWZpbGwsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIgLnFsLWZpbGwsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLWZpbGwsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlIC5xbC1maWxsLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlciAucWwtZmlsbCxcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIC5xbC1maWxsLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCAucWwtZmlsbCxcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1maWxsLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1idWJibGUucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3ZlciAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlciAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlciAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1zdHJva2UucWwtZmlsbCB7XG4gIGZpbGw6ICNmZmY7XG59XG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyIC5xbC1zdHJva2UsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtc3Ryb2tlLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyAucWwtc3Ryb2tlLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLXN0cm9rZSxcbi5xbC1idWJibGUucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1zdHJva2UsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUgLnFsLXN0cm9rZSxcbi5xbC1idWJibGUucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1zdHJva2UsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIgLnFsLXN0cm9rZSxcbi5xbC1idWJibGUucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlciAucWwtc3Ryb2tlLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLXN0cm9rZSxcbi5xbC1idWJibGUucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQgLnFsLXN0cm9rZSxcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1zdHJva2UsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1idWJibGUucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1idWJibGUucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1idWJibGUucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlciAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1idWJibGUucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1zdHJva2UtbWl0ZXIge1xuICBzdHJva2U6ICNmZmY7XG59XG5AbWVkaWEgKHBvaW50ZXI6IGNvYXJzZSkge1xuICAucWwtYnViYmxlLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSxcbiAgLnFsLWJ1YmJsZSAucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIHtcbiAgICBjb2xvcjogI2NjYztcbiAgfVxuICAucWwtYnViYmxlLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtZmlsbCxcbiAgLnFsLWJ1YmJsZSAucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIC5xbC1maWxsLFxuICAucWwtYnViYmxlLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtc3Ryb2tlLnFsLWZpbGwsXG4gIC5xbC1idWJibGUgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtc3Ryb2tlLnFsLWZpbGwge1xuICAgIGZpbGw6ICNjY2M7XG4gIH1cbiAgLnFsLWJ1YmJsZS5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSkgLnFsLXN0cm9rZSxcbiAgLnFsLWJ1YmJsZSAucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIC5xbC1zdHJva2UsXG4gIC5xbC1idWJibGUucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIC5xbC1zdHJva2UtbWl0ZXIsXG4gIC5xbC1idWJibGUgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtc3Ryb2tlLW1pdGVyIHtcbiAgICBzdHJva2U6ICNjY2M7XG4gIH1cbn1cbi5xbC1idWJibGUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnFsLWJ1YmJsZSAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5xbC1idWJibGUgLnFsLWhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucWwtYnViYmxlIC5xbC1vdXQtYm90dG9tLFxuLnFsLWJ1YmJsZSAucWwtb3V0LXRvcCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5xbC1idWJibGUgLnFsLXRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbn1cbi5xbC1idWJibGUgLnFsLXRvb2x0aXAgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnFsLWJ1YmJsZSAucWwtdG9vbHRpcC5xbC1mbGlwIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbn1cbi5xbC1idWJibGUgLnFsLWZvcm1hdHMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ucWwtYnViYmxlIC5xbC1mb3JtYXRzOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5xbC1idWJibGUgLnFsLXN0cm9rZSB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogI2NjYztcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICBzdHJva2Utd2lkdGg6IDI7XG59XG4ucWwtYnViYmxlIC5xbC1zdHJva2UtbWl0ZXIge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICNjY2M7XG4gIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcbiAgc3Ryb2tlLXdpZHRoOiAyO1xufVxuLnFsLWJ1YmJsZSAucWwtZmlsbCxcbi5xbC1idWJibGUgLnFsLXN0cm9rZS5xbC1maWxsIHtcbiAgZmlsbDogI2NjYztcbn1cbi5xbC1idWJibGUgLnFsLWVtcHR5IHtcbiAgZmlsbDogbm9uZTtcbn1cbi5xbC1idWJibGUgLnFsLWV2ZW4ge1xuICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7XG59XG4ucWwtYnViYmxlIC5xbC10aGluLFxuLnFsLWJ1YmJsZSAucWwtc3Ryb2tlLnFsLXRoaW4ge1xuICBzdHJva2Utd2lkdGg6IDE7XG59XG4ucWwtYnViYmxlIC5xbC10cmFuc3BhcmVudCB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5xbC1idWJibGUgLnFsLWRpcmVjdGlvbiBzdmc6bGFzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucWwtYnViYmxlIC5xbC1kaXJlY3Rpb24ucWwtYWN0aXZlIHN2ZzpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLnFsLWJ1YmJsZSAucWwtZGlyZWN0aW9uLnFsLWFjdGl2ZSBzdmc6Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnFsLWJ1YmJsZSAucWwtZWRpdG9yIGgxIHtcbiAgZm9udC1zaXplOiAyZW07XG59XG4ucWwtYnViYmxlIC5xbC1lZGl0b3IgaDIge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLnFsLWJ1YmJsZSAucWwtZWRpdG9yIGgzIHtcbiAgZm9udC1zaXplOiAxLjE3ZW07XG59XG4ucWwtYnViYmxlIC5xbC1lZGl0b3IgaDQge1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5xbC1idWJibGUgLnFsLWVkaXRvciBoNSB7XG4gIGZvbnQtc2l6ZTogMC44M2VtO1xufVxuLnFsLWJ1YmJsZSAucWwtZWRpdG9yIGg2IHtcbiAgZm9udC1zaXplOiAwLjY3ZW07XG59XG4ucWwtYnViYmxlIC5xbC1lZGl0b3IgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnFsLWJ1YmJsZSAucWwtZWRpdG9yIGJsb2NrcXVvdGUge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4ucWwtYnViYmxlIC5xbC1lZGl0b3IgY29kZSxcbi5xbC1idWJibGUgLnFsLWVkaXRvciBwcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4ucWwtYnViYmxlIC5xbC1lZGl0b3IgcHJlIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4ucWwtYnViYmxlIC5xbC1lZGl0b3IgY29kZSB7XG4gIGZvbnQtc2l6ZTogODUlO1xuICBwYWRkaW5nOiAycHggNHB4O1xufVxuLnFsLWJ1YmJsZSAucWwtZWRpdG9yIHByZS5xbC1zeW50YXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyNDFmO1xuICBjb2xvcjogI2Y4ZjhmMjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4ucWwtYnViYmxlIC5xbC1lZGl0b3IgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyIHtcbiAgY29sb3I6ICNjY2M7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXItbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLWxhYmVsOjpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLW9wdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xuICBkaXNwbGF5OiBub25lO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci1vcHRpb25zIC5xbC1waWNrZXItaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtZXhwYW5kZWQgLnFsLXBpY2tlci1sYWJlbCB7XG4gIGNvbG9yOiAjNzc3O1xuICB6LWluZGV4OiAyO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWV4cGFuZGVkIC5xbC1waWNrZXItbGFiZWwgLnFsLWZpbGwge1xuICBmaWxsOiAjNzc3O1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWV4cGFuZGVkIC5xbC1waWNrZXItbGFiZWwgLnFsLXN0cm9rZSB7XG4gIHN0cm9rZTogIzc3Nztcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1leHBhbmRlZCAucWwtcGlja2VyLW9wdGlvbnMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgdG9wOiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuLnFsLWJ1YmJsZSAucWwtY29sb3ItcGlja2VyLFxuLnFsLWJ1YmJsZSAucWwtaWNvbi1waWNrZXIge1xuICB3aWR0aDogMjhweDtcbn1cbi5xbC1idWJibGUgLnFsLWNvbG9yLXBpY2tlciAucWwtcGlja2VyLWxhYmVsLFxuLnFsLWJ1YmJsZSAucWwtaWNvbi1waWNrZXIgLnFsLXBpY2tlci1sYWJlbCB7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG59XG4ucWwtYnViYmxlIC5xbC1jb2xvci1waWNrZXIgLnFsLXBpY2tlci1sYWJlbCBzdmcsXG4ucWwtYnViYmxlIC5xbC1pY29uLXBpY2tlciAucWwtcGlja2VyLWxhYmVsIHN2ZyB7XG4gIHJpZ2h0OiA0cHg7XG59XG4ucWwtYnViYmxlIC5xbC1pY29uLXBpY2tlciAucWwtcGlja2VyLW9wdGlvbnMge1xuICBwYWRkaW5nOiA0cHggMHB4O1xufVxuLnFsLWJ1YmJsZSAucWwtaWNvbi1waWNrZXIgLnFsLXBpY2tlci1pdGVtIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgcGFkZGluZzogMnB4IDRweDtcbn1cbi5xbC1idWJibGUgLnFsLWNvbG9yLXBpY2tlciAucWwtcGlja2VyLW9wdGlvbnMge1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICB3aWR0aDogMTUycHg7XG59XG4ucWwtYnViYmxlIC5xbC1jb2xvci1waWNrZXIgLnFsLXBpY2tlci1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxNnB4O1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyOm5vdCgucWwtY29sb3ItcGlja2VyKTpub3QoLnFsLWljb24tcGlja2VyKSBzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC05cHg7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDE4cHg7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWxbZGF0YS1sYWJlbF06bm90KFtkYXRhLWxhYmVsPScnXSk6OmJlZm9yZSxcbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItbGFiZWxbZGF0YS1sYWJlbF06bm90KFtkYXRhLWxhYmVsPScnXSk6OmJlZm9yZSxcbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItbGFiZWxbZGF0YS1sYWJlbF06bm90KFtkYXRhLWxhYmVsPScnXSk6OmJlZm9yZSxcbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtbGFiZWxdOm5vdChbZGF0YS1sYWJlbD0nJ10pOjpiZWZvcmUsXG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWl0ZW1bZGF0YS1sYWJlbF06bm90KFtkYXRhLWxhYmVsPScnXSk6OmJlZm9yZSxcbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbVtkYXRhLWxhYmVsXTpub3QoW2RhdGEtbGFiZWw9JyddKTo6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1oZWFkZXIge1xuICB3aWR0aDogOThweDtcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1sYWJlbDo6YmVmb3JlLFxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdOb3JtYWwnO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9XCIxXCJdOjpiZWZvcmUsXG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiMVwiXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ0hlYWRpbmcgMSc7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1cIjJcIl06OmJlZm9yZSxcbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XCIyXCJdOjpiZWZvcmUge1xuICBjb250ZW50OiAnSGVhZGluZyAyJztcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPVwiM1wiXTo6YmVmb3JlLFxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjNcIl06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdIZWFkaW5nIDMnO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9XCI0XCJdOjpiZWZvcmUsXG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiNFwiXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ0hlYWRpbmcgNCc7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1cIjVcIl06OmJlZm9yZSxcbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XCI1XCJdOjpiZWZvcmUge1xuICBjb250ZW50OiAnSGVhZGluZyA1Jztcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPVwiNlwiXTo6YmVmb3JlLFxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjZcIl06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdIZWFkaW5nIDYnO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjFcIl06OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjJcIl06OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiM1wiXTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAxLjE3ZW07XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiNFwiXTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiNVwiXTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAwLjgzZW07XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiNlwiXTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAwLjY3ZW07XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtZm9udCB7XG4gIHdpZHRoOiAxMDhweDtcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItbGFiZWw6OmJlZm9yZSxcbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItaXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1NhbnMgU2VyaWYnO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPXNlcmlmXTo6YmVmb3JlLFxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9c2VyaWZdOjpiZWZvcmUge1xuICBjb250ZW50OiAnU2VyaWYnO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPW1vbm9zcGFjZV06OmJlZm9yZSxcbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPW1vbm9zcGFjZV06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdNb25vc3BhY2UnO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9c2VyaWZdOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPW1vbm9zcGFjZV06OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBNb25hY28sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtc2l6ZSB7XG4gIHdpZHRoOiA5OHB4O1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1sYWJlbDo6YmVmb3JlLFxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiAnTm9ybWFsJztcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1zbWFsbF06OmJlZm9yZSxcbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPXNtYWxsXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1NtYWxsJztcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1sYXJnZV06OmJlZm9yZSxcbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPWxhcmdlXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ0xhcmdlJztcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1odWdlXTo6YmVmb3JlLFxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9aHVnZV06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdIdWdlJztcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPXNtYWxsXTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9bGFyZ2VdOjpiZWZvcmUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1odWdlXTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuLnFsLWJ1YmJsZSAucWwtY29sb3ItcGlja2VyLnFsLWJhY2tncm91bmQgLnFsLXBpY2tlci1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5xbC1idWJibGUgLnFsLWNvbG9yLXBpY2tlci5xbC1jb2xvciAucWwtcGlja2VyLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciAucWwtZm9ybWF0cyB7XG4gIG1hcmdpbjogOHB4IDEycHggOHB4IDBweDtcbn1cbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgLnFsLWZvcm1hdHM6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5xbC1idWJibGUgLnFsLWNvbG9yLXBpY2tlciBzdmcge1xuICBtYXJnaW46IDFweDtcbn1cbi5xbC1idWJibGUgLnFsLWNvbG9yLXBpY2tlciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQsXG4ucWwtYnViYmxlIC5xbC1jb2xvci1waWNrZXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuLnFsLWJ1YmJsZSAucWwtdG9vbHRpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnFsLWJ1YmJsZSAucWwtdG9vbHRpcC1hcnJvdyB7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC02cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5xbC1idWJibGUgLnFsLXRvb2x0aXA6bm90KC5xbC1mbGlwKSAucWwtdG9vbHRpcC1hcnJvdyB7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjNDQ0O1xuICB0b3A6IC02cHg7XG59XG4ucWwtYnViYmxlIC5xbC10b29sdGlwLnFsLWZsaXAgLnFsLXRvb2x0aXAtYXJyb3cge1xuICBib3JkZXItdG9wOiA2cHggc29saWQgIzQ0NDtcbiAgYm90dG9tOiAtNnB4O1xufVxuLnFsLWJ1YmJsZSAucWwtdG9vbHRpcC5xbC1lZGl0aW5nIC5xbC10b29sdGlwLWVkaXRvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnFsLWJ1YmJsZSAucWwtdG9vbHRpcC5xbC1lZGl0aW5nIC5xbC1mb3JtYXRzIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnFsLWJ1YmJsZSAucWwtdG9vbHRpcC1lZGl0b3Ige1xuICBkaXNwbGF5OiBub25lO1xufVxuLnFsLWJ1YmJsZSAucWwtdG9vbHRpcC1lZGl0b3IgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnFsLWJ1YmJsZSAucWwtdG9vbHRpcC1lZGl0b3IgYSB7XG4gIHRvcDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbn1cbi5xbC1idWJibGUgLnFsLXRvb2x0aXAtZWRpdG9yIGE6YmVmb3JlIHtcbiAgY29sb3I6ICNjY2M7XG4gIGNvbnRlbnQ6IFwiXFxEN1wiO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnFsLWNvbnRhaW5lci5xbC1idWJibGU6bm90KC5xbC1kaXNhYmxlZCkgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5xbC1jb250YWluZXIucWwtYnViYmxlOm5vdCgucWwtZGlzYWJsZWQpIGE6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRvcDogLTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgY29udGVudDogYXR0cihocmVmKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgei1pbmRleDogMTtcbn1cbi5xbC1jb250YWluZXIucWwtYnViYmxlOm5vdCgucWwtZGlzYWJsZWQpIGE6OmFmdGVyIHtcbiAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICM0NDQ7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0b3A6IDA7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufVxuLnFsLWNvbnRhaW5lci5xbC1idWJibGU6bm90KC5xbC1kaXNhYmxlZCkgYTo6YmVmb3JlLFxuLnFsLWNvbnRhaW5lci5xbC1idWJibGU6bm90KC5xbC1kaXNhYmxlZCkgYTo6YWZ0ZXIge1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDAlKTtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBlYXNlIDIwMG1zO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ucWwtY29udGFpbmVyLnFsLWJ1YmJsZTpub3QoLnFsLWRpc2FibGVkKSBhOmhvdmVyOjpiZWZvcmUsXG4ucWwtY29udGFpbmVyLnFsLWJ1YmJsZTpub3QoLnFsLWRpc2FibGVkKSBhOmhvdmVyOjphZnRlciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4iLCIvKiFcbiAqIFF1aWxsIEVkaXRvciB2MS4zLjdcbiAqIGh0dHBzOi8vcXVpbGxqcy5jb20vXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEphc29uIENoZW5cbiAqIENvcHlyaWdodCAoYykgMjAxMywgc2FsZXNmb3JjZS5jb21cbiAqL1xuLnFsLWNvbnRhaW5lciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5xbC1jb250YWluZXIucWwtZGlzYWJsZWQgLnFsLXRvb2x0aXAge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ucWwtY29udGFpbmVyLnFsLWRpc2FibGVkIC5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkXSA+IGxpOjpiZWZvcmUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5xbC1jbGlwYm9hcmQge1xuICBsZWZ0OiAtMTAwMDAwcHg7XG4gIGhlaWdodDogMXB4O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG59XG4ucWwtY2xpcGJvYXJkIHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ucWwtZWRpdG9yIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI7XG4gIGhlaWdodDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICB0YWItc2l6ZTogNDtcbiAgLW1vei10YWItc2l6ZTogNDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4ucWwtZWRpdG9yID4gKiB7XG4gIGN1cnNvcjogdGV4dDtcbn1cbi5xbC1lZGl0b3IgcCxcbi5xbC1lZGl0b3Igb2wsXG4ucWwtZWRpdG9yIHVsLFxuLnFsLWVkaXRvciBwcmUsXG4ucWwtZWRpdG9yIGJsb2NrcXVvdGUsXG4ucWwtZWRpdG9yIGgxLFxuLnFsLWVkaXRvciBoMixcbi5xbC1lZGl0b3IgaDMsXG4ucWwtZWRpdG9yIGg0LFxuLnFsLWVkaXRvciBoNSxcbi5xbC1lZGl0b3IgaDYge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtMSBsaXN0LTIgbGlzdC0zIGxpc3QtNCBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCxcbi5xbC1lZGl0b3IgdWwge1xuICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xufVxuLnFsLWVkaXRvciBvbCA+IGxpLFxuLnFsLWVkaXRvciB1bCA+IGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLnFsLWVkaXRvciB1bCA+IGxpOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFwyMDIyJztcbn1cbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPXRydWVdLFxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9ZmFsc2VdIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD10cnVlXSA+IGxpICosXG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD1mYWxzZV0gPiBsaSAqIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPXRydWVdID4gbGk6OmJlZm9yZSxcbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPWZhbHNlXSA+IGxpOjpiZWZvcmUge1xuICBjb2xvcjogIzc3NztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9dHJ1ZV0gPiBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcMjYxMSc7XG59XG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD1mYWxzZV0gPiBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcMjYxMCc7XG59XG4ucWwtZWRpdG9yIGxpOjpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxLjJlbTtcbn1cbi5xbC1lZGl0b3IgbGk6bm90KC5xbC1kaXJlY3Rpb24tcnRsKTo6YmVmb3JlIHtcbiAgbWFyZ2luLWxlZnQ6IC0xLjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucWwtZWRpdG9yIGxpLnFsLWRpcmVjdGlvbi1ydGw6OmJlZm9yZSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjNlbTtcbiAgbWFyZ2luLXJpZ2h0OiAtMS41ZW07XG59XG4ucWwtZWRpdG9yIG9sIGxpOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCksXG4ucWwtZWRpdG9yIHVsIGxpOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1kaXJlY3Rpb24tcnRsLFxuLnFsLWVkaXRvciB1bCBsaS5xbC1kaXJlY3Rpb24tcnRsIHtcbiAgcGFkZGluZy1yaWdodDogMS41ZW07XG59XG4ucWwtZWRpdG9yIG9sIGxpIHtcbiAgY291bnRlci1yZXNldDogbGlzdC0xIGxpc3QtMiBsaXN0LTMgbGlzdC00IGxpc3QtNSBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTA7XG59XG4ucWwtZWRpdG9yIG9sIGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC0wLCBkZWNpbWFsKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMSB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTE7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC0xLCBsb3dlci1hbHBoYSkgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTEge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTIgbGlzdC0zIGxpc3QtNCBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMiB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTI7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC0yLCBsb3dlci1yb21hbikgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTIge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTMgbGlzdC00IGxpc3QtNSBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0zIHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtMztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTM6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTMsIGRlY2ltYWwpICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0zIHtcbiAgY291bnRlci1yZXNldDogbGlzdC00IGxpc3QtNSBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC00IHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtNDtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTQ6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTQsIGxvd2VyLWFscGhhKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNCB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtNSBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC01IHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtNTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTU6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTUsIGxvd2VyLXJvbWFuKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNSB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtNiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTYge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC02O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNjpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtNiwgZGVjaW1hbCkgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTYge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTcge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC03O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNzpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtNywgbG93ZXItYWxwaGEpICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC03IHtcbiAgY291bnRlci1yZXNldDogbGlzdC04IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTgge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC04O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtODpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtOCwgbG93ZXItcm9tYW4pICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC04IHtcbiAgY291bnRlci1yZXNldDogbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtOSB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC05OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC05LCBkZWNpbWFsKSAnLiAnO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTE6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogM2VtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiA0LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC0xLnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAzZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC0xLnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiA0LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC0yOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDZlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTI6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogNy41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMi5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogNmVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMi5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogNy41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMzpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiA5ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC0zOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDEwLjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC0zLnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiA5ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC0zLnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMC41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNDpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxMmVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNDpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxMy41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNC5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTJlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTQucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEzLjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC01Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDE1ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC01Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDE2LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC01LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNWVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTYuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTY6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMThlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTY6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMTkuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTYucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE4ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC02LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxOS41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNzpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAyMWVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNzpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAyMi41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNy5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMjFlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTcucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIyLjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC04Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDI0ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC04Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDI1LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC04LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAyNGVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtOC5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMjUuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTk6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMjdlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTk6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMjguNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTkucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDI3ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC05LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAyOC41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC12aWRlbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ucWwtZWRpdG9yIC5xbC12aWRlby5xbC1hbGlnbi1jZW50ZXIge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5xbC1lZGl0b3IgLnFsLXZpZGVvLnFsLWFsaWduLXJpZ2h0IHtcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xufVxuLnFsLWVkaXRvciAucWwtYmctYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuLnFsLWVkaXRvciAucWwtYmctcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2MDAwMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWJnLW9yYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOTA7XG59XG4ucWwtZWRpdG9yIC5xbC1iZy15ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwO1xufVxuLnFsLWVkaXRvciAucWwtYmctZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4YTAwO1xufVxuLnFsLWVkaXRvciAucWwtYmctYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNmM7XG59XG4ucWwtZWRpdG9yIC5xbC1iZy1wdXJwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNmO1xufVxuLnFsLWVkaXRvciAucWwtY29sb3Itd2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5xbC1lZGl0b3IgLnFsLWNvbG9yLXJlZCB7XG4gIGNvbG9yOiAjZTYwMDAwO1xufVxuLnFsLWVkaXRvciAucWwtY29sb3Itb3JhbmdlIHtcbiAgY29sb3I6ICNmOTA7XG59XG4ucWwtZWRpdG9yIC5xbC1jb2xvci15ZWxsb3cge1xuICBjb2xvcjogI2ZmMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWNvbG9yLWdyZWVuIHtcbiAgY29sb3I6ICMwMDhhMDA7XG59XG4ucWwtZWRpdG9yIC5xbC1jb2xvci1ibHVlIHtcbiAgY29sb3I6ICMwNmM7XG59XG4ucWwtZWRpdG9yIC5xbC1jb2xvci1wdXJwbGUge1xuICBjb2xvcjogIzkzZjtcbn1cbi5xbC1lZGl0b3IgLnFsLWZvbnQtc2VyaWYge1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcbn1cbi5xbC1lZGl0b3IgLnFsLWZvbnQtbW9ub3NwYWNlIHtcbiAgZm9udC1mYW1pbHk6IE1vbmFjbywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbn1cbi5xbC1lZGl0b3IgLnFsLXNpemUtc21hbGwge1xuICBmb250LXNpemU6IDAuNzVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLXNpemUtbGFyZ2Uge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtc2l6ZS1odWdlIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWRpcmVjdGlvbi1ydGwge1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbn1cbi5xbC1lZGl0b3IgLnFsLWFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5xbC1lZGl0b3IgLnFsLWFsaWduLWp1c3RpZnkge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLnFsLWVkaXRvciAucWwtYWxpZ24tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5xbC1lZGl0b3IucWwtYmxhbms6OmJlZm9yZSB7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGVmdDogMTVweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG59XG4ucWwtc25vdy5xbC10b29sYmFyOmFmdGVyLFxuLnFsLXNub3cgLnFsLXRvb2xiYXI6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b24sXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICB3aWR0aDogMjhweDtcbn1cbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uIHN2Zyxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbiBzdmcge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246YWN0aXZlOmhvdmVyLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmFjdGl2ZTpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucWwtc25vdy5xbC10b29sYmFyIGlucHV0LnFsLWltYWdlW3R5cGU9ZmlsZV0sXG4ucWwtc25vdyAucWwtdG9vbGJhciBpbnB1dC5xbC1pbWFnZVt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyLFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246Zm9jdXMsXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246Zm9jdXMsXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUsXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3Zlcixcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQge1xuICBjb2xvcjogIzA2Yztcbn1cbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyIC5xbC1maWxsLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyIC5xbC1maWxsLFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLWZpbGwsXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLWZpbGwsXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUgLnFsLWZpbGwsXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1maWxsLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1maWxsLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3ZlciAucWwtZmlsbCxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLWZpbGwsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtZmlsbCxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIC5xbC1maWxsLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIC5xbC1maWxsLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQgLnFsLWZpbGwsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQgLnFsLWZpbGwsXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3ZlciAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCAucWwtc3Ryb2tlLnFsLWZpbGwge1xuICBmaWxsOiAjMDZjO1xufVxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLXN0cm9rZSxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtc3Ryb2tlLFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLXN0cm9rZSxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyAucWwtc3Ryb2tlLFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1zdHJva2UsXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1zdHJva2UsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIgLnFsLXN0cm9rZSxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIgLnFsLXN0cm9rZSxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLXN0cm9rZSxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlIC5xbC1zdHJva2UsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlciAucWwtc3Ryb2tlLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIC5xbC1zdHJva2UsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCAucWwtc3Ryb2tlLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1zdHJva2UsXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3ZlciAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3ZlciAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQgLnFsLXN0cm9rZS1taXRlciB7XG4gIHN0cm9rZTogIzA2Yztcbn1cbkBtZWRpYSAocG9pbnRlcjogY29hcnNlKSB7XG4gIC5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSxcbiAgLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSB7XG4gICAgY29sb3I6ICM0NDQ7XG4gIH1cbiAgLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIC5xbC1maWxsLFxuICAucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIC5xbC1maWxsLFxuICAucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSkgLnFsLXN0cm9rZS5xbC1maWxsLFxuICAucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIC5xbC1zdHJva2UucWwtZmlsbCB7XG4gICAgZmlsbDogIzQ0NDtcbiAgfVxuICAucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSkgLnFsLXN0cm9rZSxcbiAgLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtc3Ryb2tlLFxuICAucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSkgLnFsLXN0cm9rZS1taXRlcixcbiAgLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtc3Ryb2tlLW1pdGVyIHtcbiAgICBzdHJva2U6ICM0NDQ7XG4gIH1cbn1cbi5xbC1zbm93IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5xbC1zbm93ICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnFsLXNub3cgLnFsLWhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucWwtc25vdyAucWwtb3V0LWJvdHRvbSxcbi5xbC1zbm93IC5xbC1vdXQtdG9wIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnFsLXNub3cgLnFsLXRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbn1cbi5xbC1zbm93IC5xbC10b29sdGlwIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5xbC1zbm93IC5xbC10b29sdGlwLnFsLWZsaXAge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xufVxuLnFsLXNub3cgLnFsLWZvcm1hdHMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ucWwtc25vdyAucWwtZm9ybWF0czphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogdGFibGU7XG59XG4ucWwtc25vdyAucWwtc3Ryb2tlIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiAjNDQ0O1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gIHN0cm9rZS13aWR0aDogMjtcbn1cbi5xbC1zbm93IC5xbC1zdHJva2UtbWl0ZXIge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICM0NDQ7XG4gIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcbiAgc3Ryb2tlLXdpZHRoOiAyO1xufVxuLnFsLXNub3cgLnFsLWZpbGwsXG4ucWwtc25vdyAucWwtc3Ryb2tlLnFsLWZpbGwge1xuICBmaWxsOiAjNDQ0O1xufVxuLnFsLXNub3cgLnFsLWVtcHR5IHtcbiAgZmlsbDogbm9uZTtcbn1cbi5xbC1zbm93IC5xbC1ldmVuIHtcbiAgZmlsbC1ydWxlOiBldmVub2RkO1xufVxuLnFsLXNub3cgLnFsLXRoaW4sXG4ucWwtc25vdyAucWwtc3Ryb2tlLnFsLXRoaW4ge1xuICBzdHJva2Utd2lkdGg6IDE7XG59XG4ucWwtc25vdyAucWwtdHJhbnNwYXJlbnQge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4ucWwtc25vdyAucWwtZGlyZWN0aW9uIHN2ZzpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5xbC1zbm93IC5xbC1kaXJlY3Rpb24ucWwtYWN0aXZlIHN2ZzpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLnFsLXNub3cgLnFsLWRpcmVjdGlvbi5xbC1hY3RpdmUgc3ZnOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5xbC1zbm93IC5xbC1lZGl0b3IgaDEge1xuICBmb250LXNpemU6IDJlbTtcbn1cbi5xbC1zbm93IC5xbC1lZGl0b3IgaDIge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLnFsLXNub3cgLnFsLWVkaXRvciBoMyB7XG4gIGZvbnQtc2l6ZTogMS4xN2VtO1xufVxuLnFsLXNub3cgLnFsLWVkaXRvciBoNCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLnFsLXNub3cgLnFsLWVkaXRvciBoNSB7XG4gIGZvbnQtc2l6ZTogMC44M2VtO1xufVxuLnFsLXNub3cgLnFsLWVkaXRvciBoNiB7XG4gIGZvbnQtc2l6ZTogMC42N2VtO1xufVxuLnFsLXNub3cgLnFsLWVkaXRvciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4ucWwtc25vdyAucWwtZWRpdG9yIGJsb2NrcXVvdGUge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4ucWwtc25vdyAucWwtZWRpdG9yIGNvZGUsXG4ucWwtc25vdyAucWwtZWRpdG9yIHByZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5xbC1zbm93IC5xbC1lZGl0b3IgcHJlIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4ucWwtc25vdyAucWwtZWRpdG9yIGNvZGUge1xuICBmb250LXNpemU6IDg1JTtcbiAgcGFkZGluZzogMnB4IDRweDtcbn1cbi5xbC1zbm93IC5xbC1lZGl0b3IgcHJlLnFsLXN5bnRheCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzI0MWY7XG4gIGNvbG9yOiAjZjhmOGYyO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi5xbC1zbm93IC5xbC1lZGl0b3IgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlciB7XG4gIGNvbG9yOiAjNDQ0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGhlaWdodDogMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci1sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLWxhYmVsOjpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci1vcHRpb25zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLW9wdGlvbnMgLnFsLXBpY2tlci1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZXhwYW5kZWQgLnFsLXBpY2tlci1sYWJlbCB7XG4gIGNvbG9yOiAjY2NjO1xuICB6LWluZGV4OiAyO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1leHBhbmRlZCAucWwtcGlja2VyLWxhYmVsIC5xbC1maWxsIHtcbiAgZmlsbDogI2NjYztcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZXhwYW5kZWQgLnFsLXBpY2tlci1sYWJlbCAucWwtc3Ryb2tlIHtcbiAgc3Ryb2tlOiAjY2NjO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1leHBhbmRlZCAucWwtcGlja2VyLW9wdGlvbnMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgdG9wOiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuLnFsLXNub3cgLnFsLWNvbG9yLXBpY2tlcixcbi5xbC1zbm93IC5xbC1pY29uLXBpY2tlciB7XG4gIHdpZHRoOiAyOHB4O1xufVxuLnFsLXNub3cgLnFsLWNvbG9yLXBpY2tlciAucWwtcGlja2VyLWxhYmVsLFxuLnFsLXNub3cgLnFsLWljb24tcGlja2VyIC5xbC1waWNrZXItbGFiZWwge1xuICBwYWRkaW5nOiAycHggNHB4O1xufVxuLnFsLXNub3cgLnFsLWNvbG9yLXBpY2tlciAucWwtcGlja2VyLWxhYmVsIHN2Zyxcbi5xbC1zbm93IC5xbC1pY29uLXBpY2tlciAucWwtcGlja2VyLWxhYmVsIHN2ZyB7XG4gIHJpZ2h0OiA0cHg7XG59XG4ucWwtc25vdyAucWwtaWNvbi1waWNrZXIgLnFsLXBpY2tlci1vcHRpb25zIHtcbiAgcGFkZGluZzogNHB4IDBweDtcbn1cbi5xbC1zbm93IC5xbC1pY29uLXBpY2tlciAucWwtcGlja2VyLWl0ZW0ge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBwYWRkaW5nOiAycHggNHB4O1xufVxuLnFsLXNub3cgLnFsLWNvbG9yLXBpY2tlciAucWwtcGlja2VyLW9wdGlvbnMge1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICB3aWR0aDogMTUycHg7XG59XG4ucWwtc25vdyAucWwtY29sb3ItcGlja2VyIC5xbC1waWNrZXItaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDJweDtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTZweDtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXI6bm90KC5xbC1jb2xvci1waWNrZXIpOm5vdCgucWwtaWNvbi1waWNrZXIpIHN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTlweDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMThweDtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWxbZGF0YS1sYWJlbF06bm90KFtkYXRhLWxhYmVsPScnXSk6OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWxhYmVsW2RhdGEtbGFiZWxdOm5vdChbZGF0YS1sYWJlbD0nJ10pOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1sYWJlbFtkYXRhLWxhYmVsXTpub3QoW2RhdGEtbGFiZWw9JyddKTo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtbGFiZWxdOm5vdChbZGF0YS1sYWJlbD0nJ10pOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1pdGVtW2RhdGEtbGFiZWxdOm5vdChbZGF0YS1sYWJlbD0nJ10pOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1pdGVtW2RhdGEtbGFiZWxdOm5vdChbZGF0YS1sYWJlbD0nJ10pOjpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIge1xuICB3aWR0aDogOThweDtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWw6OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogJ05vcm1hbCc7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9XCIxXCJdOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjFcIl06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdIZWFkaW5nIDEnO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPVwiMlwiXTo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XCIyXCJdOjpiZWZvcmUge1xuICBjb250ZW50OiAnSGVhZGluZyAyJztcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1cIjNcIl06OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiM1wiXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ0hlYWRpbmcgMyc7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9XCI0XCJdOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjRcIl06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdIZWFkaW5nIDQnO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPVwiNVwiXTo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XCI1XCJdOjpiZWZvcmUge1xuICBjb250ZW50OiAnSGVhZGluZyA1Jztcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1cIjZcIl06OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiNlwiXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ0hlYWRpbmcgNic7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjFcIl06OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XCIyXCJdOjpiZWZvcmUge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XCIzXCJdOjpiZWZvcmUge1xuICBmb250LXNpemU6IDEuMTdlbTtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiNFwiXTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjVcIl06OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMC44M2VtO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XCI2XCJdOjpiZWZvcmUge1xuICBmb250LXNpemU6IDAuNjdlbTtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCB7XG4gIHdpZHRoOiAxMDhweDtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWxhYmVsOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiAnU2FucyBTZXJpZic7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPXNlcmlmXTo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPXNlcmlmXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1NlcmlmJztcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9bW9ub3NwYWNlXTo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPW1vbm9zcGFjZV06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdNb25vc3BhY2UnO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPXNlcmlmXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFRpbWVzIE5ldyBSb21hbiwgc2VyaWY7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9bW9ub3NwYWNlXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IE1vbmFjbywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSB7XG4gIHdpZHRoOiA5OHB4O1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItbGFiZWw6OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdOb3JtYWwnO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1zbWFsbF06OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1zbWFsbF06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdTbWFsbCc7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPWxhcmdlXTo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPWxhcmdlXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ0xhcmdlJztcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9aHVnZV06OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1odWdlXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ0h1Z2UnO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPXNtYWxsXTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPWxhcmdlXTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPWh1Z2VdOjpiZWZvcmUge1xuICBmb250LXNpemU6IDMycHg7XG59XG4ucWwtc25vdyAucWwtY29sb3ItcGlja2VyLnFsLWJhY2tncm91bmQgLnFsLXBpY2tlci1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5xbC1zbm93IC5xbC1jb2xvci1waWNrZXIucWwtY29sb3IgLnFsLXBpY2tlci1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbi5xbC10b29sYmFyLnFsLXNub3cge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5xbC10b29sYmFyLnFsLXNub3cgLnFsLWZvcm1hdHMge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4ucWwtdG9vbGJhci5xbC1zbm93IC5xbC1waWNrZXItbGFiZWwge1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5xbC10b29sYmFyLnFsLXNub3cgLnFsLXBpY2tlci1vcHRpb25zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4yKSAwIDJweCA4cHg7XG59XG4ucWwtdG9vbGJhci5xbC1zbm93IC5xbC1waWNrZXIucWwtZXhwYW5kZWQgLnFsLXBpY2tlci1sYWJlbCB7XG4gIGJvcmRlci1jb2xvcjogI2NjYztcbn1cbi5xbC10b29sYmFyLnFsLXNub3cgLnFsLXBpY2tlci5xbC1leHBhbmRlZCAucWwtcGlja2VyLW9wdGlvbnMge1xuICBib3JkZXItY29sb3I6ICNjY2M7XG59XG4ucWwtdG9vbGJhci5xbC1zbm93IC5xbC1jb2xvci1waWNrZXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkLFxuLnFsLXRvb2xiYXIucWwtc25vdyAucWwtY29sb3ItcGlja2VyIC5xbC1waWNrZXItaXRlbTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDtcbn1cbi5xbC10b29sYmFyLnFsLXNub3cgKyAucWwtY29udGFpbmVyLnFsLXNub3cge1xuICBib3JkZXItdG9wOiAwcHg7XG59XG4ucWwtc25vdyAucWwtdG9vbHRpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICNkZGQ7XG4gIGNvbG9yOiAjNDQ0O1xuICBwYWRkaW5nOiA1cHggMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5xbC1zbm93IC5xbC10b29sdGlwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlZpc2l0IFVSTDpcIjtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLnFsLXNub3cgLnFsLXRvb2x0aXAgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgd2lkdGg6IDE3MHB4O1xufVxuLnFsLXNub3cgLnFsLXRvb2x0aXAgYS5xbC1wcmV2aWV3IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLnFsLXNub3cgLnFsLXRvb2x0aXAgYS5xbC1hY3Rpb246OmFmdGVyIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbiAgY29udGVudDogJ0VkaXQnO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuLnFsLXNub3cgLnFsLXRvb2x0aXAgYS5xbC1yZW1vdmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdSZW1vdmUnO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLnFsLXNub3cgLnFsLXRvb2x0aXAgYSB7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuLnFsLXNub3cgLnFsLXRvb2x0aXAucWwtZWRpdGluZyBhLnFsLXByZXZpZXcsXG4ucWwtc25vdyAucWwtdG9vbHRpcC5xbC1lZGl0aW5nIGEucWwtcmVtb3ZlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5xbC1zbm93IC5xbC10b29sdGlwLnFsLWVkaXRpbmcgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5xbC1zbm93IC5xbC10b29sdGlwLnFsLWVkaXRpbmcgYS5xbC1hY3Rpb246OmFmdGVyIHtcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gIGNvbnRlbnQ6ICdTYXZlJztcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLnFsLXNub3cgLnFsLXRvb2x0aXBbZGF0YS1tb2RlPWxpbmtdOjpiZWZvcmUge1xuICBjb250ZW50OiBcIkVudGVyIGxpbms6XCI7XG59XG4ucWwtc25vdyAucWwtdG9vbHRpcFtkYXRhLW1vZGU9Zm9ybXVsYV06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiRW50ZXIgZm9ybXVsYTpcIjtcbn1cbi5xbC1zbm93IC5xbC10b29sdGlwW2RhdGEtbW9kZT12aWRlb106OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiRW50ZXIgdmlkZW86XCI7XG59XG4ucWwtc25vdyBhIHtcbiAgY29sb3I6ICMwNmM7XG59XG4ucWwtY29udGFpbmVyLnFsLXNub3cge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/show-article/show-article.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/show-article/show-article.component.ts ***!
    \********************************************************/

  /*! exports provided: ShowArticleComponent */

  /***/
  function srcAppShowArticleShowArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowArticleComponent", function () {
      return ShowArticleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_blog_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/blog-post.service */
    "./src/app/services/blog-post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_article_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/article.model */
    "./src/app/models/article.model.ts");

    var ShowArticleComponent = /*#__PURE__*/function () {
      function ShowArticleComponent(_blogPostService, _route, _router) {
        _classCallCheck(this, ShowArticleComponent);

        this._blogPostService = _blogPostService;
        this._route = _route;
        this._router = _router;
        this.isLiked = false;
        this.isDisliked = false;
      } // views: User[] = [];


      _createClass(ShowArticleComponent, [{
        key: "like",
        value: function like() {
          var _this7 = this;

          this.isLiked = true;
          this.isDisliked = false;

          this._blogPostService.likeArticle(this.slug).subscribe(function (res) {
            return console.log(res);
          }, function (err) {
            if (err.status !== 200) {
              console.log(err);

              _this7._router.navigate(['/articles']);
            }
          });
        }
      }, {
        key: "nonlike",
        value: function nonlike() {
          var _this8 = this;

          this.isLiked = false;

          this._blogPostService.nonlikeArticle(this.slug).subscribe(function (res) {
            return console.log(res);
          }, function (err) {
            if (err.status !== 200) {
              console.log(err.message);

              _this8._router.navigate(['/articles']);
            }
          });
        }
      }, {
        key: "dislike",
        value: function dislike() {
          var _this9 = this;

          this.isDisliked = true;
          this.isLiked = false;

          this._blogPostService.dislikeArticle(this.slug).subscribe(function (res) {
            return console.log(res);
          }, function (err) {
            if (err.status !== 200) {
              console.log(err.message);

              _this9._router.navigate(['/articles']);
            }
          });
        }
      }, {
        key: "nondislike",
        value: function nondislike() {
          var _this10 = this;

          this.isDisliked = false;

          this._blogPostService.nondislikeArticle(this.slug).subscribe(function (res) {
            return console.log(res);
          }, function (err) {
            if (err.status !== 200) {
              console.log(err.message);

              _this10._router.navigate(['/articles']);
            }
          });
        }
      }, {
        key: "showViews",
        value: function showViews() {
          this.viewsSheet.nativeElement.style.bottom = "0px";
          this.likesSheet.nativeElement.style.bottom = "-100%";
          this.dislikesSheet.nativeElement.style.bottom = "-100%";
        }
      }, {
        key: "showLikes",
        value: function showLikes() {
          this.viewsSheet.nativeElement.style.bottom = "-100%";
          this.likesSheet.nativeElement.style.bottom = '0px';
          this.dislikesSheet.nativeElement.style.bottom = "-100%";
        }
      }, {
        key: "showDislikes",
        value: function showDislikes() {
          this.viewsSheet.nativeElement.style.bottom = "-100%";
          this.likesSheet.nativeElement.style.bottom = "-100%";
          this.dislikesSheet.nativeElement.style.bottom = "0px";
        }
      }, {
        key: "close",
        value: function close() {
          this.viewsSheet.nativeElement.style.bottom = "-100%";
          this.likesSheet.nativeElement.style.bottom = "-100%";
          this.dislikesSheet.nativeElement.style.bottom = "-100%";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this._route.paramMap.subscribe(function (params) {
            var s = params.get('slug');
            _this11.slug = s;

            _this11._blogPostService.getArticle(_this11.slug).subscribe(function (res) {
              if (res === null) {
                _this11._router.navigate(['**']);
              } else {
                _this11.isAuthor = res.isAuthor;

                if (res.isAuthor) {
                  _this11.article = new _models_article_model__WEBPACK_IMPORTED_MODULE_4__["Article"]().deserialize(res.article);
                } else {
                  _this11.article = res.article;
                }

                if (_this11.article.likes.includes(res.userId)) {
                  _this11.isLiked = true;
                } else if (_this11.article.dislikes.includes(res.userId)) {
                  _this11.isDisliked = true;
                }
              }
            }, function (err) {
              if (err.status === 404) {
                _this11._router.navigate(['**']);
              } else {
                _this11._router.navigate(['/articles']);
              }
            }); // this.link = "https://api.whatsapp.com/send?text="+"https://localhost:4200/articles/"+this.slug;


            _this11.link = "https://api.whatsapp.com/send?text=" + "https://intense-bastion-49490.herokuapp.com/articles/" + _this11.slug;
          });
        }
      }]);

      return ShowArticleComponent;
    }();

    ShowArticleComponent.ctorParameters = function () {
      return [{
        type: _services_blog_post_service__WEBPACK_IMPORTED_MODULE_2__["BlogPostService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('viewsSheet', {
      "static": false
    })], ShowArticleComponent.prototype, "viewsSheet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('likesSheet', {
      "static": false
    })], ShowArticleComponent.prototype, "likesSheet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dislikesSheet', {
      "static": false
    })], ShowArticleComponent.prototype, "dislikesSheet", void 0);
    ShowArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-show-article',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./show-article.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/show-article/show-article.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./show-article.component.css */
      "./src/app/show-article/show-article.component.css"))["default"]]
    })], ShowArticleComponent);
    /***/
  },

  /***/
  "./src/app/validators/password.validator.ts":
  /*!**************************************************!*\
    !*** ./src/app/validators/password.validator.ts ***!
    \**************************************************/

  /*! exports provided: PasswordValidator */

  /***/
  function srcAppValidatorsPasswordValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordValidator", function () {
      return PasswordValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function PasswordValidator(control) {
      var password = control.get('password');
      var cnfrmpswd = control.get('confirmPassword');
      if (password.pristine || cnfrmpswd.pristine) return null;
      return password && cnfrmpswd && password.value !== cnfrmpswd.value ? {
        'misMatch': true
      } : null;
    }
    /***/

  },

  /***/
  "./src/app/validators/username.validator.ts":
  /*!**************************************************!*\
    !*** ./src/app/validators/username.validator.ts ***!
    \**************************************************/

  /*! exports provided: forbiddenNameValidator, allowedNameValidator */

  /***/
  function srcAppValidatorsUsernameValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "forbiddenNameValidator", function () {
      return forbiddenNameValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "allowedNameValidator", function () {
      return allowedNameValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function forbiddenNameValidator(forbiddenName) {
      return function (control) {
        var forbidden = forbiddenName.test(control.value);
        return forbidden ? {
          'forbiddenName': {
            value: control.value
          }
        } : null;
      };
    }

    function allowedNameValidator(allowedName) {
      return function (control) {
        var forbidden = allowedName.test(control.value);
        return forbidden ? null : {
          'allowedName': {
            value: control.value
          }
        };
      };
    }
    /***/

  },

  /***/
  "./src/app/waves-button/waves-button.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/waves-button/waves-button.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWavesButtonWavesButtonComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button.waves-effect{\r\n    background-color: #007bff;\r\n    color: white;\r\n    padding: 0.5rem 1rem;\r\n    border: none;\r\n    border-radius: 0.3rem;\r\n    font-size: 1rem;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: 0.3s ease-out;\r\n    letter-spacing: 0.5px;\r\n    text-decoration: none;\r\n}\r\n\r\nspan.waves-ripple {\r\n    position: absolute;\r\n    background-color: #f8f9fa;\r\n    /* background-color: rgb(244, 67, 54); */\r\n    transform: translate(-50%, -50%);\r\n    border-radius: 50%;\r\n    -webkit-animation: waves-ripple 0.5s ease-in-out infinite;\r\n            animation: waves-ripple 0.5s ease-in-out infinite;\r\n    pointer-events: none;\r\n    outline: none;\r\n}\r\n\r\n@-webkit-keyframes waves-ripple {\r\n    0% {\r\n        width: 0px;\r\n        height: 0px;\r\n        opacity: 0.6;\r\n    }\r\n    100% {\r\n        width: 45%;\r\n        height: 15%;\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@keyframes waves-ripple {\r\n    0% {\r\n        width: 0px;\r\n        height: 0px;\r\n        opacity: 0.6;\r\n    }\r\n    100% {\r\n        width: 45%;\r\n        height: 15%;\r\n        opacity: 0;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2F2ZXMtYnV0dG9uL3dhdmVzLWJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsd0NBQXdDO0lBQ3hDLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIseURBQWlEO1lBQWpELGlEQUFpRDtJQUNqRCxvQkFBb0I7SUFDcEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7SUFDZDtBQUNKOztBQVhBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC93YXZlcy1idXR0b24vd2F2ZXMtYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ud2F2ZXMtZWZmZWN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnNwYW4ud2F2ZXMtcmlwcGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCA2NywgNTQpOyAqL1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBhbmltYXRpb246IHdhdmVzLXJpcHBsZSAwLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHdhdmVzLXJpcHBsZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIGhlaWdodDogMTUlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/waves-button/waves-button.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/waves-button/waves-button.component.ts ***!
    \********************************************************/

  /*! exports provided: WavesButtonComponent */

  /***/
  function srcAppWavesButtonWavesButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WavesButtonComponent", function () {
      return WavesButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WavesButtonComponent = /*#__PURE__*/function () {
      function WavesButtonComponent() {
        _classCallCheck(this, WavesButtonComponent);

        this.spanstyle = {
          left: '',
          top: ''
        };
        this.buttonClicked = false;
      }

      _createClass(WavesButtonComponent, [{
        key: "spanStyle",
        value: function spanStyle() {
          return this.spanstyle;
        }
      }, {
        key: "waveEffect",
        value: function waveEffect(e) {
          var _this12 = this;

          var x = e.clientX - e.target.offsetLeft;
          var y = e.clientY - e.target.offsetTop;
          this.spanstyle.left = x + '';
          this.spanstyle.top = y + '';
          this.buttonClicked = true;
          setTimeout(function () {
            _this12.buttonClicked = false;
          }, 500);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WavesButtonComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('waveEffectButton', {
      "static": false
    })], WavesButtonComponent.prototype, "waveBtn", void 0);
    WavesButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-waves-button',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./waves-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/waves-button/waves-button.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./waves-button.component.css */
      "./src/app/waves-button/waves-button.component.css"))["default"]]
    })], WavesButtonComponent);
    /***/
  },

  /***/
  "./src/app/wild-card/wild-card.component.css":
  /*!***************************************************!*\
    !*** ./src/app/wild-card/wild-card.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWildCardWildCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wildcard {\r\n    line-height: 1.2;\r\n    font-weight: 300;\r\n    font-size: 2.2rem;\r\n}\r\n\r\n.link {\r\n    font-size: 1.1rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .wildcard {\r\n        font-size: 4rem;\r\n    }\r\n\r\n    .link {\r\n        font-size: 1.25rem;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lsZC1jYXJkL3dpbGQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3dpbGQtY2FyZC93aWxkLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWxkY2FyZCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAud2lsZGNhcmQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubGluayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/wild-card/wild-card.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/wild-card/wild-card.component.ts ***!
    \**************************************************/

  /*! exports provided: WildCardComponent */

  /***/
  function srcAppWildCardWildCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WildCardComponent", function () {
      return WildCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WildCardComponent = /*#__PURE__*/function () {
      function WildCardComponent() {
        _classCallCheck(this, WildCardComponent);
      }

      _createClass(WildCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WildCardComponent;
    }();

    WildCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wild-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wild-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wild-card/wild-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wild-card.component.css */
      "./src/app/wild-card/wild-card.component.css"))["default"]]
    })], WildCardComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: true,
      host: ""
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Mean Stack Blog Website\angular-Frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map