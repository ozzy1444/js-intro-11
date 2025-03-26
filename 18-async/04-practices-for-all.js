// AFTER ES6 - using promises with then-catch methods
function gotoAmazon2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let bool = true;
      if (bool) {
        console.log("Amazon is loaded...");
        resolve();
      } else {
        reject("ERROR: Go to amazon FAILED!");
      }
    }, 500);
  });
}

function clickOnLocationHeaderItem2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let bool = true;
      if (bool) {
        console.log("Location header item is clicked...");
        resolve();
      } else {
        reject("Location header item FAILED!");
      }
    }, 200);
  });
}

function validateDialogIsVisible2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let bool = false;
      if (bool) {
        console.log("Dialog is visible...");
        resolve();
      } else {
        reject("Location dialod visibility FAILED!");
      }
    }, 200);
  });
}


function test2() {
  gotoAmazon2()
    .then(() => clickOnLocationHeaderItem2())
    .then(() => validateDialogIsVisible2())
    .catch((err) => console.log(err));
}

// test2();


// AFTER ES6 - using promises with async-await keywords
async function test3() {
  try {
    await gotoAmazon2();
    await clickOnLocationHeaderItem2();
    await validateDialogIsVisible2();
  }
  catch(err) {
    console.log(err);
  }
}

test3(); // ->
// Amazon is loaded...
//Location header item is clicked...
//Location dialod visibility FAILED!