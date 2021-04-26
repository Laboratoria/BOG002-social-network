import * as admin from 'firebase-admin';
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
  });

  var refreshToken; // Get refresh token from OAuth2 flow

admin.initializeApp({
  credential: admin.credential.refreshToken(refreshToken),
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

admin.initializeApp(defaultAppConfig);

// Initialize another app with a different config
var otherApp = admin.initializeApp(otherAppConfig, 'other');

console.log(admin.app().name);  // '[DEFAULT]'
console.log(otherApp.name);     // 'other'

// Use the shorthand notation to retrieve the default app's services
 var defaultAuth = admin.auth();
var defaultDatabase = admin.database();

// Use the otherApp variable to retrieve the other app's services
var otherAuth = otherApp.auth();
var otherDatabase = otherApp.database();