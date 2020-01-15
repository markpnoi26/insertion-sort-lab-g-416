function findMinAndRemove(array){
  let min = array[0]
  let minIndx = 0
  array.forEach(element => {
    if (element < min) {
      min = element
      minIndx = array.indexOf(element)
    } 
  })
  array.splice(minIndx, 1)
  return min

}

function insertionSort(array){
  let sortedArray = []
  let shortenedArray = array.slice(0)
  while (shortenedArray.length !== 0) {
    sortedArray.push(findMinAndRemove(shortenedArray))
  }
  return sortedArray
}

