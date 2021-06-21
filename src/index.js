function counter() {

    let acc = 0;

    return function(x) {

      return acc += x;
    };

};

// let a = counter();
// let b = counter();
// console.log(a(7));
// console.log(a(7));
// console.log(b(2));


function c() {

    let acc = 0;
    let base = acc;
    let step = 1;

    return {
        
        count() {

            return acc += step;
        
        },

        setup(newBase, newStep) {

            base = newBase;
            step = newStep;

            console.log(`Initial value is ${base} \nStep value is ${step}`)

            return acc;

        },

        reset() {

            acc = base;

            console.log('Counter has been reset to ' + base + '\nStep is equal ' + step);

            return acc;

        }
    }
};

var z = c();

z.setup(100, 100);
console.log(z.count());
console.log(z.count());
console.log(z.count());
console.log(z.count());
z.reset();
console.log(z.count());
console.log(z.count());