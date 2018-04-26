
function getFirstSelector(sel) {
  return document.querySelector(sel) } 

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
 
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  var parent =  document.getElementById('grand-node');
  var lis = [];
  while(parent.querySelector('div') != null){
    parent = parent.querySelector('div');
  }
  return parent;
}
