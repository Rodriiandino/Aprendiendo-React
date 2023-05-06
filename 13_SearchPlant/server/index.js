const express = require('express')
const cors = require('cors')
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))

const app = express()
const port = 3000

const KEY_PLANT = '9Rt6BMZNiG_JKQKJV8a_pGQglKYQxY1ZZQ-X1cRvjhw'

app.use(cors()) // Agregar el middleware cors

app.get('/plants', async (req, res) => {
  try {
    const page = req.query.page || 1
    const search = req.query.search || ''
    const url = `https://trefle.io/api/v1/plants/search?token=${KEY_PLANT}&page=${page}&q=${search}`
    const response = await fetch(url)
    console.log(url)
    // Verificar si la respuesta es JSON
    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('No se recibió una respuesta JSON válida')
    }

    const data = await response.json()
    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
