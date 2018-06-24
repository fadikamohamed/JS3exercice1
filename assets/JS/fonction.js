//Déclaration de la variable borderEffect
borderEffect = document.getElementById('image1');
//Assignation de de la fonction switchBorder sur l'évenement mouseover
borderEffect.addEventListener('mouseover',switchBorder);
//Assignation de la fonction switchBorderOut sur l'évenement mouseBorderOut
borderEffect.addEventListener('mouseout', switchBorderOut);
//Déclaration de la fonction switchBorder

function switchBorder() {
  //Déclaration de la bordure
  switchBorder = document.getElementById('image1').style.border = '3px solid red';
}

//Déclaration de la fonction switchBorderOut
function switchBorderOut() {
  //Supréssion de la bordure
  switchBorderOut = document.getElementById('image1').style.border = '';
}
