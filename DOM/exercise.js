/*
Ask for the user's name:
Use prompt() to collect the user's name.
If the user provides a name, display a welcome message using alert().
If no name is entered, display an error message in the console and exit.
Ask if they want to continue:
Use confirm() to ask if they want to proceed.
If they confirm, show an alert saying they chose to continue.
If they cancel, show an alert saying they canceled the action.
Log screen details in the console:
Log innerWidth (browser window width).
Log innerHeight (browser window height).
Reload the page after 10 seconds:
Display a message in the console informing the user that the page will reload.
Use setTimeout() with window.location.reload() to refresh the page after 10 seconds.
*/

const promptAns = prompt('Please enter your username')
console.log('promptAns', promptAns)

if(promptAns) {
    alert('Welcome')
    console.log('Welcome', promptAns)
} else {
    alert('Error')
    console.log('(Error) no username entered', promptAns)
}

const confirmAns = confirm('Would you like to continue ?');
console.log('confirmAns', confirmAns);

if(confirmAns){
    alert('you have entered')
    console.log(confirmAns)
} else {
    alert('You have canceled authorization')
    console.log(confirmAns)
}
//<style>
      //  div {
      //    height: 1500px;
      //    width: 500px;
      //    background-color: cadetblue;
      //  }
      //</style>

    


