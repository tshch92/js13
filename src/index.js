const cacheLength = 10;

//это функция проверки равенства массивов

function arraysMatch(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((element, i) => element === arr2[i]);
}

//HOMEWORK
//это функция, которая принимает функцию в качестве аргумента и записывает ёё аргументы и результаты выполнения в Мап
//если такие аргументы уже есть в Мапе, то она вернёт соответствующий им value (ничего заново не вычисляя)

function myCache(callback) {
    const cache = new Map();

    return function (...args) {
        if (!cache.has(callback)) {
            cache.set(callback, new Map());
        }

        const cachedFunction = cache.get(callback);

        //если такие ключи уже были, то вернем их значение

        for (const key of cachedFunction.keys()) {
            if (arraysMatch(args, key)) {
                return cachedFunction.get(key);
            }
        }

        const result = callback(...args);

        //чтобы в Мапе всегда было не более 10 записей, я удаляю самую старую (самую первую)

        if (cachedFunction.size + 1 > cacheLength) {
            const currentKeys = cachedFunction.keys();
            for (const k of currentKeys) {
                cachedFunction.delete(k);
                break;
            }
        }

        cachedFunction.set(args, result);

        return cache;
    };
}

// это что-нибудь для теста
function sum(a, b) {
    return a + b;
}

/*function factorial(a, result = 1) {
    if (a === 1) {
        return result;
    }

    return factorial(a - 1, result * a);
}*/

const example = myCache(sum);

// я хочу заполнить свой Мап для теста; если не делать через константу ffs - то линтер недоволен
const ffs = 13;

for (let i = 1; i <= ffs; i++) {
    example(i, i);
}

//example(5, 5);

//example(11, 11);
