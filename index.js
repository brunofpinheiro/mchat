function checkResults(e) {
  
  var ele = document.getElementsByName('question1');

  for(i = 0; i < ele.length; i++) {
    if(ele[i].checked) {
      document.getElementById("result").innerHTML = "Escolhestes: " + ele[i].value;
    }
  }
}
