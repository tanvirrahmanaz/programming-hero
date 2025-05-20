const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion ,ObjectId} = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//user name: simpleDBUser
//pass : 5bzOdJEOwuqJdvdw

const uri = "mongodb+srv://simpleDBUser:5bzOdJEOwuqJdvdw@cluster0.yaugxcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get('/', (req, res) => {
  res.send('simple crud server running');
}
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}
);



async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


    const usersCollection = client.db('simpleDB').collection('users');

    app.get('/users', async (req, res) => {
      const cursor = usersCollection.find();
      const users = await cursor.toArray();
      res.send(users);
    })


    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await usersCollection.findOne(query);
      res.send(user);
    })

    app.post('/users', async (req, res) => {
      const newUser = req.body;
      const result = await usersCollection.insertOne(newUser); 
      res.send(result);
    })

    app.put('/users/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const user = req.body;  

      const updateDoc = {
        $set: {
          name: user.name,
          email: user.email
        }
      }
      const options = { upsert: true }; // create a new document if no document matches the filter
      
      const result = await usersCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    })

    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    }
    )

    // const database = client.db('useresdb');
    // const userCollection = database.collection('users');

    // app.post('/users',async(req, res) => {
    //   console.log('user data', req.body);
    //   const newUser = req.body;
    //   const result = await userCollection.insertOne(newUser);
    //   res.send(result);
    // } )

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    
  }
}
run().catch(console.dir); 