class StringBuilder {
    constructor(string) {
        this._value = string;
        
    }
    get value() {
        return this._value;
    }
    append(str) {
        this._value += str;
        return this;
    }
    prepend(str) {
        this._value = str + this._value;
        return this;
    
    }
    pad(str) {
        this._value = str + this._value + str;
        return this;
    }
}

const builder = new StringBuilder('.');


builder.append('^');

console.log(builder.value); // '.^'

builder.prepend('^');

console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

console.log(bui);
builder.append('^');
builder.prepend('^');

// builder.append('^').prepend('^').pad('=');


// console.log(builder.value);