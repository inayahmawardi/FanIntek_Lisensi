// Import Firebase SDK modular
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBe8dlow52Y7aSBxDTOwyo3nS5ZMg0gzJ8",
  authDomain: "fandashboard.firebaseapp.com",
  projectId: "fandashboard",
  storageBucket: "fandashboard.appspot.com", // <- perbaiki, harus .appspot.com
  messagingSenderId: "8318759415",
  appId: "1:8318759415:web:dc8c427606488a8b16bef2",
  measurementId: "G-HHCQEMEXF4"
};

// Inisialisasi Firebase dan Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fungsi submit form
document.getElementById('inputForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Ambil data dari form
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
        documentNumber: "" // bisa diisi otomatis jika perlu
    };

    // Status message element
    const statusMessage = document.getElementById('messageStatus');

    try {
        // Simpan ke koleksi "licenses"
        await addDoc(collection(db, "licenses"), data);
        statusMessage.textContent = 'Data berhasil dikirim!';
        statusMessage.style.color = 'green';
        document.getElementById('inputForm').reset();
    } catch (error) {
        statusMessage.textContent = 'Gagal mengirim data. Silakan cek koneksi atau konfigurasi Firebase.';
        statusMessage.style.color = 'red';
        console.error(error);
    }
});
