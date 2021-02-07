(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <div class=\"circle circle1\"></div>\n\n  <div class=\"container\">\n    <ion-icon name=\"person-circle-outline\" color=\"light\"></ion-icon>\n    <ion-item lines=\"none\" class=\"ion-text-center ion-margin itemDesign\">\n      <ion-input placeholder=\"Email\" type=\"text\" clearInput=\"true\"></ion-input>\n    </ion-item>    \n    <ion-item lines=\"none\" class=\"ion-text-center ion-margin itemDesign\">\n      <ion-input placeholder=\"Password\" type=\"password\" clearInput=\"true\"></ion-input>\n    </ion-item>\n  </div>\n\n  <div class=\"circle circle2\"></div>\n\n  <div class=\"align ion-text-center\">\n    <ion-button expand=\"block\" shape=\"round\" color=\"light\">Login</ion-button>\n    <ion-text color=\"light\"><p>Forgot Password?</p></ion-text>\n    <ion-row>\n      <ion-col size=\"3\"><ion-icon name=\"logo-facebook\" color=\"primary\"></ion-icon></ion-col>\n      <ion-col size=\"3\"><ion-icon name=\"logo-google\" color=\"danger\"></ion-icon></ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::-webkit-scrollbar, *::-webkit-scrollbar {\n  display: none;\n  overflow: hidden;\n}\n\nion-content {\n  overflow: hidden;\n  --overflow: hidden;\n}\n\n.scroll-content {\n  overflow: hidden;\n}\n\n.circle {\n  height: 600px;\n  width: 600px;\n  background: linear-gradient(90deg, var(--ion-color-secondary) 0%, var(--ion-color-primary) 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  border-radius: 50%;\n}\n\n.circle1 {\n  margin-left: -200px;\n  margin-top: -255px;\n  margin-bottom: 10px;\n}\n\n.circle2 {\n  margin-left: -15px;\n  margin-top: -18px;\n}\n\n.container {\n  position: absolute;\n  top: 6vh;\n  left: 9vw;\n  align-items: center;\n}\n\n.itemDesign {\n  border: 1px solid var(--ion-color-light);\n  border-radius: 20px;\n}\n\nion-icon {\n  font-size: 5rem;\n  margin-left: 25vw;\n}\n\n.align {\n  position: absolute;\n  width: 65%;\n  margin: auto;\n  bottom: 8vh;\n  left: 16vw;\n}\n\n.align ion-text {\n  font-size: small;\n}\n\nion-row {\n  margin-left: -8vw;\n}\n\nion-row ion-icon {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0dBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0Usd0NBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFFRjs7QUFERTtFQUNFLGdCQUFBO0FBR0o7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGOztBQURFO0VBQ0UsZUFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXIsICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jaXJjbGUgeyAgXG4gIGhlaWdodDogNjAwcHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAwJSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDEwMCUpO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSg5OCwgMTQwLCAyNTUsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jaXJjbGUxIHtcbiAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcbiAgbWFyZ2luLXRvcDogLTI1NXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2lyY2xlMiB7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgbWFyZ2luLXRvcDogLTE4cHg7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNnZoO1xuICBsZWZ0OiA5dnc7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pdGVtRGVzaWduIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDVyZW07XG4gIG1hcmdpbi1sZWZ0OiAyNXZ3O1xufVxuXG4uYWxpZ24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm90dG9tOiA4dmg7XG4gIGxlZnQ6IDE2dnc7XG4gIGlvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICB9XG59XG5cbmlvbi1yb3cge1xuICBtYXJnaW4tbGVmdDogLTh2dztcbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HomePage = function HomePage() {
        _classCallCheck(this, HomePage);
      };

      HomePage.ctorParameters = function () {
        return [];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map