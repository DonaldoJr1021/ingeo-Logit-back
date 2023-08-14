const MongoClient = require('mongoose');

MongoClient.set("strictQuery", true);

const getCredentials = () => {
  const {
    MONGO_HOST,
    MONGO_DATABASE,
    MONGO_USER,
    MONGO_PASSWORD
  } = process.env;

  userEncode = encodeURIComponent(MONGO_USER);
  passEncode = encodeURIComponent(MONGO_PASSWORD);
  cluster = MONGO_HOST;

  const MONGO_URL = `mongodb+srv://${userEncode}:${passEncode}@${cluster}/${MONGO_DATABASE}`;

  return {
    MONGO_URL
  }
};

const conectWithMongo = async () =>{
  const connectInformation = getCredentials();

  try{
    await MongoClient.connect(
      connectInformation.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    console.log('MongoDb is connected');

    return true;
  }catch(error){
    console.info('Error al conectar con MongoDB ', error);
    return false;
  }
}

const isConnected = () => {
  return MongoClient.connection.readyState === 1 ? true : false;
}

const helper = {
  getCredentials,
  conectWithMongo,
  isConnected
}

module.exports = {helper};