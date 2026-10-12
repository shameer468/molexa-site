import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiEY4abq76vnPK1FkZ-e6jwPcILkXI_Fc",
  authDomain: "molexa-water.firebaseapp.com",
  projectId: "molexa-water",
  storageBucket: "molexa-water.firebasestorage.app",
  messagingSenderId: "424007978456",
  appId: "1:424007978456:web:ef24dca0fa2199e25b76ad",
  measurementId: "G-QHJSZKZKHC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);