count = [0,0,0,0,0,0,0,0,0,0,0,0,0]
for (let i = 0; i < 3600; i++) {
    let x1 = Math.ceil(Math.random()*6)
    let x2 = Math.ceil(Math.random()*6)
    count[x1+x2]++
}
console.log(count)