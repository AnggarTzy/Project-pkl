const form = document.getElementById('registerForm');
const newUserError = document.getElementById('newUserError');
const newPassError = document.getElementById('newPassError');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('newUsername').value.trim();
  const password = document.getElementById('newPassword').value.trim();

  let valid = true;

  
  if (username === "") {
    newUserError.textContent = "Username tidak boleh kosong!";
    valid = false;
  } else {
    newUserError.textContent = "";
  }

  
  if (password === "") {
    newPassError.textContent = "Password tidak boleh kosong!";
    valid = false;
  } else {
    newPassError.textContent = "";
  }

  if (!valid) return;

  
  const akunTersimpan = JSON.parse(localStorage.getItem("akun")) || [];

  
  const duplikat = akunTersimpan.find(user => user.username === username);
  if (duplikat) {
    alert("Username sudah digunakan, silakan pilih yang lain.");
    return;
  }

  akunTersimpan.push({ username, password });
  localStorage.setItem("akun", JSON.stringify(akunTersimpan));

  alert("Registrasi berhasil! Silakan login.");
  window.location.href = "login.html";
});