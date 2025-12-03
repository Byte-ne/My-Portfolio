const portfolioData = {
  name: "Tanay Mishra",
  address: "Powai, Mumbai, Maharashtra, India",
  contact: "kilobyte136@gmail.com",
  github: "https://github.com/Byte-ne",
  about: "I'm a 9th grader passionate about coding, competitive programming, and building innovative projects. I love exploring new technologies and challenging myself with hackathons!",
  hobbies: ["Coding", "Hackathons", "Gaming", "Problem Solving"],
  studies: {
    Math: 95,
    Science: 90,
    English: 84,
    SST: 98
  },
  skills: [
    { name: "Python", percentage: 90 },
    { name: "JavaScript", percentage: 75 },
    { name: "Web Development", percentage: 80 },
    { name: "Game Development", percentage: 70 }
  ],
  projects: ["TRASHi - Waste Management App", "Password Cracker (Educational)", "Hangman Game with Tkinter", "Data Handling Projects"],
  achievements: [
    { icon: "🏆", text: "Hackathon Enthusiast" },
    { icon: "⭐", text: "Top Performer" },
    { icon: "🎖️", text: "Code Master" },
    { icon: "🚀", text: "Innovation Leader" }
  ],
  experience: [
    { date: "2024 - Present", title: "Coding Enthusiast", desc: "Building projects and learning new technologies" },
    { date: "2023 - 2024", title: "Web Development Journey", desc: "Started learning HTML, CSS, and JavaScript" },
    { date: "2022 - 2023", title: "Python Fundamentals", desc: "Learned Python basics and game development" }
  ]
};

// Set basic info
document.getElementById("name").textContent = portfolioData.name;
document.getElementById("address").textContent = portfolioData.address;
document.getElementById("contact").textContent = portfolioData.contact;
document.getElementById("aboutText").textContent = portfolioData.about;

// Hobbies
const hobbiesList = document.getElementById("hobbies");
portfolioData.hobbies.forEach(hobby => {
  const li = document.createElement("li");
  li.textContent = hobby;
  hobbiesList.appendChild(li);
});

// Projects
const projectsList = document.getElementById("projectsList");
portfolioData.projects.forEach(project => {
  const li = document.createElement("li");
  li.textContent = project;
  projectsList.appendChild(li);
});

// Skills with bars
const skillsContainer = document.getElementById("skills");
skillsContainer.innerHTML = "<h2>Skills</h2>";
portfolioData.skills.forEach((skill, index) => {
  const skillItem = document.createElement("div");
  skillItem.className = "skill-item";
  skillItem.style.animationDelay = (0.1 * (index + 1)) + "s";
  skillItem.innerHTML = `
    <div class="skill-name">
      <span>${skill.name}</span>
      <span>${skill.percentage}%</span>
    </div>
    <div class="skill-bar">
      <div class="skill-fill" style="width: ${skill.percentage}%;"></div>
    </div>
  `;
  skillsContainer.appendChild(skillItem);
});

// Studies graph (bar chart)
const canvas = document.getElementById("studyGraph");
const ctx = canvas.getContext("2d");
const labels = Object.keys(portfolioData.studies);
const values = Object.values(portfolioData.studies);

// Draw bar chart with better styling
const barWidth = 70;
const padding = 50;
const maxHeight = 150;
const chartStartY = 180;

// Draw grid lines
ctx.strokeStyle = "rgba(243, 156, 18, 0.1)";
ctx.lineWidth = 1;
for (let i = 0; i <= 5; i++) {
  const y = chartStartY - (i * maxHeight / 5);
  ctx.beginPath();
  ctx.moveTo(padding, y);
  ctx.lineTo(padding + labels.length * barWidth + 20, y);
  ctx.stroke();
  
  // Draw percentage labels
  ctx.fillStyle = "rgba(243, 156, 18, 0.6)";
  ctx.font = "12px Arial";
  ctx.textAlign = "right";
  ctx.fillText((i * 20) + "%", padding - 10, y + 4);
}

labels.forEach((subject, i) => {
  const barHeight = (values[i] / 100) * maxHeight;
  const x = i * barWidth + padding + 10;
  const y = chartStartY - barHeight;
  
  // Draw gradient bar
  const gradient = ctx.createLinearGradient(x, chartStartY, x, y);
  gradient.addColorStop(0, "#f39c12");
  gradient.addColorStop(1, "#e67e22");
  ctx.fillStyle = gradient;
  ctx.fillRect(x, y, 50, barHeight);
  
  // Draw bar border
  ctx.strokeStyle = "#f39c12";
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, 50, barHeight);
  
  // Draw subject label
  ctx.fillStyle = "#f39c12";
  ctx.font = "bold 14px Arial";
  ctx.textAlign = "center";
  ctx.fillText(subject, x + 25, chartStartY + 20);
  
  // Draw value on top of bar
  ctx.fillStyle = "#f39c12";
  ctx.font = "bold 12px Arial";
  ctx.textAlign = "center";
  ctx.fillText(values[i], x + 25, y - 8);
});

// Achievements
const achievementsContainer = document.getElementById("achievements");
achievementsContainer.innerHTML = "<h2 style='grid-column: 1 / -1;'>Achievements</h2>";
portfolioData.achievements.forEach((achievement, index) => {
  const badge = document.createElement("div");
  badge.className = "badge";
  badge.style.animationDelay = (0.1 * (index + 1)) + "s";
  badge.innerHTML = `
    <div class="badge-icon">${achievement.icon}</div>
    <div class="badge-text">${achievement.text}</div>
  `;
  achievementsContainer.appendChild(badge);
});

// Experience Timeline
const experienceContainer = document.getElementById("experience");
experienceContainer.innerHTML = "<h2>Experience & Journey</h2>";
portfolioData.experience.forEach((exp, index) => {
  const timelineItem = document.createElement("div");
  timelineItem.className = "timeline-item";
  timelineItem.style.animationDelay = (0.1 * (index + 1)) + "s";
  timelineItem.innerHTML = `
    <div class="timeline-date">${exp.date}</div>
    <div class="timeline-title">${exp.title}</div>
    <div class="timeline-description">${exp.desc}</div>
  `;
  experienceContainer.appendChild(timelineItem);
});

// Contact Section
const contactContainer = document.getElementById("contact");
contactContainer.innerHTML = `
  <h2>Let's Connect</h2>
  <p>Feel free to reach out to me for collaborations or just a friendly hello!</p>
  <div class="contact-buttons">
    <a href="mailto:kilobyte136@gmail.com" class="contact-btn">📧 Email</a>
    <a href="https://github.com/Byte-ne" target="_blank" class="contact-btn">🐙 GitHub</a>
  </div>
  <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid rgba(243, 156, 18, 0.3);">
    <p style="font-size: 0.9rem; opacity: 0.8;">
      <strong>Location:</strong> BSNL Telecom Staff Qtrs, Opp IIT Main Gate, Jhelum-106, Powai, Mumbai - 400076, Maharashtra, India
    </p>
  </div>
`;