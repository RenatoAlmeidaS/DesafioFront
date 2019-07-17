const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
const handler = routes.getRequestHandler(app);

app.prepare()
.then(() => {
    const PORT = process.env.PORT || 5000;
    express().use(handler).listen(PORT, (err) => {
        if (err) throw err
        console.log(`http://localhost:${ PORT }`)        
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})