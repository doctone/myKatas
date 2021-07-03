/* 
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message){
    // create alphabet array
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    // split message into array
    let msgArray = message.split("")
    //map new array with 3 conditions, accounting for non alpha and uppercase elements
    let encryptedMsg = msgArray.map( x => {
      if (!alpha.includes(x.toLowerCase())){
        return x
      }
      else if (x === x.toUpperCase()) {
        return alpha[((alpha.indexOf(x.toLowerCase()))+13)%26].toUpperCase()
      }
      else if (alpha.includes(x)) {
        return alpha[((alpha.indexOf(x))+13)%26]
      }
      }
    )
      return encryptedMsg.join("")
  }