function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    const userObject = {
      firstName,
      lastName,
    };
    resolve(userObject);
  });
}

export default signUpUser;
