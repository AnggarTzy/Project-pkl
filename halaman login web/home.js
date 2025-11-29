  const username = localStorage.getItem("username");

  if (username) {
    document.getElementById("welcome-message").textContent =
      `Hai ${username}, selamat datang di website kami!`;
  }
