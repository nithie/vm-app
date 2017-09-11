module.exports = {
  connectionString: {
    keyspace: 'todo',
    contact: '127.0.0.1',
    port: '9042',
  },
  cassandraStore: {

    table: "sessions",
    client: null,
    clientOptions: {
      contactPoints: ['127.0.0.1'],
      keyspace: "todo",
      queryOptions: {
      prepare: true
      }
    }
  }
};
