const express = require('express')
const path = require('path')
const CoinGecko = require('coingecko-api')
const app = express()

const coin_gecko_client = new CoinGecko()



const tf = require('@tensorflow/tfjs')

app.set('view engine', 'ejs')

let PORT = process.env.PORT || 8000

app.use(express.static('public'))

app.set('views', path.join(__dirname, '/views'))

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.get('/', function(request, response){
	return response.render('index', { title: "Bitcoin Price Prediction" })
})

app.listen(PORT, function(){
	console.log('server running')
})