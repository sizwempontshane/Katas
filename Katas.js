//* hello*//

function hello(name){
    console.log(("Hello "+name));
}
hello("Tshepo");


//* hello*//


//*evenOrodd*//

function evenOrOdd(num){
    if (num % 2==0){
             console.log("even");
    }else{
             console.log("odd");
    }
    
    }
    
    evenOrOdd(2)


//*evenOrodd*//


//*square*//


function square(num){
    str = "#"
    strRow = str.repeat(num) + "\n"
    return strRow.repeat(num)
}
console.log(square(2))


//*square*//


//*triangle*//

function triangle(num){

    for(i= 0; i<num; i++)
    {
         for (j = 0; j<=i; j++)
         {
              console.log("#")
              break;
         }
         
    }
}
triangle(2);


//*triangle*//


//*isoscele*//
//*isoscele*//



//*longest*//


function longest(ln=[]) {
    var arr= [];
    var str = "";
    arr.push(ln[0]);
  
    for (var i = 1; i<ln.length; i++) {
      if (ln[i].length> arr[0].length) {
        lngst = ln[i];
        arr= [];
        arr.push(ln[i]);
      } else {
        if(arr[0].length == ln[i].length) {
          arr.push(ln[i]);
        }
  
    }
  }
  
  for (var a=0; a<=arr.length-1; a++) {
          str+=(arr[a] + " ");
  }
  
  }
  
  console.log(ln=["the","quick","brown", "fox", "ate", "my", "chickens"])


//*longest*//


//*combine*//


let A1 = [11,22,33];
let A2 = [1,2,3];

function combine(A1,A2)
{
  let l = A1.length+A2.length;

  let r = [];

  let j=0,k=0;

  for(let i=0; i<l;i++) {

    if(i%2==0) {

      r[i]=A1[j++];
    } else {
      
      r[i]=A2[k++];
    }
  }
  return r;
}

console.log(combine(A1,A2));

//*combine*//


//*frame*//

function printFrame(arr) {
    function fill (str, length, char) {
        return (str.length < length) ? fill(str + char, length, char) : str;
    }

    let size = arr.map((str) => {
            return str.length;
})
.reduce((a, b) => {
        return Math.max(a, b);
});

    let line = fill('', size + 4, '*');

    arr = arr.map((element) => {
            return '* '+ fill(element, size, ' ') + ' *';
})
    arr.unshift(line);
    arr.push(line);

    return arr.join('\n');;
}

console.log(printFrame(["Write","good","code","every","day"]));


//*frame*//