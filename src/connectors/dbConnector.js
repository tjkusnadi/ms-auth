const _connectDb = async (mongodb, dbConfig) => {
  const uri = `mongodb://${dbConfig.dbHost}/${dbConfig.dbPort}`;
  const { MongoClient } = mongodb;
  console.info(`connecting to: ${uri}...`);
  const client = await MongoClient.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
  if (client) {
    console.info('database connected');
  }
  return {
    db: client.db(dbConfig.dbName),
    client
  };
};

const dbConnector = async (app, mongodb, dbConfig) => {
  app.locals.mongo = await _connectDb(mongodb, dbConfig);
};

module.exports = dbConnector;