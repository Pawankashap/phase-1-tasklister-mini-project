document.addEventListener('DOMContentLoaded', ()=>{
  let form= document.querySelector('form')
  form.addEventListener('submit',(e)=>{
      e.preventDefault()
      handleToDo(e.target['new-task-description'].value)
      form.reset()
      
  })
})

function handleToDo(todo){
  let li =document.createElement('li')
  let btn= document.createElement('button')
  let priority= document.querySelector('select')
  let inputtask = document.getElementById('new-task-description')
  let dd= document.getElementById('sort-task')
  dd.addEventListener('change',() => { 
    if(dd.value==='hightolow') {
        setelementsort()
    }
    else if(dd.value==='lowtohigh'){
      setelementsortdes()
    }
  })
  btn.addEventListener('click',handleDelete)
  btn.textContent='X'
  let s=`${todo} `
  li.innerText=s
  if( priority.value==='select'){
    alert('Please select Priority')
    priority.focus()
  }
  else if (inputtask.value===""){
    alert('Please Enter Task in The Task Description')
    inputtask.focus()
  }
  else {
    li.style.color= priority.value
    li.appendChild(btn)
    document.querySelector('#tasks').appendChild(li)
    let form= document.querySelector('form')
    form.reset()
  }
}
  function setelementsort(){
          let sortlist= document.getElementById('tasks')
          let i, switching, b, shouldSwitch;
            let colorRed=[], colorBlue=[], colorGreen=[],allcolor=[]
          switching = true;
          while (switching) {
            switching = false;
            b = sortlist.getElementsByTagName("LI");
            for (i = 0; i < (b.length - 1); i++) {

              shouldSwitch = false;
              if(b[i+1].style.color==="red" && (b[i].style.color==="blue" || b[i].style.color==="green")){
                shouldSwitch = true;
                break;
              }else if (b[i+1].style.color==="blue" && b[i].style.color==="green"){
                shouldSwitch = true;
                break;
            }
            }
            if (shouldSwitch) {
              b[i].parentNode.insertBefore(b[i + 1], b[i]);
              switching = true;
            }
          }
  }

  function setelementsortdes(){
    let sortlist= document.getElementById('tasks')
    let i, switching, b, shouldSwitch;
      let colorRed=[], colorBlue=[], colorGreen=[],allcolor=[]
    switching = true;
    while (switching) {
      switching = false;
      b = sortlist.getElementsByTagName("LI");
      for (i = 0; i < (b.length - 1); i++) {

        shouldSwitch = false;                          
        if(b[i+1].style.color==="green" && (b[i].style.color==="blue" || b[i].style.color==="red")){
          shouldSwitch = true;
          break;
        }else if (b[i+1].style.color==="blue" && b[i].style.color==="red"){
          shouldSwitch = true;
          break;
      }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
}

  function handleDelete(e) {
    e.target.parentNode.remove()
  }


