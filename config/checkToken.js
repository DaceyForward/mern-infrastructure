// const jwt = require('jsonwebtoken');

// module.exports = function(req, res, next) {
//   // Check for the token being sent in a header or as a query param
//   let token = req.get('Authorization') || req.query.token;
//   // Default to null
//   req.user = null;
//   if (!token) return next();
//   // Remove the 'Bearer ' that was included in the token header
//   token = token.replace('Bearer ', '');
//   // Check if token is valid and not expired
//   jwt.verify(token, process.env.SECRET, function(err, decoded) {
//     // Invalid token if err
//     if (err) return next();
//     // decoded is the entire token payload
//     req.user = decoded.user;
//     // If interested in the expiration,
//     // and we just happen to be...
//     req.exp = new Date(decoded.exp * 1000);
//     return next();
//   });
// };

const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Check for the token being sent in a header or as a query parameter
  let token = req.get('Authorization') || req.query.token;
  if (token) {
    // Remove the 'Bearer ' if it was included in the token header
    token = token.replace('Bearer ', '');
    // Check if token is valid and not expired
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      // If valid token, decoded will be the token's entire payload
      // If invalid token, err will be set
      req.user = err ? null : decoded.user;  
      // If your app cares... (optional)
      req.exp = err ? null : new Date(decoded.exp * 1000);  
      return next();
    });
  } else {
    // No token was sent
    req.user = null;
    return next();
  }
};