const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyCaNSoyN7vlfX_a8zjgMxdB9HjOhy66Ps8",
    authDomain: "nuxt-zakiyama-app.firebaseapp.com",
    databaseURL: "https://nuxt-zakiyama-app.firebaseio.com",
    projectId: "nuxt-zakiyama-app",
    storageBucket: "nuxt-zakiyama-app.appspot.com",
    messagingSenderId: "726050462461"
  };
  firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

const dname = 'zakiyama';
const json = {
    hoge: 'huga',
    type: 'love',
    array: ['11','33']
};

// firebaseのcollection('コレクション名').doc(ドキュメント名);
const ref = db.collection('test').doc(dname);

// ref.set(json).then(() => {
//     // 関数が終わったら何かを実行するという昔の書き方
// });

(async() => {
    await ref.set(json);
    console.log('🎉イェーーーーーーーーーーーーーーーイ🎉');
})();


console.log('🌸さくLOOOOOOOOOOOOVE❤️');


(async() => {
    const hoge = await ref.get();
    console.log(hoge.data());
})();


console.log('🌸さくLOOOOOOOOOOOOVE❤️')
