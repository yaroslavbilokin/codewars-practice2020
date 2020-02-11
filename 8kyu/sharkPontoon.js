https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let sharkTime;
    if (dolphin == true) {
        let modifiedSharkSpeed = sharkSpeed / 2;
        sharkTime = sharkDistance / modifiedSharkSpeed;
    } else {
        sharkTime = sharkDistance / sharkSpeed;
    }
    let userTime = pontoonDistance / youSpeed;
    
    return userTime < sharkTime ? 'Alive!' : "Shark Bait!";
    
    
    // Short Solution 
    
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if(dolphin){
    sharkSpeed /= 2;
  }
  return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
}
