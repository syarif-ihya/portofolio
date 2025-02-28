// app/projects/page.tsx

export default function Projects() {
  const projects = [
    {
      id: "leveling-app",
      title: "Leveling App",
      description: "Aplikasi Gamifikasi untuk Pengembangan Diri yang membantu pengguna meningkatkan motivasi dan keterampilan melalui sistem level, quest, dan reward berbasis pengalaman.",
      longDescription: "Aplikasi ini menggunakan pendekatan gamifikasi untuk memotivasi pengguna dalam mengembangkan kebiasaan baik dan mencapai tujuan personal. Pengguna dapat mendapatkan XP (experience points) dengan menyelesaikan tugas harian, mengembangkan kebiasaan baik, dan mencapai milestone. Level meningkat seiring akumulasi XP, membuka fitur dan tantangan baru.",
      technologies: ["React Native", "Expo", "Redux", "Firebase", "UI/UX Design"],
      gradient: "from-blue-500 to-purple-600",
      link: "#"
    },
    {
      id: "habitforge",
      title: "HabitForge",
      description: "Aplikasi yang membantu pengguna membangun kebiasaan baik dengan pendekatan RPG, di mana setiap kebiasaan yang dilakukan akan memberikan XP dan membuka item baru.",
      longDescription: "HabitForge menjadikan pembentukan kebiasaan seperti permainan RPG. Pengguna memiliki karakter yang dapat mereka kembangkan dengan menyelesaikan kebiasaan harian. Setiap kebiasaan yang diselesaikan memberikan XP, item virtual, dan memungkinkan karakter naik level. Pengguna dapat melihat progres kebiasaan mereka secara visual dan mendapatkan insentif untuk konsisten.",
      technologies: ["React Native", "Context API", "AsyncStorage", "Custom Animations", "SQLite"],
      gradient: "from-green-500 to-teal-500",
      link: "#"
    },
    {
      id: "loreweave",
      title: "LoreWeave",
      description: "Platform berbasis Next.js yang memungkinkan pengguna menulis cerita interaktif berbasis AI, di mana pembaca dapat memilih jalan cerita yang mereka inginkan.",
      longDescription: "LoreWeave adalah platform yang menggabungkan kreativitas manusia dengan kecerdasan buatan untuk menciptakan pengalaman bercerita interaktif. Penulis dapat membuat cabang cerita dengan bantuan AI untuk mengembangkan dan memperluas plot. Pembaca dapat menjelajahi berbagai alur cerita, membuat keputusan yang mempengaruhi jalan cerita, dan menikmati pengalaman cerita yang benar-benar personal.",
      technologies: ["Next.js", "OpenAI API", "MongoDB", "Authentication", "Tree Data Structures"],
      gradient: "from-green-500 to-blue-500",
      link: "#"
    },
    {
      id: "timevault",
      title: "TimeVault",
      description: "Aplikasi Next.js yang mengubah manajemen waktu menjadi permainan ekonomi, di mana pengguna menginvestasikan waktu mereka ke dalam berbagai aktivitas.",
      longDescription: "TimeVault menggunakan konsep ekonomi untuk membantu pengguna memahami bagaimana mereka menggunakan waktu mereka. Pengguna menginvestasikan waktu ke dalam aktivitas seperti belajar, olahraga, atau proyek kreatif. Aplikasi ini kemudian menghitung dan menampilkan ROI dari investasi waktu tersebut, baik dalam bentuk produktivitas, kesehatan, atau kebahagiaan, menggunakan metrik yang disesuaikan oleh pengguna.",
      technologies: ["Next.js", "Chart.js", "Prisma", "PostgreSQL", "TypeScript"],
      gradient: "from-yellow-500 to-orange-500",
      link: "#"
    },
    {
      id: "echoverse",
      title: "EchoVerse",
      description: "Aplikasi React Native yang memungkinkan pengguna mencatat jurnal harian dengan suara, yang kemudian dianalisis dengan AI untuk memberikan wawasan.",
      longDescription: "EchoVerse mengubah cara pengguna membuat jurnal pribadi dengan memanfaatkan input suara dan analisis AI. Pengguna dapat merekam entri jurnal mereka, yang kemudian diubah menjadi teks. AI akan menganalisis sentimen, emosi, dan pola dalam entri-entri tersebut untuk memberikan wawasan tentang kesejahteraan mental dan emosional pengguna dari waktu ke waktu, serta mengidentifikasi tren dan perubahan dalam suasana hati.",
      technologies: ["React Native", "Voice Recognition", "Natural Language Processing", "Sentiment Analysis", "Data Visualization"],
      gradient: "from-purple-500 to-pink-500",
      link: "#"
    },
  ];

  return (
    <div className="space-y-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Here are some of the projects I&apos;ve worked on, focusing on React Native mobile development 
          and Next.js web applications. Each project represents my passion for creating engaging, 
          user-centered experiences.
        </p>
      </section>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <section key={project.id} id={project.id} className="scroll-mt-24">
            <div className={`rounded-xl overflow-hidden ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:items-stretch bg-gray-800 shadow-lg`}>
              <div className={`flex-1 bg-gradient-to-br ${project.gradient} p-10 flex items-center justify-center`}>
                <h2 className="text-4xl font-bold text-white">{project.title}</h2>
              </div>
              
              <div className="flex-1 p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <p className="text-gray-300 mb-6">{project.longDescription}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-blue-400">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-block px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit Project
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}