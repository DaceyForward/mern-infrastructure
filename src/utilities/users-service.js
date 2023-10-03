// // // Import all named exports attached to a usersAPI object
// // // This syntax can be helpful documenting where the methods come from 
// // import * as usersAPI from './users-api';

// // export async function signUp(userData) {
// //     // Delegate the network request code to the users-api.js API module
// //     // which will ultimately return a JSON Web Token (JWT)
// //     const token = await usersAPI.signUp(userData);
// //     // Baby step by returning whatever is sent back by the server
// //     localStorage.setItem('token', token);

// //     return getUser();
// //   }

// // export function logOut() {
// //   localStorage.removeItem('token')
// // }

// // export function getToken() {
// //   // getItem returns null if there's no string
// //   const token = localStorage.getItem('token');
// //   if (!token) return null;
// //   // Obtain the payload of the token
// //   const payload = JSON.parse(atob(token.split('.')[1]));
// //   // A JWT's exp is expressed in seconds, not milliseconds, so convert
// //   if (payload.exp < Date.now() / 1000) {
// //     // Token has expired - remove it from localStorage
// //     localStorage.removeItem('token');
// //     return null;
// //   }
// //   return token;
// // }

// // export function getUser() {
// //   const token = getToken();
// //   // If there's a token, return the user in the payload, otherwise return null
// //   return token ? JSON.parse(atob(token.split('.')[1])).user : null;
// // }

// // Service modules export business/app logic
// // such as managing tokens, etc.
// // Service modules often depend upon API modules
// // for making AJAX requests to the server.

// import * as usersAPI from './users-api';

// export async function signUp(userData) {
//   const token = await usersAPI.signUp(userData);
//   localStorage.setItem('token', token);
//   return getUser();
// }

// export async function login(credentials) {
//   // Delegate the AJAX request to the users-api.js
//   // module.
//   const token = await usersAPI.login(credentials);
//   localStorage.setItem('token', token);
//   return getUser();
// }

// export function logOut() {
//   localStorage.removeItem('token');
// }

// export function getToken() {
//   // getItem will return null if the key does not exists
//   const token = localStorage.getItem('token');
//   if (!token) return null;
//   const payload = JSON.parse(atob(token.split('.')[1]));
//   // A JWT's exp is expressed in seconds, not miliseconds
//   if (payload.exp * 1000 < Date.now()) {
//     // Token has expired
//     localStorage.removeItem('token');
//     return null;
//   }
//   return token;
// }

// export function getUser() {
//   const token = getToken();
//   return token ? JSON.parse(atob(token.split('.')[1])).user : null;
// }

// export function checkToken() {
//   // We can't forget how to use .then with promises
//   return usersAPI.checkToken()
//     .then(dateStr => new Date(dateStr));
// }


   
// Service modules export business/app logic
// such as managing tokens, etc.
// Service modules often depend upon API modules
// for making AJAX requests to the server.

import * as usersAPI from './users-api';

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}

export async function login(credentials) {
  // Delegate the AJAX request to the users-api.js
  // module.
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token);
  return getUser();
}

export function logOut() {
  localStorage.removeItem('token');
}

export function getToken() {
  // getItem will return null if the key does not exists
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's exp is expressed in seconds, not miliseconds
  if (payload.exp * 1000 < Date.now()) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function checkToken() {
  // We can't forget how to use .then with promises
  return usersAPI.checkToken()
    .then(dateStr => new Date(dateStr));
}