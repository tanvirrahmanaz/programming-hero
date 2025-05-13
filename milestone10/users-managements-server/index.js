const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;



app.get('/', (req, res) => {
  res.send('Hello World!')
})

const users = [
    { id: 1, name: 'John vai' , email:'tanvirrahman932@gmail.com' },
    { id: 2, name: 'jane man' , email:'rahman932@gmail.com' },
    { id: 3, name: 'Jim Doe' , email:'tanvirr32@gmail.com'}
]

app.get('/users', (req, res) => {
    res.send(users)
}
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})