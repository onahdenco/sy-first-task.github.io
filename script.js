function randomMessage(){
 let word = ['Why don\'t scientists trust atoms? Because they make up everything!',
'What did one wall say to the other wall? \"I\'ll meet you at the corner!\"', 
'How do you organize a space party?You planet!', 'Why couldn\'t the bicycle stand up by itself? Because it was two-tired!'];
  let random = Math.floor(Math.random() * word.length)
  return word[random];
}
function mixed(){
  document.getElementById('p').innerHTML = randomMessage();
}
