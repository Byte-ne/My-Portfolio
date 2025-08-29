import React, { useEffect, useRef } from "react";
import { portfolioData } from "./data";
import { Chart, registerables } from "chart.js";
import "./global.css";

Chart.register(...registerables);

const App: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: portfolioData.studies.subjects,
          datasets: [
            {
              label: "Performance",
              data: portfolioData.studies.scores,
              backgroundColor: "#00e0ff",
            },
          ],
        },
        options: {
          scales: { y: { beginAtZero: true } },
        },
      });
    }
  }, []);

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="name">{portfolioData.name}</h1>

        <div className="section">
          <h2>Contact</h2>
          <ul>
            <li>Email: {portfolioData.contact.email}</li>
            <li>{portfolioData.contact.city}</li>
          </ul>
        </div>

        <div className="section">
          <h2>Interests</h2>
          <ul>
            {portfolioData.interests.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <p className="footer">© 2025 My Portfolio</p>
      </aside>

      {/* Main */}
      <main className="main">
        <section id="about">
          <h2>About Me</h2>
          <p>Short introduction goes here...</p>
        </section>

        <section id="studies">
          <h2>My Studies</h2>
          <canvas ref={chartRef}></canvas>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="projects">
            {portfolioData.projects.map((proj, idx) => (
              <div className="project-card" key={idx}>
                {proj}
              </div>
            ))}
          </div>
        </section>

        <section id="school">
          <h2>My School</h2>
          <iframe
            src={portfolioData.school.mapUrl}
            width="100%"
            height="300"
            style={{ border: 0 }}
          ></iframe>
        </section>
      </main>
    </div>
  );
};

export default App;
