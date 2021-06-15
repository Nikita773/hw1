const obj1 = {
    a: 2,
    b: {
        e: 2, f: 2324, g: { h: {k: {l: {m: 24}}}}
    }
}

const obj2 = {
    a: 2,
    b: {
        e: 2, f: 2324, g: { h: {k: {l: {m: 24}}}}
    }
}

function deepCopy(obj) {
    const cloneObj = {}
    for(let i in obj) {
        if (obj[i] instanceof Object) {
            cloneObj[i] = deepCopy(obj[i])
        }
        cloneObj[i] = obj[i]
    }
    return cloneObj
}

const cloneObj = deepCopy(obj1)

console.log(obj1 === cloneObj)
cloneObj.x = 15
console.log(obj1, cloneObj)

function deepEqual (obj1, obj2) {
    for(let key in obj1) {
        if (!obj2.hasOwnProperty(key)) return false
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            const result = deepEqual(obj1[key], obj2[key])
            if (!result) return false
        } else {
            if (obj1[key] !== obj2[key]) return false
        }
    } return true
}

console.log(deepEqual(obj1, obj2))

