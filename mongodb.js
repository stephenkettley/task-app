const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://stephenkettley:taskapp@task-app.urzzm.mongodb.net/?retryWrites=true&w=majority&appName=task-app";

async function main() {
  const client = new MongoClient(uri);
  try {
    await client.connect();

    const database = client.db("task-app");
    const collection = database.collection("users");

    const doc = {
      name: "Stephen Kettley",
      age: 27,
    };

    // Insert the document
    const result = await collection.insertOne(doc);

    console.log(
      `New document inserted with the following id: ${result.insertedId}`
    );
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);
