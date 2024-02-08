const { MongoClient } = require("mongodb");
require('dotenv').config()


function generateRandomString() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let randomString = '';

  // Generate 2 random letters
  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    randomString += letters.charAt(randomIndex);
  }

  // Generate 13 random numbers
  for (let i = 0; i < 13; i++) {
    randomString += Math.floor(Math.random() * 10);
  }

  return randomString.toUpperCase();
}

async function root(username,password) {
  const uri = process.env.uri;
  const client = new MongoClient(uri);
  await client.connect();
  const dbName = "Users";
  const collectionName = "Admins";
  const database = client.db(dbName);
  const collection = database.collection(collectionName);
  const findOneQuery = { username: username };

  try {
    const findOneResult = await collection.findOne(findOneQuery);
    if (findOneResult !== null) {
      if (findOneResult.password === password) {
        await client.close();
        return true;

      } else {
        await client.close();
        return false;
      }
    } else {
      await client.close();
      return false;
      
    }
  } catch (err) {
    console.error(`Something went wrong trying to find one user: ${err}\n`);
  }
  // Make sure to call close() on your client to perform cleanup operations
  await client.close();
}

async function getUsers(){

  const uri = process.env.uri;  
  const client = new MongoClient(uri);
  await client.connect();
  const dbName = "GlobalTraders";
  const collectionName = "Users";
  const database = client.db(dbName);
  const collection = database.collection(collectionName);
  
  
  try {
    const documents = await collection.find().toArray();
    if (documents === null) {
      console.log(`Couldn't find any package.\n`);
    } else {
      return(JSON.stringify(documents))
    }
  } catch (err) {
    console.error(`Something went wrong trying to find one document: ${err}\n`);
  }
  await client.close(); 
} 
async function getAllDashboard(){

  const uri = process.env.uri;  
  const client = new MongoClient(uri);
  await client.connect();
  const dbName = "GlobalTraders";
  const collectionName = "Dashboard";
  const database = client.db(dbName);
  const collection = database.collection(collectionName);
  
  
  try {
    const documents = await collection.find().toArray();
    if (documents === null) {
      console.log(`Couldn't find any package.\n`);
    } else {
      return(JSON.stringify(documents))
    }
  } catch (err) {
    console.error(`Something went wrong trying to find one document: ${err}\n`);
  }
  await client.close(); 
} 

module.exports = {
  generateRandomString,
  root,
  getUsers,
  getAllDashboard
};