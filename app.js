let a=document.getElementById('aksy');
let b=document.querySelector('#enter');
document.querySelector('.aru').style.display='none';
a.addEventListener('submit',showimg1);
function showimg1(e)
{
   
    document.querySelector('.aru').style.display='block';
    
    console.log('hell');
    e.preventDefault();
}
b.addEventListener('paste',cantdo);
function cantdo(e)
{
   
    window.alert('Asshole you cannot paste');
    e.target.value='';
    e.preventDefault();
}