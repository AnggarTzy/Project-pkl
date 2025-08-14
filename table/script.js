let count = 1;

document.getElementById('addButton').addEventListener('click', function () {
  const inputText = document.getElementById('inputText').value.trim();
  if (inputText === '') return;

  const tableBody = document.getElementById('tableBody');
  const row = document.createElement('tr');

  const noCell = document.createElement('td');
  noCell.textContent = count++;

  const textCell = document.createElement('td');
  textCell.textContent = inputText;

  const deleteCell = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Hapus';
  deleteBtn.className = 'deleteBtn';
  deleteBtn.addEventListener('click', function () {
    tableBody.removeChild(row);
    updateNumbers();
  });
  deleteCell.appendChild(deleteBtn);

  row.appendChild(noCell);
  row.appendChild(textCell);
  row.appendChild(deleteCell);

  tableBody.appendChild(row);

  document.getElementById('inputText').value = '';
});

function updateNumbers() {
  const rows = document.querySelectorAll('#tableBody tr');
  count = 1;
  rows.forEach(row => {
    row.firstElementChild.textContent = count++;
  });
}

document.getElementById('resetButton').addEventListener('click', function () {
  if (confirm("Yakin ingin menghapus semua data?")) {
    document.getElementById('tableBody').innerHTML = '';
    count = 1;
  }
});
