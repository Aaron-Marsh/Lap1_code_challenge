const express = require('express');
const server = express();
server.use(express.json());
const port = 3000;
server.listen(port, () => console.log(`Express departing now from http://localhost:${port}`))

const cors = require('cors');
server.use(cors());


// Arrays of results

let dogs = [
    'Golden Retriever',
    'German Shepard',
    'Poodle',
    'Bulldog',
    'Pug',
    'Siberian Husky',
    'Border Collie',
    'Yorkshire Terrier',
    'Great Dane',
    'Shih Tzu'
]

let pasta = [
    'Spaghetti',
    'Cannelloni',
    'Fusilli',
    'Capellini',
    'Tagliatelle',
    'Conchiglie',
    'Lasagne',
    'Rigatoni',
    'Ravioli',
    'Linguine'
]

// Routes for results

// DOGS DOGS DOGS DOGS

server.get('/', (req, res) => res.send('hello there'));

// All dogs

server.get('/dogs', (req, res) => {
    
    res.send(dogs)
});

function randomId() {
    return Math.floor(Math.random() * 10);
}

// Random dog
server.get('/dogs/random', (req, res) => {
  try {
    const dogId = randomId();
    const dog = dogs[dogId]
    if (!dog) {
      throw new Error('This dog does not exist')
    } else {
      res.send(dog)
    }
  } catch (err) {
    res.status(404).send({ message: err.message })
  }
})

// Specific dog
server.get('/dogs/:id', (req, res) => {
    try {
      const dogId = parseInt(req.params.id)
      const dog = dogs[dogId - 1]
      if (!dog) {
        throw new Error('This dog does not exist')
      } else {
        res.send(dog)
      }
    } catch (err) {
      res.status(404).send({ message: err.message })
    }
  })


// PASTAS PASTAS PASTAS PASTAS

// All Pasta
server.get('/pasta', (req, res) => {
    
    res.send(pasta)
});


// Random dog
server.get('/pasta/random', (req, res) => {
  try{
    const pastaId = randomId();
    const pasta1 = pasta[pastaId]
    
      res.send(pasta1)
    
  } catch (err) {
    res.status(404).send({ message: err.message })
  }
})
