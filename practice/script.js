// Tampilkan catatan saat halaman dibuka
window.onload = function () {
  displayNotes();
};


function addNote() {
  const noteInput = document.getElementById("noteInput");
  const noteText = noteInput.value.trim();

  if (noteText === "") {
    alert("Catatan tidak boleh kosong!");
    return;
  }

  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  const newNote = {
    text: noteText,
    date: new Date().toLocaleString()
  };

  notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notes));

  noteInput.value = "";
  displayNotes();
}


function displayNotes() {
  const notesContainer = document.getElementById("notesContainer");
  notesContainer.innerHTML = "";

  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  if (notes.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "Belum ada catatan.";
    emptyMessage.style.textAlign = "center";
    emptyMessage.style.color = "#888";
    emptyMessage.style.fontStyle = "italic";
    notesContainer.appendChild(emptyMessage);
    return;
  }

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.innerHTML = `
      <p>${note.text}</p>
      <small>${note.date}</small>
      <button class="delete-btn" onclick="deleteNote(${index})">❌</button>
    `;
    notesContainer.appendChild(noteDiv);
  });
}


function deleteNote(index) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}
