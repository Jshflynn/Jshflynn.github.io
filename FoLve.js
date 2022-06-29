function Eng() {
  var arrayOfElements=document.getElementsByClassName('Eng');
  var lengthOfArray = arrayOfElements.length;

  for (var i = 0; i < lengthOfArray; i++){
      arrayOfElements[i].style.display = 'inline';
  }

  var arrayOfElements2=document.getElementsByClassName('For');
  var lengthOfArray2 = arrayOfElements2.length;

  for (var i = 0; i < lengthOfArray2; i++){
      arrayOfElements2[i].style.display = 'none';
  }

  return;
}

function Bth() {
  var arrayOfElements=document.getElementsByClassName('Eng');
  var lengthOfArray = arrayOfElements.length;

  for (var i = 0; i < lengthOfArray; i++){
      arrayOfElements[i].style.display = 'inline';
  }

  var arrayOfElements2=document.getElementsByClassName('For');
  var lengthOfArray2 = arrayOfElements2.length;

  for (var i = 0; i < lengthOfArray2; i++){
      arrayOfElements2[i].style.display = 'inline';
  }

  return;
}

function For() {
  var arrayOfElements=document.getElementsByClassName('For');
  var lengthOfArray = arrayOfElements.length;

  for (var i = 0; i < lengthOfArray; i++){
      arrayOfElements[i].style.display = 'inline';
  }

  var arrayOfElements2=document.getElementsByClassName('Eng');
  var lengthOfArray2 = arrayOfElements2.length;

  for (var i = 0; i < lengthOfArray2; i++){
      arrayOfElements2[i].style.display = 'none';
  }

  return;
}