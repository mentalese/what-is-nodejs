const crypto = require('crypto')
const https = require('https')
const fs = require('fs')


const start = Date.now()

function request(){
    https.request('https://www.naver.com', res =>{
        res.on('data',() =>{})
        res.on('end',() =>{
            console.log('request', Date.now() - start)
        })
    }).end()
}

function hash(){
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
        console.log('hash', Date.now() - start)
    })
}


request();
fs.readFile('05_multitask.js', ()=>{
    console.log('file', Date.now() - start)
})
hash();
hash();
hash();
hash();
hash();
hash();


