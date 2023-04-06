class Database {
  private static instance: Database;

  private constructor() {
    console.log("Database initialized! Should be called once!");
  }

  static getInstance(): Database {
    if (!this.instance) {
      this.instance = new Database();
    }

    return this.instance;
  }
}

const database1 = Database.getInstance();
const database2 = Database.getInstance();
const database3 = Database.getInstance();

console.log(database1 === database2);
