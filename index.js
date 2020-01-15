function findMinAndRemove(array){
  let min = array[0]
  array.forEach(element => {
    if (element < min) {
      min = element
      array.splice(indexOf(element))
    } 
  })
  return min

}

function insertionSort(array){

}
