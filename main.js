
function Changecolor(event)
{ 
    event.preventDefault();
var text=document.getElementById("textarea");
console.log(text.style.textDecoration);
if ( text.style.textDecoration=="underline")
{
    text.style.textDecoration="normal";
}
else
{
  text.style.textDecoration="underline";
}
}
function fold(event)
{
    event.preventDefault();
    var text=document.getElementById("textarea"); 
console.log(text.style.fontWeight);
if(text.style.fontWeight=="bold")
{
    text.style.fontWeight="normal";   
}
else
{
    text.style.fontWeight="bold";   
}
}
function ital(event)
{
    event.preventDefault();
    var text=document.getElementById("textarea"); 
console.log(text.style.fontStyle);
if(text.style.fontStyle=="italic")
{
    text.style.fontStyle="normal";   
}
else
{
    text.style.fontStyle="italic";   
}
}
function police()
{
   var text1=document.getElementById(" selection").value;  
   var text=document.getElementById("textarea");
   text.style.fontSize=text1;
   console.log(text.style.fontSize);
}
function policety()
{
   var text1=document.getElementById(" selection1").value;  
   var text=document.getElementById("textarea");
   text.style.fontFamily=text1;
   console.log(text.style.fontFamily);
}
