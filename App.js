'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({__proto__: []} instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null',
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
exports.__esModule = true;
import React from 'react';
var react_1 = require('react');
var react_redux_1 = require('react-redux');
var store_1 = require('./src/store/store');
var BrowserViewController_1 = require('./src/browser/BrowserViewController');
var react_native_safe_area_context_1 = require('react-native-safe-area-context');
var AppContainer = /** @class */ (function (_super) {
  __extends(AppContainer, _super);
  function AppContainer() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  AppContainer.prototype.render = function () {
    var _a = this.props;
    return (
      <react_native_safe_area_context_1.SafeAreaProvider>
        <react_redux_1.Provider store={store_1.store}>
          <BrowserViewController_1.BrowserViewControllerConnected />
        </react_redux_1.Provider>
      </react_native_safe_area_context_1.SafeAreaProvider>
    );
  };
  return AppContainer;
})(react_1.Component);
exports['default'] = AppContainer;
