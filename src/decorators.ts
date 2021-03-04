export function sealed(p: string) {
    return function(constr: Function): void {
        console.log(`Sealing the constructor ${p}`);
        Object.seal(constr);
        Object.seal(constr.prototype);
    };
}

export function logger<TFunction extends Function>(constr: TFunction): TFunction {
    const newConstr: Function = function() {
        console.log('creating new instance');
        console.log(constr.name);
        this.age = 30;
    };

    newConstr.prototype = Object.create(constr.prototype);
    newConstr.prototype.printLibararian = function() {
        `Librarian name: ${this.name}, Librarian age: ${this.age}`;
    };

    return newConstr as TFunction;
}

export function writable(isWritable: boolean) {
    return function(target: any, name: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(name);
        console.log(descriptor);

        descriptor.writable = isWritable;
        return descriptor;
    };
}

export function timeout(ms: number = 0) {
    return function(target: any, name: string, descriptor: PropertyDescriptor) {
        const origin = descriptor.value;
        descriptor.value = function(...args: any) {
            setTimeout(()=> {
                origin.apply(this, args);
            }, ms);
        };
    };
}