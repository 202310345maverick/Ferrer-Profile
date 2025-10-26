export default function About() {
  const skills = [
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Next.js', level: 75 },
    { name: 'TypeScript', level: 70 },
    { name: 'HTML & CSS', level: 90 },
    { name: 'Git & GitHub', level: 80 }
  ]

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Gordon College',
      period: '2023 - Present',
      description: 'Building responsive and user-friendly web applications while pursuing BSIT degree. Working on academic projects and personal frontend applications.'
    },
    {
      title: 'IT Student',
      company: 'Gordon College',
      period: '2023 - Present',
      description: 'Currently in 3rd year BSIT program, learning frontend development, user interface design, and modern web technologies.'
    }
  ]

  return (
    <div className="container">
      <div className="page-header">
        <h1>About Me</h1>
        <p>Learn more about my journey and skills</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>My Story</h2>
          <p>
            Hello! I'm a passionate 3rd year BSIT student at Gordon College with a strong focus 
            on frontend development. My journey in technology started with curiosity about how 
            beautiful and interactive user interfaces are created, and I've been dedicated to 
            mastering client-side development ever since.
          </p>
          <p>
            I love turning complex designs into efficient, responsive web applications. Currently, 
            I'm diving deep into React, Next.js, and modern CSS while balancing my academic 
            studies with hands-on coding projects.
          </p>
          <p>
            When I'm not coding or studying, you can find me exploring new frontend technologies, 
            experimenting with UI/UX designs, or collaborating with fellow developers to build 
            engaging user experiences.
          </p>
        </section>

        <section className="skills-section">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="experience-section">
          <h2>Experience & Education</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company} • {exp.period}</p>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}