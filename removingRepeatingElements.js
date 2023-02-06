const arr = [1,1,2,3,3,4,5,5,6,7,8]

function removeNonRepeat(arr){
  const obj = {}

  //Finding the freequecies of the each number
  //and storing in obj  
  for(let i=0;i<arr.length;i++){
    if(arr[i] in obj == false){
      obj[arr[i]] = 1
    }else{
      obj[arr[i]] += 1
    }
  }

  //Deleting elements from obj with value of 1
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === 1) {
      arr.splice(i, 1);
      i--;
    }
  }

  //returning the final array
  return arr
}

let arr2 = removeNonRepeat(arr)
console.log(arr2);