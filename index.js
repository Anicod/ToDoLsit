function addPlan(){
  let x = prompt("Add your plan") 
   document.getElementById('addingplan').innerHTML = document.getElementById('addingplan').innerHTML + '<li>'  + x.toUpperCase() + '</li>';

}
function addInput(){
    let x = document.getElementById('inputplan').value
 document.getElementById('addingplan').innerHTML = document.getElementById('addingplan').innerHTML + '<li>'  + x + '</li>';
 document.getElementById('inputplan').value = ""
}
