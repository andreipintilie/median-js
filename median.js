// Variables
const group = [10, 14, 12, 18, 16, 20, 22, 40];
const groupInput = document.getElementById('group-input');
const sortedGroupInput = document.getElementById('sorted-group-input');
const groupInputLength = document.getElementById('group-input-length');
const median = document.getElementById('median');

// Functions

const isOdd = (number) => number % 2;

// 1. Rendering the group input

groupInput.textContent = group;

// 2. Sorting the list

const newGroup = group.sort((x, y) => x - y);

sortedGroupInput.textContent = newGroup;

// 3. Checking the length of the list to see if it is odd or even.

groupInputLength.textContent = isOdd(newGroup.length) ? "odd" : "even";

if(isOdd(newGroup.length)){
  median.textContent = newGroup[newGroup.length / 2 | 0];
} else {
  median.textContent = (newGroup[newGroup.length / 2 - 1] + newGroup[newGroup.length / 2]) / 2 | 0;
}
