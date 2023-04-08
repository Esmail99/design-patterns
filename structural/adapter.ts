interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface FormattedUser {
  firstName: string;
  lastName: string;
  email: string;
}

class UserRepoAdapter {
  static formatUser = (user: User): FormattedUser => {
    return {
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
    };
  };
}

class UserRepo {
  get(): FormattedUser {
    // call sql database to get user which stored in snake case
    const row = {
      id: 1,
      first_name: "Esmail",
      last_name: "Elmoussel",
      email: "elmoussel12@gmail.com",
      password: "some_hash",
    };

    const user = UserRepoAdapter.formatUser(row);

    return user;
  }
}

const userRepo = new UserRepo();

const user = userRepo.get();

console.log(user);
