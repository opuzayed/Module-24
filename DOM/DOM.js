console.log('this is js special file');
function makeBlue()
{
    document.body.style.backgroundColor = 'blue';
}
function makeGreen()
       {
        document.body.style.backgroundColor = 'green';
       }
       const purpleButton = document.getElementById('make-purple');
       purpleButton.onclick = function beautifulPurple(){
       document.body.style.backgroundColor = 'purple';
       }
       const pinkButton = document.getElementById('make-pink');
         pinkButton.addEventListener('click', pinkButtonFunction);
         function pinkButtonFunction()
         {
            document.body.style.backgroundColor = 'pink';
         }