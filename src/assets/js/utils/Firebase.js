import { initializeApp } from "firebase/app";
export default class Firebase {
  constructor() {
    this.init();
  }

  init(){

    // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB0wlKweVGKeK3RjfitMJaF66LX6uL3nE0",
    authDomain: "test-app-kyoin0212.firebaseapp.com",
    projectId: "test-app-kyoin0212",
    storageBucket: "test-app-kyoin0212.appspot.com",
    messagingSenderId: "204776768601",
    appId: "1:204776768601:web:949bb293bf4342bbea5d48"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  }
}
