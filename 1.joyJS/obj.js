let range = {
    from: 1,
    to: 5
  };

for (let num in range) {
    console.log(num);
}

for (let num in range) {
    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        console.log(element);
    }
}

for (let char of "test") {
    // срабатывает 4 раза: по одному для каждого символа
    console.log( char ); // t, затем e, затем s, затем t
  }