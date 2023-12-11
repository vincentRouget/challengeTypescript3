"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var BankCustomer = /** @class */ (function () {
    function BankCustomer(nameClient, secretCode) {
        this.nameClient = nameClient;
        this.secretCode = secretCode;
    }
    BankCustomer.prototype.getName = function () {
        return this.nameClient;
    };
    BankCustomer.prototype.verifyPinInput = function (codeInput) {
        if (codeInput === this.secretCode) {
            return true;
        }
        else {
            return false;
        }
        ;
    };
    return BankCustomer;
}());
;
var customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
console.log("Tout est passé?");
