const { MongoClient, ObjectId } = require("mongodb");

const uri =
  "mongodb+srv://stephenkettley:taskapp@task-app.urzzm.mongodb.net/?retryWrites=true&w=majority&appName=task-app";

async function main() {
  const client = new MongoClient(uri);
  try {
    await client.connect();

    const database = client.db("task-app");
    const collection = database.collection("users");
    const collectionTasks = database.collection("tasks");

    await database
      .collection("users")
      .updateOne(
        {
          _id: new ObjectId("66de975cda77b40239c45711"),
        },
        {
          $inc: {
            age: 10,
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    // const documents = [
    //   { _id: new ObjectId(), name: "Abbot", age: 27 },
    //   { _id: new ObjectId(), name: "Xolani", age: 24 },
    // ];

    // const result = await collection.insertMany(documents);
    // console.log("documents successfully inserted");

    // const tasks = [
    //   { _id: new ObjectId(), description: "cry", completed: true },
    //   { _id: new ObjectId(), description: "laugh", completed: false },
    // ];

    // const resultTask = await collectionTasks.insertMany(tasks);
    // console.log("tasks successfully inserted into tasks collection");

    // try {
    //   const user = await database
    //     .collection("users")
    //     .findOne({ _id: new ObjectId("66de975cda77b40239c45711") });
    //   console.log("User found:", user);
    // } catch (error) {
    //   console.log("Error occurred while fetching user:", error);
    // }

    // const users = await database
    //   .collection("users")
    //   .find({ age: 27 })
    //   .toArray();
    // console.log("users found:", users);
  } catch (error) {
    console.log(error);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);
