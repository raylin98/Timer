const timer = function() {
  const timerArray = process.argv.slice(2);
  
  for (let i = 0; i <= timerArray.length; i++) {
    if (timerArray[i] === undefined || timerArray[i] < 0 || isNaN(timerArray[i])) {
      return '';
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, timerArray[i] * 1000);
    }
  }
};
timer();
