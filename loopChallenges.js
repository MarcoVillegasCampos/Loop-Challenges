
/*
-Print odds 1-20
Using a loop write code that will console.log all of the odd values from 1 up to 20.

-Decreasing Multiples of 3
Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

-Print the sequence
Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

-Sigma
Write code that will add all of the values from 1-100 onto some variable sum and at the 
end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

-Factorial
Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log 
the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
*/


function OddValues(limit) {

    for (i = 1; i < limit; i++)
        if (i % 2 === 1) {
            console.log(i)



        }
}

OddValues(20);

/*-----------------------------------------------------------*/

function divisibleby3(limit) {

    for (i = 1; i < limit; i++)
        if (i % 3 === 0) {
            console.log(i)



        }
}

divisibleby3(100);

/*------------------------------------------------------------*/
function sequence() {

    for (i = 4; i >= -3.5; i -= 1.5) {
        console.log(i);
    }


}

sequence();

/*------------------------------------------------------------*/

function sumValues() {

    for (i = 1; i <= 100; i++ ) {
      sum=0;
      var x= "";

      while( i<=100){
        sum+=i;
        stringNumbers= i.toString
        x+="+"+i;
      i++
      }
    console.log("Sum of Numbers:"+x
   +"is:"+sum);
      
    }




}
sumValues();

/*------------------------------------------------------------*/

function factorial() {

    i=1;
    let product=i;
    var x= "";

    while( i<=12){
      product=product*i
     
      x+="*"+i;
    i++
    }
  console.log("Product of Numbers:"+x
 +"is:"+product);
    
  }





factorial();

