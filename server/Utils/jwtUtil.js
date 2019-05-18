const jwt = require('jsonwebtoken');

exports.createNewToken = (user, key) => {
  console.log('thekey:', key);
  const token = jwt.sign(
    {
      sub: user.id,
      userName: user.username,
      role: user.role,
    },
    key,
    {
      expiresIn: '1 min',
    }
  );
  return token;
};

exports.isTokenExpired = (Token, key) => {
  try {
    const decoded = decodeToken(Token, key);
    if (decoded.exp < Date.now() / 1000) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};

exports.decodeToken = (Token, key) => {
  return jwt.decode(Token, key);
};
