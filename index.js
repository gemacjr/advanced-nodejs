const cluster = require('cluster');


// benchmark $ ab -c 50 -n 500 localhost:3000/fast
console.log(cluster.isMaster);

// Is the file being executed in master mode?
if(cluster.isMaster){
     // cause index.js to be executed *again* but in child mode
    cluster.fork();

}else {

    // I'm a child, I'm going to act like a server and do nothing else
    const express = require('express');
    const app = express();

    // function doWork(duration) {
    //     const start = Date.now();
    //     while(Date.now() - start < duration){
    
    //     }
    // }
    
    app.get('/', (req, res) => {
        
        res.send('Hi there');
    });
    
    app.get('/fast', (req, res) => {
        res.send('This was fast!');
    });

    app.listen(3000);
}



