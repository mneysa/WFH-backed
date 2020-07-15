/*
 * add your express server app here
 * for this project we don't need a server because we are only running migrations
 * */

import { getDatabase } from './database';
import { User } from './database/models';

// here is how you can get your database reference
//getDatabase().then(async db => {
  // your database connection is setup
  // and you can now safely run your queries on your models

  // lets find a user
//  const user = await User.findOne();

//  if (!user) {
//    console.log('Sorry, could not find any user...');
//    return;
//  }
//  const { displayName, language } = user;
//  console.log('User', displayName, 'found. User speaks', language);
// });
