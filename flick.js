
var rawArray = [[1,2,[[3]]],4];
var message= "";
/*Flattens the array entered*/
var flattenArray = function(array){
  if(array.length <= 0 || !(array instanceof Array)){
    message = "Values entered are not valid. Rerun the program."
    return message;
  }
  var flatArray = [];
  //For each loop. Checks for an array in the array.
  array.forEach(function(entry){
    //console.log(entry);
    //Recurses until entry is a number.
    //Returned array containing number is merged with flatArray.
    if(Array.isArray(entry)){
      //console.log("array is found: "+entry);
      flatArray = flatArray.concat(flattenArray(entry));
    }
    //Pushes entry to flatArray if its a number.
    else{
      //console.log(entry+ " has been pushed to flatArray");
      flatArray.push(entry);
    }
  });
  return flatArray;
};
console.log(flattenArray(rawArray));