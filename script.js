var board = document.getElementById('boardInner');
var upperContainer = document.getElementById('numberContainer');
var sideContainer = document.getElementById('letterContainer');
var upperNum=[[1,4,1], [3,4,1], [1,3],[1,1], [3,1], [5],[5,1], [4,1,1], [5,1], [3]]
var sideNum=[[3,5],[1,5],[1,6], [5], [2,4,1], [2,1], [3], [5,1], [1], [2,1,1]]
var result=[1,1,1,0,0,1,1,1,1,1 ,0,1,0,0,0,1,1,1,1,1, 0,1,0,0,1,1,1,1,1,1, 0,0,0,0,1,1,1,1,1,0, 1,1,0,1,1,1,1,0,1,0, 1,1,0,0,0,0,0,1,0,0, 1,1,1,0,0,0,0,0,0,0, 1,1,1,1,1,0,0,1,0,0, 0,0,1,0,0,0,0,0,0,0, 1,1,0,0,0,0,1,0,1,0]
var userInp=[]
for(var i =0;i<100;i++){
    userInp.push(0)
}
const renderBoard1 = () =>{
  

    renderLabels() 
 
 var k=0
  for (var i = 0; i < 10; ++i){
    var row = document.createElement('div')
    row.className = 'row'
    // row.style.flexDirection = i % 2 === 0 ? '' : 'row-reverse'; 
    for (var j = 0; j < 10; ++j){
      var square = document.createElement('div')
      square.className = 'square'
      square.id=k   
      k++
      row.appendChild(square)
    }
    board.appendChild(row)
  }   
 }

renderLabels = () => {
  upperNum.forEach((x,i)=>{
    var el = document.createElement('div')
    var el2 = document.createElement('div')
    var el3=document.createElement('div')
    for(j in x){
        
        ph=document.createElement('p')
        ph.innerHTML=x[j]
        el3.appendChild(ph)
        el3.className='el3'

        
    }el.appendChild(el3)
    el.className = 'label';
    el2.innerText = sideNum[i]
    el2.className = 'label'
    sideContainer.appendChild(el2)
    upperContainer.appendChild(el)
  })
}

renderBoard1()


for(var i=1;i<11;i++){ 
    for(var j=0;j<10;j++){
           board.childNodes[i].childNodes[j].addEventListener('click',function(){
            if(userInp[this.id]==0){
                this.style.backgroundColor='black'
                this.style.border='1px solid white'
                userInp[this.id]=1
            }
            else{
                this.style.backgroundColor='white'
                this.style.border='1px solid black'
                userInp[this.id]=0
            }
    
        })
    }
  
}


var btn=document.getElementById('btn')
var board1=document.getElementById('boardOuter')
function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }
btn.addEventListener('click',function(){
    var hasWon=arrayEquals(userInp,result)
    if(hasWon){
        alert('you win')
    }
    else{
        alert('you lose')
    }
    location.reload()

})


