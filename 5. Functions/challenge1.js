function isValidPassword(username, password) {
  if (
    password.length < 8 ||
    password.includes(' ') ||
    password.includes(username)
  ) {
    return false;
  }
  return true;
}

console.log(isValidPassword('phong', 'fdasdasdas'));
console.log(isValidPassword('phong', 'fda'));
console.log(isValidPassword('phong', 'fdaphongfdfd'));
console.log(isValidPassword('phong', 'fda ffffdasdadfd'));
