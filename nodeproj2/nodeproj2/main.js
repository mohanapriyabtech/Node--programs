"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var quantity = 30;

var product = function product(name, price) {
    console.log(name, price);
};
var totalsale = function totalsale(quantity, price) {
    console.log(quantity * price);
};
exports.quantity = quantity;
exports.product = product;
exports.totalsale = totalsale;