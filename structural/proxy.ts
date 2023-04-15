interface User {
  id: number;
  userName: string;
}

export class Database {
  getUser(id: number): User {
    return {
      id,
      userName: `user-${id}`,
    };
  }
}

class DatabaseProxy implements Database {
  private users: { [id: string]: User } = {};
  private database;

  constructor(database: Database) {
    this.database = database;
  }

  getUser(id: number): User {
    if (!this.users[id]) {
      console.log(`Getting user with id = ${id} from database...`);

      this.users[id] = this.database.getUser(id);
    } else {
      console.log(`Getting user with id = ${id} from cache...`);
    }

    return this.users[id];
  }
}

const database = new Database();
const proxyDatabase = new DatabaseProxy(database);

proxyDatabase.getUser(1);
proxyDatabase.getUser(1);
proxyDatabase.getUser(2);
