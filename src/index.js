const cacheLength = 10;

//это функция проверки равенства массивов

function arraysMatch(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((element, i) => element === arr2[i]);
}

//HOMEWORK
//это функция, которая принимает функцию в качестве аргумента, потом записывает её результаты выполнения в Мап
//если такие аргументы уже есть в Мапе, то она вернёт соответствующий им value (ничего заново не вычисляя)

function myCache(callback) {
    const cache = new Map();

    return function (...args) {
        //если такие ключи уже были, то вернем их значение

        for (const key of cache.keys()) {
            if (arraysMatch(args, key)) {
                return cache.get(key);
            }
        }

        const result = callback(...args);

        //как-то по-нормальному сделать не получилось

        if (cache.size >= cacheLength) {
            const currentKeys = cache.keys();
            for (const k of currentKeys) {
                cache.delete(k);
                break;
            }
        }

        cache.set(args, result);

        return result;
    };
}

// это что-нибудь для теста
function sum(a, b) {
    return a + b;
}

const example = myCache(sum);

// я хочу заполнить свой Мап для теста; если не делать через константу ffs - то линтер недоволен
const ffs = 13;

for (let i = 1; i <= ffs; i++) {
    example(i, i);
}
