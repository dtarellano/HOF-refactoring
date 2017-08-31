// Get all elements but the Nth

function getAllElementsButNth(array, n) {
  return array.filter(function(value, i) {
    return i !== n;
  });
}

// Write a function called "getElementsThatEqual10AtProperty".
//
// Given an object and a key, "getElementsThatEqual10AtProperty" returns an array containing all the elements of the array located at the given key that are equal to ten.

function getElementsThatEqual10AtProperty(obj, key) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
      return obj[key].filter(function(value) {
        return value === 10;
      });
    }
  return [];
}


// Write a function called "select".
//
// Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array.

function select(arr, obj) {
  var newObj = {};
  arr.forEach(function(value, i) {
      if (obj.hasOwnProperty(arr[i])) {
      newObj[arr[i]] = obj[arr[i]];
    }
  });
  return newObj;
}


// Write a function called "getElementsLessThan100AtProperty".
//
// Given an object and a key, "getElementsLessThan100AtProperty" returns an array containing all the elements of the array located at the given key that are less than 100.


function getElementsLessThan100AtProperty(obj, key) {
  if(obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
    return obj[key].filter(function(value, i) {
      return value < 100;
    });
  }
  return [];
}
