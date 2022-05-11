const express = require("express");
const server = express();
server.use(express.json());
const port = 3000;
server.listen(port, () =>
  console.log(`Express departing now from http://localhost:${port}`)
);

const cors = require("cors");
server.use(cors());

// Arrays of results

let dogs = [
  {
    id: "1",
    name: "Spaghetti",
    website:
      "https://www.bing.com/th?id=AMMS_e2eb1f297811edcd8eda37f92fabb6bb&w=115&h=115&c=5&o=6&pid=3.1",
  },
  {
    id: "2",
    name: "Cannelloni",
    website:
      "https://www.bing.com/th?id=AMMS_78a7d337d593e8a1bc6ef7841451f2be&w=115&h=115&c=5&o=6&pid=3.1",
  },
  {
    id: "3",
    name: "Fusilli",
    website:
      "https://www.bing.com/th?id=AMMS_5cb3fe0c2316f349518113776738d539&w=115&h=115&c=5&o=6&pid=3.1",
  },
  {
    id: "4",
    name: "Capellini",
    website:
      "https://www.bing.com/th?id=AMMS_5cb3fe0c2316f349518113776738d539&w=115&h=115&c=5&o=6&pid=3.1",
  },
  {
    id: "5",
    name: "Tagliatelle",
    website:
      "https://www.bing.com/th?id=AMMS_bcad83d380bbb0ac1f1a58ba4c026733&w=115&h=115&c=5&o=6&pid=3.1",
  },
  {
    id: "6",
    name: "Conchiglie",
    website:
      "https://www.bing.com/th?id=AMMS_877539a9bf18d8bada7b68c9caa977f7&w=115&h=115&c=5&o=6&pid=3.1",
  },
  {
    id: "7",
    name: "Lasagne",
    website:
      "https://www.bing.com/th?id=AMMS_da7198917fa5bba92d0fe607d9080781&w=115&h=115&c=5&o=6&pid=3.1",
  },
  {
    id: "8",
    name: "Rigatoni",
    website:
      "https://www.bing.com/th?id=AMMS_5cb3fe0c2316f349518113776738d539&w=115&h=115&c=5&o=6&pid=3.1",
  },
  {
    id: "9",
    name: "Ravioli",
    website:
      "https://www.bing.com/th?id=AMMS_5cb3fe0c2316f349518113776738d539&w=115&h=115&c=5&o=6&pid=3.1",
  },
  {
    id: "10",
    name: "Linguine",
    website:
      "https://www.bing.com/th?id=AMMS_5cb3fe0c2316f349518113776738d539&w=115&h=115&c=5&o=6&pid=3.1",
  },
];

let pasta = [
  "Spaghetti",
  "Cannelloni",
  "Fusilli",
  "Capellini",
  "Tagliatelle",
  "Conchiglie",
  "Lasagne",
  "Rigatoni",
  "Ravioli",
  "Linguine",
];

// Routes for results

// DOGS DOGS DOGS DOGS

server.get("/", (req, res) => res.send("hello there"));

// All dogs

server.get("/dogs", (req, res) => {
  res.send(dogs);
});

function randomId() {
  return Math.floor(Math.random() * 10);
}

// Random dog
server.get("/dogs/random", (req, res) => {
  try {
    const dogId = randomId();
    const dog = dogs[dogId];
    if (!dog) {
      throw new Error("This dog does not exist");
    } else {
      res.send(dog);
    }
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
});

// Specific dog
server.get("/dogs/:id", (req, res) => {
  try {
    const dogId = parseInt(req.params.id);
    const dog = dogs[dogId - 1];
    if (!dog) {
      throw new Error("This dog does not exist");
    } else {
      res.send(dog);
    }
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
});

// PASTAS PASTAS PASTAS PASTAS

// All Pasta
server.get("/pasta", (req, res) => {
  res.send(pasta);
});

// Random dog
server.get("/pasta/random", (req, res) => {
  try {
    const pastaId = randomId();
    const pasta1 = pasta[pastaId];

    res.send(pasta1);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
});
