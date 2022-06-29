// My solution

function filter_list(items) {
  // Place to store filtered results
  const filtered = [];

  // iterate over the array
  for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];
    // if the current item is a number
    if (typeof currentItem === "number") {
      // push into filtered results
      filtered.push(currentItem);
    }
  }
  return filtered;
  // return the filtered results
}

function filter_list1(items) {
  // return true if you want new item to be in array
  return items.filter((currentItem) => {
    return typeof currentItem === "number";
  });
}

function filter_list2(l) {
  return l.filter((e) => Number.isInteger(e));
}

console.log(filter_list1([1, 2, "a", "b"]));
