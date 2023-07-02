// Example: Simulating a delayed delivery
function deliverPackage(address) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const delivered = true;
  
        if (delivered) {
          resolve(`Package delivered to ${address}`);
        } else {
          reject("Package delivery failed");
        }
      }, 3400);
    });
  }
  
  // Using the Promise
  deliverPackage("Address")
    .then((message) => {
      console.log(message); /*    This will take the message when the given condition is true in IF else statement*/
    })
    .catch((error) => {   
      console.error(error); // This will pass an error when the given condition is false
    });
  