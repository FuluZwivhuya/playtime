const sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 6));

/*console.log(value)
getName()

console.log(value)
var value = 'John'

function getName () {
  value = 'Mary'
}*/

/*const value = 50
function value (number) {
    console.log("number is: " + number); //this did not work. somehow function overridesvariable
  }
  */

  

   /* function createPassword() {
        secretHiddenPassword = '2otb732gh24f0'
        console.log("Your password is: " + secretHiddenPassword)
      }
      
      function doSomethingElseNotRelatedToPassword () {
          console.log("I have access to the password in here too: " + secretHiddenPassword)}*/
      
      
      let createPassword = function () {
        let secretHiddenPassword = '2otb732gh24f0'
        console.log("Your password is: " + secretHiddenPassword)
      }
      
      let doSomethingElseNotRelatedToPassword = function () {
          console.log("I have access to the password in here too: " + secretHiddenPassword)
      }