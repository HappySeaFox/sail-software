import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyD83VXqJh6jDoSyKU0iAzV_S0AB_NsPeWU",
  authDomain: "sail-fe770.firebaseapp.com",
  projectId: "sail-fe770",
  storageBucket: "sail-fe770.appspot.com",
  messagingSenderId: "262768070545",
  appId: "1:262768070545:web:27a962bd225466b9bc1430",
  measurementId: "G-GSV5744NTS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
