import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Konfigurasi Firebase kamu
const firebaseConfig = {
  apiKey: "AIzaSyBe8dlow52Y7aSBxDTOwyo3nS5ZMg0gzJ8",
  authDomain: "fandashboard.firebaseapp.com",
  projectId: "fandashboard",
  storageBucket: "fandashboard.appspot.com",
  messagingSenderId: "8318759415",
  appId: "1:8318759415:web:dc8c427606488a8b16bef2",
  measurementId: "G-HHCQEMEXF4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('inputForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const data = {
        companyName: document.getElementById('companyName').value,
        applicantName: document.getElementById('applicantName').value,
        position: document.getElementById('position').value,
        projectName: document.getElementById('projectName').value,
        submissionDate: document.getElementById('submissionDate').value,
        status: document.getElementById('statusInput').value,
        applicationName: document.getElementById('applicationName').value,
        type: document.getElementById('type').value,
        quantity: document.getElementById('quantity').value,
        duration: document.getElementById('duration').value,
        purpose: document.getElementById('purpose').value,
        description: document.getElementById('description').value,
        documentNumber: "",
        timestamp: new Date().toISOString()
    };

    try {
        await addDoc(collection(db, "licenses"), data);
        document.getElementById('status').textContent = 'Data berhasil dikirim!';
        document.getElementById('inputForm').reset();
    } catch (error) {
        document.getElementById('status').textContent = 'Gagal mengirim data.';
        console.error(error);
    }
});

