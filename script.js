// Data contoh tugas mahasiswa.
const tasks = [
  { id: 1, title: "Menyelesaikan laporan praktikum", course: "Praktikum", dueDate: "2026-11-10", completed: false },
  { id: 2, title: "Membuat desain halaman website", course: "Pemrograman Web", dueDate: "2026-11-12", completed: false },
  { id: 3, title: "Mempelajari materi basis data", course: "Basis Data", dueDate: "2026-11-08", completed: true },
  { id: 4, title: "Mengerjakan rangkuman materi", course: "Pengantar Teknologi", dueDate: "2026-11-15", completed: false },
  { id: 5, title: "Mengumpulkan tugas presentasi", course: "Komunikasi", dueDate: "2026-11-18", completed: true }
];

let currentFilter = "all";

const taskList = document.getElementById("taskList");
const totalCount = document.getElementById("totalCount");
const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");
const visibleCount = document.getElementById("visibleCount");

function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric", month: "long", year: "numeric"
  }).format(date);
}

function updateSummary() {
  const completed = tasks.filter(task => task.completed).length;
  totalCount.textContent = tasks.length;
  pendingCount.textContent = tasks.length - completed;
  completedCount.textContent = completed;
}

function renderTasks() {
  const filteredTasks = tasks.filter(task => {
    if (currentFilter === "pending") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true;
  });

  visibleCount.textContent = `${filteredTasks.length} tugas`;
  taskList.innerHTML = "";

  if (filteredTasks.length === 0) {
    taskList.innerHTML = '<div class="empty-state">Belum ada tugas pada kategori ini.</div>';
    updateSummary();
    return;
  }

  filteredTasks.forEach(task => {
    const article = document.createElement("article");
    article.className = `task-card${task.completed ? " completed" : ""}`;

    const checkButton = document.createElement("button");
    checkButton.className = "check-btn";
    checkButton.type = "button";
    checkButton.textContent = task.completed ? "✓" : "";
    checkButton.setAttribute("aria-label", task.completed ? "Tandai belum selesai" : "Tandai selesai");
    checkButton.addEventListener("click", () => toggleTask(task.id));

    const info = document.createElement("div");
    info.className = "task-info";

    const title = document.createElement("p");
    title.className = "task-title";
    title.textContent = task.title;

    const meta = document.createElement("div");
    meta.className = "task-meta";
    const course = document.createElement("span");
    course.textContent = task.course;
    const due = document.createElement("span");
    due.textContent = `Deadline: ${formatDate(task.dueDate)}`;
    meta.append(course, due);
    info.append(title, meta);

    const status = document.createElement("span");
    status.className = `status${task.completed ? " done" : ""}`;
    status.textContent = task.completed ? "Completed" : "Pending";

    article.append(checkButton, info, status);
    taskList.appendChild(article);
  });

  updateSummary();
}

function toggleTask(id) {
  const selectedTask = tasks.find(task => task.id === id);
  if (!selectedTask) return;
  selectedTask.completed = !selectedTask.completed;
  renderTasks();
}

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    document.querySelectorAll(".filter-btn").forEach(item => {
      item.classList.toggle("active", item === button);
    });
    renderTasks();
  });
});

// Menampilkan tanggal saat ini pada bagian atas halaman.
document.getElementById("todayLabel").textContent =
  new Intl.DateTimeFormat("id-ID", {
    weekday: "long", day: "numeric", month: "long"
  }).format(new Date());

renderTasks();
