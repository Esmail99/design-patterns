export abstract class Database {
  configs; // configs is a huge object (setup) for each environment

  constructor(configs: DatabaseConfigs) {
    this.configs = configs;
  }

  abstract connect(): void;
}

class Postgres extends Database {
  connect(): void {
    console.log(
      "Connecting to Postgres using",
      this.configs.getConnectionString()
    );
  }
}

class MongoDB extends Database {
  connect(): void {
    console.log(
      "Connecting to MongoDB using",
      this.configs.getConnectionString()
    );
  }
}

class MySQL extends Database {
  connect(): void {
    console.log(
      "Connecting to MySQL using",
      this.configs.getConnectionString()
    );
  }
}

abstract class DatabaseConfigs {
  abstract getConnectionString(): string;
}

class LocalDatabaseConfigs extends DatabaseConfigs {
  getConnectionString() {
    return "'local connection string'";
  }
}

class CloudDatabaseConfigs extends DatabaseConfigs {
  getConnectionString() {
    return "'cloud connection string'";
  }
}

class TestingDatabaseConfigs extends DatabaseConfigs {
  getConnectionString() {
    return "'testing connection string'";
  }
}

const localDatabaseConfigs = new LocalDatabaseConfigs();
const cloudDatabaseConfigs = new CloudDatabaseConfigs();
const testingDatabaseConfigs = new TestingDatabaseConfigs();

const mongoDBLocal = new MongoDB(localDatabaseConfigs);
mongoDBLocal.connect();

const postgresLocal = new Postgres(localDatabaseConfigs);
postgresLocal.connect();

const postgresCloud = new Postgres(cloudDatabaseConfigs);
postgresCloud.connect();

const postgresTesting = new Postgres(testingDatabaseConfigs);
postgresTesting.connect();

const mySQLTesting = new MySQL(testingDatabaseConfigs);
mySQLTesting.connect();
