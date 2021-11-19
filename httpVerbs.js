const express = require('express');

const app = express();
const book = require('./book.json');
console.log(book)
app.use(express.json())

app.get('/book', (req, res) => {
    res.send(book)
})
app.post('/book', (req, res) => {
    const newBook = [...book,req.body]
    res.send(newBook)
})
app.patch("/book/:pages",(req, res) => {
    const newBook = book.map((b)=>{
        if(req.params.pages === b.pages){
            return req.body;
        }
        return b;
    })
    res.send(newBook);
})

app.delete("/book/:pages",(req, res) => {
    const deletebook = book.filter((b)=>
        b.pages !== req.params.pages)
    res.send(deletebook);
})

app.listen(5000,()=>{ 
    console.log('listening on 5000')
})