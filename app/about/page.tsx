export default function About() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About Me</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">My Journey</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              A passionate frontend developer and graphic designer with over 3 years of experience 
              in building web applications. My journey in tech started during my college years at 
              Gordon College, where I discovered my love for problem-solving through code and design.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I specialize in modern frontend technologies, particularly React and Next.js, and 
              I&apos;m always excited to learn about new technologies and best practices in web development and design.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Skills & Technologies</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• React & Next.js</li>
                <li>• HTML5 & CSS3</li>
                <li>• Tailwind CSS</li>
                <li>• Git & GitHub</li>
                <li>• Photoshop</li>
                <li>• Adobe AE</li>
                <li>• Video Editing</li>
                <li>• UI/UX Design</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800">Gordon College</h4>
                  <p className="text-gray-600">BS in Information Technology</p>
                  <p className="text-sm text-gray-500">2023 - Present</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">3+ Years Experience</h4>
                  <p className="text-gray-600">Frontend Development & Design</p>
                  <p className="text-sm text-gray-500">Building modern web applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}