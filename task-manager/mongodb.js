//CRUD

const { MongoClient, ObjectID } = require("mongodb");
const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) return console.log({ error });

    var db = client.db(databaseName);
    // db.collection("users").findOne({name:"Aviral"},(error,response)=>{
    //     if(error) return console.log("Unable to fetch")
    //     console.log("user",response)
    // })
    // db.collection("users").find({name:"Aviral"}).toArray((error,users)=>{
    //     console.log({users})
    // })

    const updatePromise = db.collection("tasks").deleteOne(
      {
        "description" : "Here is the desc1"
      }
    );

    updatePromise
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log({ error });
      });
  }
);
