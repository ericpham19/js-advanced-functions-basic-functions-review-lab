// Your code here
function saturdayFun(activity) {
   if (activity === undefined ){
    return "This Saturday, I want to roller-skate!"
   } else 
   return "This Saturday, I want to bathe my dog!"

}

function mondayWork(workActivity) {
    if (workActivity === undefined){
        return "This Monday, I will go to the office.";
    } else {
        return "This Monday, I will work from home.";
    }
}


function wrapAdjective(val1= "*" ){
  return function innerFunction (comment= "a hard worker" ){
     
    
     return `You are ${val1}${comment}${val1}!`;

  }
  
}
  const Calculator = {
    add : function (num1, num2) {
      return num1 + num2;
    },
    subtract : function (num1, num2){
      return num1 - num2;
    },
    multiply : function (num1, num2){
      return num1 * num2;
    },
    divide : function (num1 , num2){
      return num1 / num2;
    }
  
  }
  








  /*describe("defines an object called Calculator", function() {
    it("has a JavaScript Object called Calculator as a local variable", function() {
      expect(Calculator).to.be.a('object')
    })

    describe("that has a function called add", function() {
      it("Calculator.add exists", function() {
        expect(Calculator.add).to.exist
      })

      it("calculates 1 + 3", function() {
        expect(Calculator.add(1,3)).to.equal(4)
      })
    }) */

 


function actionApplyer(x, y) {
  if (y.length  === 0) {
    return x;
  } 
  for (let index = 0; index < y.length; index++) {
     x = y[index] (x)
    
  }
    return x;

}
    
        

        

    /*describe("Defines a function called actionApplyer", function() {
      it("exists", function() {
          expect(actionApplyer).to.exist
      })
  
      describe("receives two arguments: a starting integer and an array of functions", function() {
        it("returns the given starting point, unchanged, when the array is empty", function() {
          expect(actionApplyer(0, [])).to.equal(0)
        })
  
        it("Given 13, returns 4 after being acted on by several functions", function() {
          let message = "13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result"
          arrayOfTransforms = [
            function(a){ return a * 2 },
            function(a){ return a + 1000},
            function(a){ return a % 7 }
          ]
          expect(actionApplyer(13, arrayOfTransforms)).to.equal(4, message)
        })
      })
  
  
    })
  })*/
  
    
