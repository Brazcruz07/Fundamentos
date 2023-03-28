// if = se;
// else = senão

// if (condição) {
    //código
 // } else if (outraCondição) {

 // } else if (outraCondição) {

 // } else {
    // condição
//  }

let grade = 100;
if (grade >= 80) {
  console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!");
} else if (grade < 80 && grade >= 60) {
  console.log("Você está na nossa lista de espera.");
} else if (grade < 60) {
  console.log("Infelizmente, você reprovou.");
}