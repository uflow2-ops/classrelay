// Firebase 설정 정보
const firebaseConfig = {
    apiKey: "AIzaSyD7bKtNK2QatwCtAm1zSyJF_qm7GWzOBEw",
    authDomain: "class-relay-app.firebaseapp.com",
    projectId: "class-relay-app",
    storageBucket: "class-relay-app.firebasestorage.app",
    messagingSenderId: "966425512589",
    appId: "1:966425512589:web:3edcdae9abe557d95370c4"
};

// Firebase 초기화 함수
async function initializeFirebase() {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js");
    const { getFirestore } = await import("https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js");
    
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    return { app, db };
}

// 필요한 Firestore 함수들을 export
export { firebaseConfig, initializeFirebase };