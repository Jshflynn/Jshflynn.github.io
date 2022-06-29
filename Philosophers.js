function Who() {
  var arrayOfElements=document.getElementsByClassName('philosopher');
  var lengthOfArray = arrayOfElements.length;

  for (var i = 0; i < lengthOfArray; i++){
      arrayOfElements[i].style.display = 'none';
  }

  return;
}

function What() {
  var arrayOfElements=document.getElementsByClassName('ideas');
  var lengthOfArray = arrayOfElements.length;

  for (var i = 0; i < lengthOfArray; i++){
      arrayOfElements[i].style.display = 'none';
  }

  return;
}

function When() {
  var arrayOfElements=document.getElementsByClassName('dates');
  var lengthOfArray = arrayOfElements.length;

  for (var i = 0; i < lengthOfArray; i++){
      arrayOfElements[i].style.display = 'none';
  }

  return;
}

function All() {
  var arrayOfElements=document.getElementsByClassName('philosopher');
  var lengthOfArray = arrayOfElements.length;

  for (var i = 0; i < lengthOfArray; i++){
      arrayOfElements[i].style.display = 'block';
  }

  var arrayOfElements2=document.getElementsByClassName('dates');
  var lengthOfArray2 = arrayOfElements2.length;

  for (var i = 0; i < lengthOfArray2; i++){
      arrayOfElements2[i].style.display = 'block';
  }

  var arrayOfElements2=document.getElementsByClassName('ideas');
  var lengthOfArray2 = arrayOfElements2.length;

  for (var i = 0; i < lengthOfArray2; i++){
      arrayOfElements2[i].style.display = 'block';
  }

  return;
}