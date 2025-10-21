// Ganti dengan konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyBe8dlow52Y7aSBxDTOwyo3nS5ZMg0gzJ8",
  authDomain: "fandashboard.firebaseapp.com",
  projectId: "fandashboard",
  storageBucket: "fandashboard.firebasestorage.app",
  messagingSenderId: "8318759415",
  appId: "1:8318759415:web:dc8c427606488a8b16bef2",
  measurementId: "G-HHCQEMEXF4"
};

// URL database Firebase (Realtime Database)
const databaseURL = "https://fandashboard-default-rtdb.firebaseio.com/";

document.getElementById('inputForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;

    // Data yang akan dikirim
    const data = {
        nama: nama,
        email: email,
        timestamp: new Date().toISOString()
    };

    // Kirim data ke Firebase Realtime Database
    fetch(`${databaseURL}/inputs.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById('status').textContent = 'Data berhasil dikirim!';
        document.getElementById('inputForm').reset();
    })
    .catch(error => {
        document.getElementById('status').textContent = 'Gagal mengirim data.';
        console.error(error);
    });
});

// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Inisialisasi Firebase
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
        status: document.getElementById('status').value,
        applicationName: document.getElementById('applicationName').value,
        type: document.getElementById('type').value,
        quantity: document.getElementById('quantity').value,
        duration: document.getElementById('duration').value,
        purpose: document.getElementById('purpose').value,
        description: document.getElementById('description').value
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
