function printMultiplicationTable(): void {

    for (let i = 1; i <= 9; i++) {
        let line = ''; 
      for (let j = 1; j <= 9; j++) {
        line +=
        line +=
        console.log(`${i} x ${j} = ${i * j}`);
      }
      console.log(line);
    }
  }
  
  printMultiplicationTable();