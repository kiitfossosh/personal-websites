const express = require("express")
const mongoose = require('mongoose')
const shorturl = require('./models/shorturl')
const app = express()

mongoose.connect('mongodb://localhost/urlshortner',{
    useNewUrlParser:true,useUnifiedTopology:true
})

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))

app.get('/',async (req,res)=>{
    const shorturls = await shorturl.find()
    res.render('index',{shorturls:shorturls})
})
app.post('/shorturls',async (req,res)=>{
   await shorturl.create({full: req.body.fullurl})
   res.redirect('/')
})

app.get('/:Shorturl',async (req,res)=>{
    const Shorturl = await shorturl.findOne({ short:req.params.Shorturl })
    if (Shorturl == null) return res.sendStatus(404)
Shorturl.clicks++
Shorturl.save()

res.redirect(Shorturl.full)

})

app.listen(process.env.PORT || 5000);
