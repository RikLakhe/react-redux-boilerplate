const jwt = require('jsonwebtoken');

export const createNewToken = (user, key) => {
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

export const isTokenExpired = (Token, key) => {
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

export const decodeToken = (Token, key) => {
  return jwt.decode(Token, key);
};
