const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([{
      name:'Bob',
      email:'bob@gmail.com'
  },{
      name:'Alice',
      email:"alice@gmail.com"
  },
  {
    name:'lewis',
    email:"lewis@gmail.com"
},
])
})

app.listen(port, () => {
  console.log(`docker101 app listening at http://localhost:${port}`)
})