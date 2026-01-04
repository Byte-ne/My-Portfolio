const portfolioData = {
  name: "Tanay Mishra",
  tagline: "Passionate Coder & Problem Solver",
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
  projects: [
    "TRASHi - Waste Management App", 
    "Password Cracker (Educational)", 
    "Hangman Game with Tkinter", 
    "Data Handling Projects"
  ],
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

// ============================================
// GSAP + ScrollTrigger Setup
// ============================================
gsap.registerPlugin(ScrollTrigger);

// ============================================
// Custom Cursor
// ============================================
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let outlineX = 0;
let outlineY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  // Immediate update for dot
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top = mouseY + 'px';
});

// Smooth follow for outline
function animateCursor() {
  outlineX += (mouseX - outlineX) * 0.15;
  outlineY += (mouseY - outlineY) * 0.15;
  
  cursorOutline.style.left = outlineX + 'px';
  cursorOutline.style.top = outlineY + 'px';
  
  requestAnimationFrame(animateCursor);
}

animateCursor();

// Hover effects for interactive elements
const hoverElements = document.querySelectorAll('a, button, .btn, .project-card-large, .achievement-badge, .skill-card, .about-card, .contact-card');

hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    document.body.classList.add('cursor-hover');
  });
  
  el.addEventListener('mouseleave', () => {
    document.body.classList.remove('cursor-hover');
  });
});

// ============================================
// Loading Screen
// ============================================
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  
  gsap.to(loadingScreen, {
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    ease: 'power2.inOut',
    onComplete: () => {
      loadingScreen.style.display = 'none';
      initHeroAnimations();
    }
  });
});

// ============================================
// Hero Section Animations
// ============================================
function initHeroAnimations() {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
  
  // Animate hero label
  tl.to('.hero-label', {
    opacity: 1,
    y: 0,
    duration: 0.8
  });
  
  // Animate each title line with split effect
  const lines = document.querySelectorAll('.hero-title-line');
  lines.forEach((line, index) => {
    tl.to(line, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power4.out'
    }, index * 0.2);
  });
  
  // Animate subtitle, description, CTA
  tl.to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
    .to('.hero-description', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
    .to('.hero-cta', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
    .to('.hero-scroll-indicator', { opacity: 1, duration: 0.8 }, '-=0.3');
}

// ============================================
// Magnetic Button Effect
// ============================================
document.querySelectorAll('.magnetic-btn').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
  
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  });
});

// ============================================
// Navbar Scroll Effect
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ============================================
// Smooth Scroll Navigation
// ============================================
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      gsap.to(window, {
        scrollTo: {
          y: targetSection,
          offsetY: 80
        },
        duration: 1.5,
        ease: 'power3.inOut'
      });
    }
    
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// ============================================
// Scroll to Top Button
// ============================================
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  gsap.to(window, {
    scrollTo: { y: 0 },
    duration: 1.5,
    ease: 'power3.inOut'
  });
});

// ============================================
// Animated Particles
// ============================================
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 3 + 1 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = `rgba(255, 140, 66, ${Math.random() * 0.3 + 0.1})`;
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    particlesContainer.appendChild(particle);
    
    gsap.to(particle, {
      y: `random(-100, 100)`,
      x: `random(-100, 100)`,
      duration: `random(10, 20)`,
      repeat: -1,
      yoyo: true,
      ease: 'none'
    });
  }
}

createParticles();

// ============================================
// Set Basic Info
// ============================================
document.getElementById("heroName").textContent = portfolioData.name;
document.getElementById("aboutText").textContent = portfolioData.about;
document.getElementById("locationText").textContent = portfolioData.address;

// Typing effect for tagline
function typeWriter(element, text, speed = 80) {
  if (!element) return;
  
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      const cursor = document.createElement('span');
      cursor.style.animation = 'blink 1s infinite';
      cursor.style.marginLeft = '2px';
      cursor.textContent = '|';
      element.appendChild(cursor);
    }
  }
  
  type();
}

setTimeout(() => {
  const typingElement = document.getElementById('typingEffect');
  if (typingElement) {
    typeWriter(typingElement, portfolioData.tagline);
  }
}, 2500);

// Add blink animation
const style = document.createElement('style');
style.textContent = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;
document.head.appendChild(style);

// ============================================
// Hobbies
// ============================================
const hobbiesInline = document.getElementById("hobbiesInline");
portfolioData.hobbies.forEach(hobby => {
  const tag = document.createElement("span");
  tag.className = "hobby-tag";
  tag.textContent = hobby;
  hobbiesInline.appendChild(tag);
});

