/**
 * Hackerrank Challenge - Beautiful Triplets
 */

//	 https://www.hackerrank.com/challenges/beautiful-triplets/problem 

const getTriplets = (n: number, d: number, arr: number[], response: number[]): number[] => {
	if (response.length === 3 || !arr.some(num => d + n === num)) return response;
	response.push(arr.find(num => n + d === num) as number);
	return getTriplets(n + d, d, arr, response);
}
const beautifulTriplets = (d: number, arr: number[]): number => {
	const response: number[][] = [];
	for (; response.length < arr.length - d + 1; response.push(getTriplets(arr[response.length], d, arr, [arr[response.length]])));
	return response.filter(nums => nums.length === 3).length;
};
console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));
console.log(beautifulTriplets(3, [1, 6, 7, 7, 8, 10, 12, 13, 14, 19]));
