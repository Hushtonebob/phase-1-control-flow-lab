function scuberGreetingForFeet(someValue){
  let result
    if (someValue <= 400) {
      result = `This one is on me!`;}
  
    if (someValue > 2000){
      result = `I will gladly take your thirty bucks.`;}

    if (someValue > 2500){
      result = `No can do.`;}

  return result
}

function ternaryCheckCity(city){
  let blam1 = city === `NYC` ? `Ok, sounds good.` : `No go.`;

return blam1;
}

function switchOnCharmFromTip(tip){
  
  let tipResponse;
  
    switch (tip) { 
      case `generous`:
         tipResponse; return `Thank you so much.`;

      case `not as generous`:
        tipResponse; return `Thank you.`;
       
      default:
        tipResponse; return `Bye.`;
    }
  }