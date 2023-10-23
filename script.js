console.log("hello guys")
let y="first javacsript try"
alert('hello guys');
let q = 5**2;
console.log(q)
    //  let x = document.getElementById('im').innerText = `${y}`  

     let d = {
        f :34,
        g: 43,
        ff: function mye(num){
            console.log("this is " +num)
        }
     }
  
// console.log(x)
// console.log(im.style.color='blue');

//initilalised with a value  
let red1Div = document.getElementById('red1')  /*for the id red i can also write it as \
   red = document.getElementById()*/
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')
// onclick to get a output of respective
red1.onclick = () => console.log('red1 ')
yellow.onclick = () => console.log('yellow ')
green.onclick = () => console.log('green ')
//queryselectorall selects the all div of given classes and stores them as array 
       const sq = document.querySelectorAll('.red')
// .value is given in the div element which gives 
/*console.log(sq[0].value)   
console.log(sq[1].value)
console.log(sq[2].value)*/
//didnt get
const timesClicked =  {'red1': 0 , 'yellow': 0 ,'green' : 0 }
sq.forEach(sqs => {
    // sqs.onclick = ( ) => {      /* sqs.onclick = ( ) => console.log(sqs.value) */
    //       timesClicked[sqs.value] +=1
    //       sqs.innerText =  timesClicked[sqs.value]
    sqs.onclick = ( )=>  {
        timesClicked[sqs.value] += 1
        sqs.innerText = timesClicked[sqs.value]  
    }
})

function clearscore()
{
    timesClicked.red1 = 0
    timesClicked.yellow  = 0
    timesClicked.green = 0
    sq.forEach(sqs => {
        sqs.innerText = 0
    })
} 
const cg = document.getElementById('clear game')
cg.onclick = ( ) => clearscore()