const form = document.getElementById('loginForm');
const userError = document.getElementById('userError');
const passError = document.getElementById('passError');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  let valid = true;

  // Validasi Username
  if (username === "") {
    userError.textContent = "Username tidak boleh kosong!";
    valid = false;
  } else {
    userError.textContent = "";
  }

  // Validasi Password
  if (password === "") {
    passError.textContent = "Password tidak boleh kosong!";
    valid = false;
  } else {
    passError.textContent = "";
  }

  // Jika valid, tampilkan alert
  if (valid) {
    alert("Login berhasil!\nUsername: " + username);
    // Tambahkan logic autentikasi di sini jika diperlukan
  }
});
