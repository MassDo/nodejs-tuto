const http = require("http")

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end('coucou c doeeeeeeedo')

    }else if( req.url ==='/about'){
        res.end('on est sur la page about')
    }else {
        res.end(`
        <h1>ooops</h1>
        <a href='/'> home</a>
        `)
    }
})

server.listen(5000)