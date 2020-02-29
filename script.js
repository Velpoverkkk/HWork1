/*var a=100;
console.log(a);
console.info(a+10);
console.warn(a);
console.error(a);

document.write(a);

alert(a-59);
confirm('Кокой-то вопрос?');
prompt("1 more q?");
*/
/*document.getElementById("elem");
document.getElementsByClassName(" ");
document.getElementsByTagName(" ")
document.querySelector(".className")
.document.querySelectorAll(".itemcClass")
*/
/*var allLinks = document.links;

for(var i=0 ; i<7 ;i++){
    var itemLink = document.createTextNode(allLinks[i].href);
    var newBreak = document.createElement('br');
    document.body.appendChild(itemLink);
    document.body.appendChild(newBreak);
}*/

function btn1 () {
     location.href = 'https://www.onliner.by/' 
}

function btn2 () {
    document.body.className='container2';
}

function btn3 () {
    document.body.innerHTML = ''

    var newbox = document.createElement('div')
    var newbox1 = document.createElement('div')
    var newbox2 = document.createElement('div')
    document.body.classList.add('box');
    newbox.innerHTML = '1'
    newbox1.innerHTML = '2'
    newbox2.innerHTML = '3'
    document.body.appendChild(newbox)
    document.body.appendChild(newbox1)
    document.body.appendChild(newbox2)
}
 var a=0,n=0, t=-100;
 var term = {
    Belar:10,
    Russ:20,
    Pol:30,
    Ukr:5
}
function btn4 (){
console.log(term);
for(key in term){
    a+=term[key];
    n++;
}
console.log(a/n);
alert("Средняя температура :" + a/n );

}

function maxtemp (term){
    for(key in term){
        if(t<term[key]){
            t=term[key]
        }
    }
    return(t);
}
function btn5 (){
    console.log(maxtemp(term));
    alert("Максимальная температура : " + maxtemp(term));
}