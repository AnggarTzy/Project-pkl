window.onload = function() {
  displayNotes();
};

function addNote() {
  const noteInput = document.getElementById("noteInput");
  const noteText = noteInput.value.trim();
  if (noteText === "") return;

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

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.innerHTML = `
      <p>${note.text}</p>
      <small>${note.date}</small>
      <button class="delete-btn" onclick="deleteNote(${index})">×</button>
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
