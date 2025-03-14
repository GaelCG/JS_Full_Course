let i = 0;
while (i < 10) {
    i++;
    console.log(i);
    if (i === 2) {
        
        continue;
    }
    if (i === 5) {
        console.log('break');
        break;
    }
}
