var config = {
    apiKey: "AIzaSyCTz57JKrdi9KedCkOI75L3Klv7Ia3gkVQ",
    authDomain: "my-testing-project-24ba3.firebaseapp.com",
    databaseURL: "https://my-testing-project-24ba3.firebaseio.com",
    projectId: "my-testing-project-24ba3",
    storageBucket: "my-testing-project-24ba3.appspot.com",
    messagingSenderId: "850341569529"
};
firebase.initializeApp(config);

var database = firebase.database().ref('users/666');

firebase.auth().signInWithEmailAndPassword('adie.rock@yahoo.com', '123456').catch(function(error) {
    console.log('ERROR',error)
});

//firebase.database().ref('users/666').set({
//    username: 'Adie',
//    email: 'adie@rock.com'
//});

database.on('value', function(snapshot) {
    console.log('User',snapshot.val());
});


