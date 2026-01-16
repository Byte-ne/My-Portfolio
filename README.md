# Tanay Mishra's Portfolio

A modern, interactive portfolio website showcasing my journey as a passionate coder and problem solver.

## 🚀 Live Demo

[View Portfolio](https://byte-ne.github.io/My-Portfolio/) 

## 📋 Description

This is my personal portfolio website, built as a 9th grader exploring the world of web development and programming. The site features a clean, modern design with smooth animations and interactive elements, highlighting my skills, projects, achievements, and experience.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Powered by GSAP for engaging user experience
- **Custom Cursor**: Interactive cursor with hover effects
- **Particle Background**: Animated floating particles for visual appeal
- **Typing Effect**: Dynamic typing animation for tagline
- **Magnetic Buttons**: Interactive button effects that follow mouse movement
- **Scroll Animations**: Elements animate as they come into view
- **Dark Mode Sections**: Alternating dark/light sections for visual variety
- **Skills Visualization**: Progress bars and charts for skills and academic performance
- **Project Showcase**: Horizontal scrolling project cards
- **Timeline**: Experience and journey timeline
- **Achievement Badges**: Highlighted accomplishments and awards

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Animations**: GSAP (GreenSock Animation Platform)
- **Icons**: Font Awesome
- **Typography**: Google Fonts (Inter)
- **Charts**: Canvas API for custom graphs

## 📁 Project Structure

```
My-Portfolio/
├── index.html          # Main HTML file
├── style.css           # Custom styles
├── data.js             # Portfolio data and JavaScript functionality
├── assets/             # Static assets (icons, images)
│   ├── github.svg
│   ├── html5.svg
│   ├── javascript.svg
│   └── python.svg
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Byte-ne/My-Portfolio.git
   cd My-Portfolio
   ```

2. Open `index.html` in your web browser

That's it! No build process or dependencies required - it's a vanilla HTML/CSS/JS project.

## 📊 Portfolio Sections

- **Home**: Hero section with introduction and call-to-action
- **About**: Personal information, education, and interests
- **Skills**: Technical skills with progress bars
- **Projects**: Showcase of featured projects
- **Experience**: Timeline of coding journey
- **Achievements**: Notable accomplishments and awards
- **Contact**: Contact information and social links

## 🎯 Skills Highlighted

- Python (90%)
- JavaScript (75%)
- Web Development (80%)
- Game Development (70%)

## 📈 Academic Performance

- Math: 95%
- Science: 90%
- English: 84%
- SST (Social Studies): 98%

## 🏆 Featured Projects

- TRASHi - Waste Management App
- Password Cracker (Educational)
- Hangman Game with Tkinter
- Data Handling Projects

## 📧 Contact Form Setup

The contact form uses EmailJS to send emails directly from the client-side. To enable the contact form functionality:

### 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### 2. Set up Email Service
1. Go to **Email Services** in your dashboard
2. Add a new service (Gmail, Outlook, etc.)
3. Connect your email account and verify

### 3. Create Email Template
1. Go to **Email Templates**
2. Create a new template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{reply_to}}` - Reply-to email

Example template:
```
Subject: {{subject}}

Hi Tanay,

You have received a new message from your portfolio website:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

### 4. Configure Your Portfolio
1. Open `data.js`
2. Replace the placeholder values:
   ```javascript
   const EMAILJS_SERVICE_ID = 'your_service_id_here';
   const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
   const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
   ```
3. Save the file

### 5. Test the Contact Form
- Fill out the contact form on your website
- Submit it to ensure emails are being sent to kilobyte136@gmail.com

**Note**: The contact form includes validation and will show an alert if EmailJS credentials are not configured.

## 📞 Contact

- **Email**: kilobyte136@gmail.com
- **GitHub**: [@Byte-ne](https://github.com/Byte-ne)
- **Location**: Powai, Mumbai, Maharashtra, India

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are always welcome! Feel free to open an issue or reach out.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ and lots of ☕ by Tanay Mishra**
