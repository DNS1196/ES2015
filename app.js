
// function filterOutOdds() {
// 	var nums = Array.prototype.slice.call(arguments);
// 	return nums.filter(function (num) {
// 		return num % 2 === 0
// 	});
// }

const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

const findMin = (...nums) => Math.min(...nums)

const mergeObjects = (firstObj, secondObj) => ({ ...firstObj, ...secondObj })

const doubleAndReturnArgs = (arr, ...args) => ([...arr, ...args.map(n => n * 2)])

const removeRandom = (items) => {
	let i = Math.floor(Math.random() * items.length);
	return [...items.slice(0, i), ...items.slice(i + 1)]
}

const extend = (arr1, arr2) => ([...arr1, ...arr2])

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val })

const removeKey = (obj, key) => {
	({ [key]: undefined, ...obj } = obj);
	return obj;
}

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 })

const update = (obj, key, val) => ({ ...obj, [key]: val })