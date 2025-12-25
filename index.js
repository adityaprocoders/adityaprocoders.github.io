
const projects = [
    { title: "E-Commerce System", desc: "Secure full-stack shopping platform.", tech: "MERN Stack" },
    { title: "Admin Dashboard", desc: "Real-time analytics & reports.", tech: "React + Charts" },
    { title: "Task Manager", desc: "Productivity & workflow tool.", tech: "Vanilla JS" }
];

const projectContainer = document.getElementById("project-container");

projectContainer.innerHTML = projects.map(p => `
    <div class="project-card">
        <i class="fas fa-code" style="font-size:2rem;color:var(--primary)"></i>
        <h3 style="margin:15px 0">${p.title}</h3>
        <p>${p.desc}</p>
        <strong style="font-size:.85rem">${p.tech}</strong>
    </div>
`).join("");

/* =====================
   DARK MODE
===================== */
const themeBtn = document.getElementById("theme-btn");
const body = document.body;

themeBtn.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "dark") {
        body.removeAttribute("data-theme");
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.setAttribute("data-theme", "dark");
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

/* =====================
   MOBILE MENU
===================== */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:adityaprocoders@gmail.com
        ?subject=New Website Inquiry from ${name}
        &body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    window.location.href = mailtoLink;
});
