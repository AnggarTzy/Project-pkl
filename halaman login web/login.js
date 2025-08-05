const form = document.getElementById('loginForm');
const userError = document.getElementById('userError');
const passError = document.getElementById('passError');
const registerLink = document.getElementById('registerLink');


const akunTersedia = JSON.parse(localStorage.getItem("akun")) || [];


form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  let valid = true;

  
  if (username === "") {
    userError.textContent = "Username tidak boleh kosong!";
    valid = false;
  } else {
    userError.textContent = "";
  }

  if (password === "") {
    passError.textContent = "Password tidak boleh kosong!";
    valid = false;
  } else {
    passError.textContent = "";
  }

  if (!valid) return;

  
  const akun = akunTersedia.find(user => user.username === username);

  if (!akun) {
    alert("Akun tidak ditemukan. Silakan buat akun terlebih dahulu.");
    return;
  }

  
  if (akun.password !== password) {
    alert("Password salah!");
    return;
  }

  alert("Login berhasil!\nSelamat datang, " + username);
});

registerLink.addEventListener('click', function (e) {
  e.preventDefault();
  alert("Silakan buat akun terlebih dahulu.");
});
