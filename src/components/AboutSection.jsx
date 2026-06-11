import { Code, User, Briefcase } from "lucide-react"


const AboutSection = () => {
  return (
   <section id="about" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Enthusiast</h3>
          <p className="text-muted-foreground">
            I'm a passionate web developer with a love for creating beautiful, functional, and user-friendly websites. With a strong foundation in both frontend and backend technologies, I strive to deliver high-quality solutions that exceed client expectations.
          </p>

          <p className="text-muted-foreground">
            My journey in web development began with a curiosity for how websites work, which quickly turned into a passion for coding and design. I enjoy working on projects that challenge me to learn new technologies and push my creative boundaries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
            <a href="#contact" className="cosmic-button">
              Get in Touch
            </a>
            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 ">
              Download Resume
            </a>

          </div>

        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Frontend Development</h4>
                <p className="text-muted-foreground">
                  Creating responsive and visually appealing user interfaces using React, Tailwind CSS, and modern design principles.
                </p>

              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
             <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary"/>
                
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                <p className="text-muted-foreground">
                  Creating intuitive and engaging user experiences with a focus on usability and aesthetics.
                </p>

              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
             <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary"/>
                
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Backend Development</h4>
                <p className="text-muted-foreground">
                  Building robust and scalable server-side applications using Node.js, Python, and other backend technologies.
                </p>

              </div>
            </div>
          </div>

        </div>

      </div>

    </div>

   </section>
  )
}

export default AboutSection