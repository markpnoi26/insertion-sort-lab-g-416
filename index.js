function findMinAndRemove(array){
  let min = array[0]
  array.forEach(element => {
    if (element < min) {
      min = element
      array.splice(array.indexOf(element), 1)
    } 
  })
  return min

}

function insertionSort(array){

}
