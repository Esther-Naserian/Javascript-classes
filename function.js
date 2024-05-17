function insertElement() {
    let arr = [1, 2, 3, 4, 5];
    let index = 2;
    let element = 10;
 
    arr.splice(index,3,element);
     
    console.log(arr);
}
 
insertElement();

