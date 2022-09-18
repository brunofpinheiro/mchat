const failsList = new Array('nao', 'nao', 'nao', 'nao', 'nao',
                            'nao', 'nao', 'nao', 'nao', 'nao',
                            'sim', 'nao', 'nao', 'nao', 'nao',
                            'nao', 'nao', 'sim', 'nao', 'sim',
                            'nao', 'sim', 'nao');
let totalFails = 0;

function checkResults() {
  resetTotalFails();

  checkQuestion(document.getElementsByName('question1'), 1);
  checkQuestion(document.getElementsByName('question2'), 2);
  checkQuestion(document.getElementsByName('question3'), 3);
  checkQuestion(document.getElementsByName('question4'), 4);
  checkQuestion(document.getElementsByName('question5'), 5);
  checkQuestion(document.getElementsByName('question6'), 6);
  checkQuestion(document.getElementsByName('question7'), 7);
  checkQuestion(document.getElementsByName('question8'), 8);
  checkQuestion(document.getElementsByName('question9'), 9);
  checkQuestion(document.getElementsByName('question10'), 10);
  checkQuestion(document.getElementsByName('question11'), 11);
  checkQuestion(document.getElementsByName('question12'), 12);
  checkQuestion(document.getElementsByName('question13'), 13);
  checkQuestion(document.getElementsByName('question14'), 14);
  checkQuestion(document.getElementsByName('question15'), 15);
  checkQuestion(document.getElementsByName('question16'), 16);
  checkQuestion(document.getElementsByName('question17'), 17);
  checkQuestion(document.getElementsByName('question18'), 18);
  checkQuestion(document.getElementsByName('question19'), 19);
  checkQuestion(document.getElementsByName('question20'), 20);
  checkQuestion(document.getElementsByName('question21'), 21);
  checkQuestion(document.getElementsByName('question22'), 22);
  checkQuestion(document.getElementsByName('question23'), 23);

  printTotalFails();
}

function resetTotalFails() {
  totalFails = 0;
}

function printTotalFails() {
  document.getElementById("result").innerHTML = `Total de falhas: ${totalFails}`;
  document.getElementById("result").style.fontSize = '1.5em';
  document.getElementById("result").style.margin = '2em 0';
  document.getElementById("result").style.fontWeight = 'bold';
}

function checkQuestion(option, failsListPosition) {
  for(i = 0; i < option.length; i++) {
    if(option[i].checked) {
      if (option[i].value == failsList[failsListPosition - 1]) {
        totalFails++;
      }
    }
  }
}