//configuracion de firebase 

var firebaseConfig = {
    apiKey: process.env.REACT_APP_KEY,
    authDomain: "app-next-product.firebaseapp.com",
    databaseURL: "https://app-next-product.firebaseio.com",
    projectId: "app-next-product",
    storageBucket: "app-next-product.appspot.com",
    messagingSenderId: "896911581035",
    appId: process.env.REACT_APP_ID
  };

  export default firebaseConfig;
