// Typed.js animation
var typeData = new Typed(".role", {
  strings: [
    "Java Developer",
    "Backend Developer",
    "Web Developer",
    "Problem Solver"
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1000,
});

// Open modal with project content
function openModal(projectId) {
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");

  modal.style.display = "block";

  if (projectId === "face") {
    modalTitle.innerText = "Face Recognition System";
    modalText.innerText = "This is a real-time face recognition system built with Python and OpenCV. It can detect and recognize human faces using webcam feed, useful for attendance systems, secure logins, or automated door locks.";
  } else if (projectId === "quiz") {
    modalTitle.innerText = "Quiz Website";
    modalText.innerText = "An interactive and real-world quiz website developed using HTML, CSS, and JavaScript. It displays multiple-choice questions, calculates scores, and provides instant feedback. Useful for e-learning and self-evaluation.";
  } else {
    modalTitle.innerText = "Project Info";
    modalText.innerText = "More details will be available soon.";
  }
}

// Close the modal
function closeModal() {
  const modal = document.getElementById("projectModal");
  modal.style.display = "none";
}

// Save contact message to file
function saveMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  const content = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n---\n`;
  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `message_from_${name.replace(/\\s+/g, "_")}.txt`;
  link.click();
}
