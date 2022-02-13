'use strict';
import { testCaseArr } from './test-case.array.js';

function calculateMinimumAmountOfCandies(i, scores, currentChildScore, candiesGiven) {
  let minimumAmount = 1;
  candiesGiven += 1;
  const info = { i, candiesGiven, minimumAmount };
  i++;
  for (; i < scores.length; i++) {
    if (scores[i] >= currentChildScore) {
      return info;
    }

    minimumAmount++;
    info.i = i;
    info.minimumAmount = minimumAmount;
    info.candiesGiven += minimumAmount;

    currentChildScore = scores[i];
  }
  return info;
}

function candies(n, arr) {
  let candiesGiven = arr[0] > arr[1] ? 2 : 1;
  let previousCandiesGivenAmount = candiesGiven;

  let i = 1;
  for (; i < n - 1; i++) {
    const previousChildScore = arr[i - 1];
    const currentChildScore = arr[i];
    const nextChildScore = arr[i + 1];

    if (currentChildScore > previousChildScore) {
      const candiesAmount = previousCandiesGivenAmount + 1;
      candiesGiven += candiesAmount;
      previousCandiesGivenAmount = candiesAmount;
      continue;
    }

    if (currentChildScore <= nextChildScore) {
      candiesGiven += 1;
      previousCandiesGivenAmount = 1;
      continue;
    }

    if (previousChildScore === currentChildScore) {
      const info = calculateMinimumAmountOfCandies(i, arr, currentChildScore, candiesGiven);
      candiesGiven = info.candiesGiven;
      i = info.i;
      previousCandiesGivenAmount = 1;
      continue;
    }

    const maximumAmount = previousCandiesGivenAmount;

    const info = calculateMinimumAmountOfCandies(i, arr, currentChildScore, candiesGiven);
    candiesGiven = info.candiesGiven;
    i = info.i;
    previousCandiesGivenAmount = 1;

    if (info.minimumAmount < maximumAmount) continue;

    candiesGiven += info.minimumAmount - maximumAmount + 1;
  }

  i < n && (candiesGiven += arr[n - 1] > arr[n - 2] ? previousCandiesGivenAmount + 1 : 1);

  return candiesGiven;
}

// Expected Output: 33556
console.log(candies(testCaseArr.length, testCaseArr));
