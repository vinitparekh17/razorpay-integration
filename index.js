const express = require('express');
const app = express();
const Razorpay = require('razorpay');
const instance = new Razorpay({
    key_id: 'RAZORPAY_ID',
    key_secret: 'RAZORPAY_SECRET'
})
//id rzp_test_q4QHnH4gT1BKpW
//secret EejgRd9vVTaHpGboEsHwmKHd 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/order', (req, res) => {
    let amount = req.body.amount;
    let option = {
        amount: amount * 100,
        currency: "INR",
        receipt: "receipt#1"
    }
    instance.orders.create(option, (err, order) => {
        res.send(order)
    })
})

app.listen(3001, () => {
    console.log("app is up and running");
})