process.stdin.on("readable",(chunk) => {
    
    while ((chunk = process.stdin.read()) !== null) {
        process.stdout.write(`data written: ${chunk}`)
    }
})

