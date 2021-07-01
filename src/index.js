const stone = {
    brand: 'Caesarstone',
    colorGroup: [
        'sand',
        'brown',
        {
            sparkle: true,
        },
    ],
    size: {
        height: 1400,
        width: 3040,
    },
};

function deepFreeze(obj) {
    let newObj = {};

    if (Array.isArray(obj)) {
        newObj = [];
    }

    for (const key in obj) {
        newObj[key] = obj[key];

        if (typeof newObj[key] === 'object') {
            newObj[key] = deepFreeze(newObj[key]);
            Object.freeze(newObj[key]);
        } else {
            Object.defineProperty(newObj, key, {
                writable: false,
                enumerable: false,
                configurable: false,
            });
        }
    }

    return newObj;
}

const example = deepFreeze(stone);
const example2 = stone;

// дальше я добавляю всякие свойства к замороженному и контрольному обьектам, чтобы поосмотреть че будет

example.size.width = null;
example2.size.width = null;

example.size.thick = 30;
example2.size.thick = 20;

//example.colorGroup.push('beige'); //он кинет ошибку что в этот массив нельзя уже запушить
example2.colorGroup.push('beige');

//example.colorGroup[2].marble = false;
//example2.colorGroup[2].marble = false;

//console.log(example);
//console.log(example2);
