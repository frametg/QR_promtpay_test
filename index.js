const generatePayload = require('promptpay-qr') 
const qrcode = require('qrcode') 
const fs = require('fs') 

const mobileNumber = '000-000-0000'


const IDCardNumber = '0-0000-00000-00-0'
const amount = 0
//const payload = generatePayload(mobileNumber, { amount }) //First parameter : mobileNumber || IDCardNumber
const payload =  "000201010212021644851645389267595204701153037645405100.05802TH5907PPETECH6007BANGKOK62760107INVOICE031594546222462902705232021061501465140900000007153537474793298856304F690"

console.log(payload)

// Convert to SVG QR Code
const options = { type: 'svg', color: { dark: '#000', light: '#fff' } }
qrcode.toString(payload, options, (err, svg) => {
    if (err) return console.log(err)
    fs.writeFileSync('./qr.svg', svg)
    console.log(svg)
})
