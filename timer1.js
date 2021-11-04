const alarm = (timer) =>{
  timer.sort();
  
  if (timer === '') {
      return ''
  }

  for (let i = 0; i < timer.length; i++) {
    let delay = 1000;
    if (timer[i] >= 0) {
      setTimeout(() => {
      
        process.stdout.write('Beep ');
        process.stdout.write('\x07');
    
      }, delay *= timer[i]);
    }
  }
};

const args = process.argv;
const timer = args.slice(2);
alarm(timer);



