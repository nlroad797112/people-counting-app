 let countel = document.getElementById('count-el');   //0
let saveel =  document.getElementById('saveEl');      //previous entries
let count=0

function increment(){
    count+=1
    countel.textContent = count
};

function decrement(){
  count=count - 1
  countel.textContent = count
}

function save(){
  let str = count + "-"
  saveel.textContent +=str 
  countel.textContent = 0
  count = 0
}