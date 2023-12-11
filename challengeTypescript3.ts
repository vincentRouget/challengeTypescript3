import * as assert from 'assert';

class BankCustomer {

    private nameClient: string;
    private secretCode: string;

    constructor(nameClient: string, secretCode: string) {
        this.nameClient = nameClient;
        this.secretCode = secretCode;
    }

    public getName(): string {
        return this.nameClient;
    }
    public verifyPinInput(codeInput: string): boolean {
        if (codeInput === this.secretCode) {
            return true;
        } else {
            return false;
        };
    }
};

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));