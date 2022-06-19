class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value    
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}


describe("Test group 1", function () {
    it("instantiate", function () {
        let obj = new PaymentPackage("Ivan", 100);
        if (obj === null) {
            throw new Error;
        }
        if (obj.VAT !== 20 || typeof obj.VAT !== "number") {
            throw new Error;
        }
        if (obj.active !== true || typeof obj.active !== "boolean") {
            throw new Error;
        }
    });
    it("instantiate 2", function () {
        let result = "";
        try {
            let obj = new PaymentPackage();
            result = "ok";
        } catch {
            result = "not good";
        }
        if (result === "ok") {
            throw new Error;
        }
    });
    it("instantiate 3", function () {
        let result = "";
        try {
            let obj = new PaymentPackage("Ivan");
            result = "ok";
        } catch {
            result = "not good";
        }
        if (result === "ok") {
            throw new Error;
        }
    });
    it("name getter", function () {
        let obj = new PaymentPackage("Ivan", 100);
        if (obj.name !== "Ivan") {
            throw new Error;
        }
    });
    it("name setter", function () {
        let obj = new PaymentPackage("Ivan", 100);
        obj.name = "Stefan";
        if (obj.name !== "Stefan") {
            throw new Error;
        }
    });
    it("value getter", function () {
        let obj = new PaymentPackage("Ivan", 100);
        if (obj.value !== 100) {
            throw new Error;
        }
    });
    it("value setter", function () {
        let obj = new PaymentPackage("Ivan", 100);
        obj.value = 150;
        if (obj.value !== 150) {
            throw new Error;
        }
    });
    it("VAT getter and setter", function () {
        let obj = new PaymentPackage("Ivan", 100);
        obj.VAT = 1234;
        if (obj.VAT !== 1234) {
            throw new Error;
        }
    });
    it("active getter and setter", function () {
        let obj = new PaymentPackage("Ivan", 100);
        obj.active = true;
        if (obj.active !== true) {
            throw new Error;
        }
    });
    it("toString method", function () {
        let obj = new PaymentPackage("Ivan", 100);
        obj.VAT = 1234;
        obj.active = false;
        let output = [
            `Package: Ivan (inactive)`,
            `- Value (excl. VAT): 100`,
            `- Value (VAT 1234%): 1334`
        ].join("\n");
        if (obj.toString() !== output) {
            throw new Error;
        }
    });
    it("toString method2", function () {
        let obj = new PaymentPackage("Ivan", 100);
        obj.VAT = 1234;
        obj.active = true;
        let output = [
            `Package: Ivan`,
            `- Value (excl. VAT): 100`,
            `- Value (VAT 1234%): 1334`
        ].join("\n");
        if (obj.toString() !== output) {
            throw new Error;
        }
    });
    it("name non-empty string", function () {
        let result = "";
        try {
            let obj = new PaymentPackage("", 100);
            result = "ok";
        } catch {
            result = "not good";
        }
        if (result === "ok") {
            throw new Error;
        }
    });
    it("name non-empty string 2", function () {
        let result = "";
        try {
            let obj = new PaymentPackage("Ivan", 100);
            obj.name = "";
            result = "ok";
        } catch {
            result = "not good";
        }
        if (result === "ok") {
            throw new Error;
        }
    });
    it("value non-negative number", function () {
        let result = "";
        try {
            let obj = new PaymentPackage("Ivan", -100);
            result = "ok";
        } catch {
            result = "not good";
        }
        if (result === "ok") {
            throw new Error;
        }
    });
    it("value non-negative number 2", function () {
        let result = "";
        try {
            let obj = new PaymentPackage("Ivan", 100);
            obj.value = -100;
            result = "ok";
        } catch {
            result = "not good";
        }
        if (result === "ok") {
            throw new Error;
        }
    });
    it("VAT non-negative number", function () {
        let result = "";
        try {
            let obj = new PaymentPackage("Ivan", 100);
            obj.VAT = -1234;
            result = "ok";
        } catch {
            result = "not good";
        }
        if (result === "ok") {
            throw new Error;
        }
    });
    it("active is boolean", function () {
        let result = "";
        try {
            let obj = new PaymentPackage("Ivan", 100);
            obj.active = "true";
            result = "ok";
        } catch {
            result = "not good";
        }
        if (result === "ok") {
            throw new Error;
        }
    });
    it("init", function () {
        let result = "";
        try {
            const hrPack = new PaymentPackage('HR Services');
        } catch (err) {
            result = 'Error: ' + err.message;
        }
        if (result !== "Error: Value must be a non-negative number") {
            throw new Error;
        }
    });
    it("init2", function () {
        let result = "";
        const wrongPack = new PaymentPackage('Transfer Fee', 100);
        try {
            wrongPack.active = null;
        } catch (err) {
            result = 'Error: ' + err.message;
        }
        if(result !== "Error: Active status must be a boolean"){
            throw new Error;
        }
    });
    it("init3", function () {
        const packages = [
            new PaymentPackage('HR Services', 1500),
            new PaymentPackage('Consultation', 800),
            new PaymentPackage('Partnership Fee', 7000),
        ];
        let result = packages.join('\n');

        if(result !== ["Package: HR Services",
            "- Value (excl. VAT): 1500",
            "- Value (VAT 20%): 1800",
            "Package: Consultation",
            "- Value (excl. VAT): 800",
            "- Value (VAT 20%): 960",
            "Package: Partnership Fee",
            "- Value (excl. VAT): 7000",
            "- Value (VAT 20%): 8400"].join("\n")){
                throw new Error;
            }

    });
});