// ============================================
// Skills with GSAP Scroll Animations
// ============================================
const skillsContainer = document.getElementById("skillsContainer");
portfolioData.skills.forEach((skill, index) => {
  const skillCard = document.createElement("div");
  skillCard.className = "skill-card";
  skillCard.innerHTML = `
    <div class="skill-header">
      <div class="skill-name">${skill.name}</div>
      <div class="skill-percentage">${skill.percentage}%</div>
    </div>
    <div class="skill-bar">
      <div class="skill-fill" data-width="${skill.percentage}%"></div>
    </div>
  `;
  skillsContainer.appendChild(skillCard);
  
  // Animate card on scroll
  gsap.from(skillCard, {
    scrollTrigger: {
      trigger: skillCard,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: index * 0.1,
    ease: 'power3.out'
  });
  
  // Animate skill bar on scroll
  const skillFill = skillCard.querySelector('.skill-fill');
  gsap.to(skillFill, {
    scrollTrigger: {
      trigger: skillCard,
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    },
    width: skill.percentage + '%',
    duration: 1.5,
    delay: index * 0.1 + 0.3,
    ease: 'power2.out'
  });
});

// ============================================
// Projects - Horizontal Scroll with Parallax
// ============================================
const projectsTrack = document.getElementById("projectsTrack");
if (projectsTrack) {
  const projectImages = [
    'https://picsum.photos/600/400?random=1',
    'https://picsum.photos/600/400?random=2',
    'https://picsum.photos/600/400?random=3',
    'https://picsum.photos/600/400?random=4'
  ];

  portfolioData.projects.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card-large";
    projectCard.innerHTML = `
      <img src="${projectImages[index]}" alt="${project}" class="project-image">
      <div class="project-overlay">
        <div class="project-title">${project}</div>
        <div class="project-description">Built with modern technologies and best practices</div>
      </div>
    `;
    projectsTrack.appendChild(projectCard);
    
    // Animate on scroll
    gsap.from(projectCard, {
      scrollTrigger: {
        trigger: projectCard,
        start: 'left center',
        toggleActions: 'play none none reverse'
      },
      scale: 0.9,
      opacity: 0.5,
      duration: 0.8,
      ease: 'power2.out'
    });
  });
}

// ============================================
// Experience Timeline with Scroll Animations
// ============================================
const timelineContainer = document.getElementById("timelineContainer");
portfolioData.experience.forEach((exp, index) => {
  const timelineItem = document.createElement("div");
  timelineItem.className = "timeline-item";
  timelineItem.innerHTML = `
    <div class="timeline-date">${exp.date}</div>
    <div class="timeline-title">${exp.title}</div>
    <div class="timeline-description">${exp.desc}</div>
  `;
  timelineContainer.appendChild(timelineItem);
  
  gsap.from(timelineItem, {
    scrollTrigger: {
      trigger: timelineItem,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    x: -60,
    opacity: 0,
    duration: 0.8,
    delay: index * 0.15,
    ease: 'power3.out'
  });
});

// ============================================
// Achievements with Stagger
// ============================================
const achievementsGrid = document.getElementById("achievementsGrid");
portfolioData.achievements.forEach((achievement, index) => {
  const badge = document.createElement("div");
  badge.className = "achievement-badge";
  badge.innerHTML = `
    <div class="badge-icon">${achievement.icon}</div>
    <div class="badge-text">${achievement.text}</div>
  `;
  achievementsGrid.appendChild(badge);
  
  gsap.from(badge, {
    scrollTrigger: {
      trigger: badge,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    scale: 0.5,
    opacity: 0,
    rotation: -10,
    duration: 0.6,
    delay: index * 0.1,
    ease: 'back.out(2)'
  });
});

// ============================================
// Section Headers Parallax
// ============================================
gsap.utils.toArray('.section-header h2').forEach(header => {
  gsap.from(header, {
    scrollTrigger: {
      trigger: header,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1
    },
    y: 100,
    opacity: 0.3,
    ease: 'none'
  });
});

// ============================================
// About Cards Animation
// ============================================
gsap.utils.toArray('.about-card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: index * 0.1,
    ease: 'power3.out'
  });
});

// ============================================
// Contact Cards Animation
// ============================================
gsap.utils.toArray('.contact-card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: index * 0.15,
    ease: 'power3.out'
  });
});

// ============================================
// Studies Graph Canvas
// ============================================
const canvas = document.getElementById("studyGraph");
if (canvas) {
  const ctx = canvas.getContext("2d");
  const labels = Object.keys(portfolioData.studies);
  const values = Object.values(portfolioData.studies);
  
  canvas.width = 300;
  canvas.height = 180;
  
  const barWidth = 50;
  const padding = 30;
  const maxHeight = 120;
  const chartStartY = 150;
  
  // Draw grid
  ctx.strokeStyle = "rgba(255, 140, 66, 0.1)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 5; i++) {
    const y = chartStartY - (i * maxHeight / 5);
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(padding + labels.length * barWidth + 20, y);
    ctx.stroke();
    
    ctx.fillStyle = "rgba(255, 140, 66, 0.6)";
    ctx.font = "10px Inter";
    ctx.textAlign = "right";
    ctx.fillText((i * 20) + "%", padding - 5, y + 3);
  }
  
  labels.forEach((subject, i) => {
    const barHeight = (values[i] / 100) * maxHeight;
    const x = i * barWidth + padding + 10;
    const y = chartStartY - barHeight;
    
    const gradient = ctx.createLinearGradient(x, chartStartY, x, y);
    gradient.addColorStop(0, "#ff6b35");
    gradient.addColorStop(1, "#f7931e");
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, 35, barHeight);
    
    ctx.strokeStyle = "#ff8c42";
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, 35, barHeight);
    
    ctx.fillStyle = "#ff8c42";
    ctx.font = "bold 11px Inter";
    ctx.textAlign = "center";
    ctx.fillText(subject, x + 17.5, chartStartY + 15);
    
    ctx.font = "bold 10px Inter";
    ctx.fillText(values[i], x + 17.5, y - 5);
  });
}