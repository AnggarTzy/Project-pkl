const form = document.getElementById('loginForm');
const userError = document.getElementById('userError');
const passError = document.getElementById('passError');
const registerLink = document.getElementById('registerLink');

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const akunTersedia = JSON.parse(localStorage.getItem("akun")) || [];


usernameInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault(); 
    passwordInput.focus();
  }
});

passwordInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault(); 
    form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

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
  window.location.href = "home.html";
});

registerLink.addEventListener('click', function (e) {
  e.preventDefault();
  alert("Silakan buat akun terlebih dahulu.");
  window.location.href = "register.html";
});