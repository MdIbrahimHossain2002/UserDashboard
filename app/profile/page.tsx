"use client";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Md. Ibrahim Hossain</h1>
          <p className="text-gray-700 mt-2">Full Stack Developer (Laravel, React, Next.js)</p>

          <div className="flex justify-center gap-4 mt-4 text-sm text-gray-700">
            <span>📍 17/A, Shantibag, Dhaka</span>
            <span>📞 +8801953517108</span>
          </div>

          <div className="flex justify-center gap-6 mt-3 text-blue-700 underline text-sm">
            <a href="mailto:mibrahimh02@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/md-ibrahim-hossain-0866a9296/" target="_blank">LinkedIn</a>
            <a href="https://github.com/MdIbrahimHossain2002" target="_blank">GitHub</a>
          </div>
        </header>

        {/* Career Objective */}
        <section className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-md border border-white">
          <h2 className="text-xl font-semibold mb-3">Career Objective</h2>
          <p className="text-gray-700 leading-relaxed">
            Looking for a challenging position in a reputable organization with potential advancement opportunities that allow me to 
            utilize and enhance my skills in a friendly and innovative environment.
          </p>
        </section>

        {/* Skills */}
        <section className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-md border border-white">
          <h2 className="text-xl font-semibold mb-3">Technical Skills</h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>Programming:</strong> JavaScript, PHP</li>
            <li><strong>Web Tech:</strong> HTML, CSS, Tailwind CSS, Bootstrap, React, Next.js, Laravel</li>
            <li><strong>Databases:</strong> MySQL, PostgreSQL</li>
            <li><strong>Problem Solving:</strong> HackerRank, W3School, CodeChef</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-md border border-white space-y-6">
          <h2 className="text-xl font-semibold">Experience</h2>

          <div>
            <h3 className="text-lg font-semibold">Full Stack Developer – Bulipe Tech Limited</h3>
            <p className="text-sm text-gray-600 mb-2">Feb 17, 2025 – Sep 15, 2025</p>
            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              <li>Developed modern web apps using Laravel + React/Next.js.</li>
              <li>Integrated Laravel APIs into Next.js frontend.</li>
              <li>Created scalable, modular systems with modern UI.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Junior Software Engineer – Somikoron IT Ltd</h3>
            <p className="text-sm text-gray-600 mb-2">Sep 23, 2025 – Present</p>
            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              <li>Redesigned dashboard UI for better UX & performance.</li>
              <li>Added new features and sections based on client needs.</li>
              <li>Integrated dynamic dataset updates in real-time.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-md border border-white space-y-6">
          <h2 className="text-xl font-semibold">Professional Projects</h2>

          <div>
            <h3 className="text-lg font-semibold">1. Nicdoplay</h3>
            <p className="text-gray-700"><strong>Tech:</strong> React, JS, Bootstrap</p>
            <p className="text-gray-700">
              Designed & developed a modern game development website with responsive UI and scalable code structure.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">2. Micdora – Domain Service Platform</h3>
            <p className="text-gray-700"><strong>Tech:</strong> Next.js, Tailwind CSS</p>
            <p className="text-gray-700">
              Worked on a modern domain service platform focusing on UI simplicity, scalability, and performance.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-md border border-white space-y-4">
          <h2 className="text-xl font-semibold">Educational Background</h2>

          <div>
            <h3 className="font-semibold">BSc in Computer Science & Engineering</h3>
            <p className="text-gray-700">City University (2021–2025)</p>
            <p className="text-gray-600">CGPA: 3.53 / 4.00</p>
          </div>

          <div>
            <h3 className="font-semibold">HSC – Science</h3>
            <p className="text-gray-700">Dhaka Imperial College (2018–2020)</p>
            <p className="text-gray-600">CGPA: 4.75 / 5.00</p>
          </div>

          <div>
            <h3 className="font-semibold">SSC – Science</h3>
            <p className="text-gray-700">Gomail High School (2013–2018)</p>
            <p className="text-gray-600">CGPA: 4.56 / 5.00</p>
          </div>
        </section>

      </div>
    </main>
  );
}
