const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const categories = require('./Data/Categories.json');
const news = require('./Data/News.json');

app.use(cors());
app.get('/categories', (req, res)=>{
    res.send(categories);
})

app.get('/news', (req, res) =>{
    res.send(news);
})

app.get(`/news/:id`, (req, res)=>{
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

app.get(`/categories/:id`, (req, res) =>{
    const id = parseInt(req.params.id);
    if(id ===0){
        res.send(news)
    }
    const categoryNews = news.filter(n=>parseInt(n.category_id) ===id);
    res.send(categoryNews)
})

app.get('/', (req, res)=>{
    res.send(`Dragon Is Running..`)
})

app.listen(port, ()=>{
    console.log(`Dragon API is running on Port: ${port}`)
})
