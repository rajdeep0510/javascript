// loops 
// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("I like 5 ");        
    }
    // console.log(element);    
}

for (let i = 0; i < 10; i++) {
    // console.log(`Outer loop value ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner loop value ${j} `);
        console.log(i + "*" + j + "=" + i*j);
    }
}