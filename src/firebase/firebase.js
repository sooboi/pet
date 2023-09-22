// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg5wwUf1E2uiNp1h9wEsywKuldCsEtcO4",
  authDomain: "soo-pet.firebaseapp.com",
  projectId: "soo-pet",
  storageBucket: "soo-pet.appspot.com",
  messagingSenderId: "537531126901",
  appId: "1:537531126901:web:ecbb01aa77e351c587d43c",
  measurementId: "G-9Q7Z81QR0R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/** 회원가입 기능 */
export async function signIn(email, password, name) {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    // 회원가입 성공시
    await updateProfile(user, {
      displayName: name,
    });
    console.log("회원가입 성공");
    console.log(user);
    // 회원가입 실패시
  } catch (error) {
    console.error(error);
  }
}

/** 로그인 기능 */
export async function signUp(email, password) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // 로그인 성공시
      const user = userCredential.user;
      console.log(user);
      console.log("로그인 성공");
      // 로그인 실패시
    })
    .catch((error) => {
      console.error(error);
    });
}
