const { log } = require('console');
const http = require('http'); //import
const server=http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('resposnse from server');
        res.end();
    }else if(req.url==="/form"){
        res.setHeader("Content-Type",'text/html');
        res.write("<form method='post' action='/submit'> <input name='data'> <button>submit</button> </form>");
        res.end();
    } else if(req.url==="/submit"){
       
        res.write('data submitted!');
        res.end();
    }
    else {
        res.write('not - found');
        res.end();
    }

})
server.listen(4000)