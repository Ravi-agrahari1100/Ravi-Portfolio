import { ArrowUp, Mail } from "lucide-react"
import { BsGithub, BsLinkedin } from "react-icons/bs"



export const Footer = () => {
  return (
 <footer className="relative border-t border-border bg-card py-8 px-4 mt-16">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">
            Ravi<span className="text-primary">Tech</span>
          </h3>

          <p className="text-sm text-muted-foreground mt-2">
            Building modern web experiences with MERN Stack.
          </p>

          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} RaviTech.co. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all duration-300"
          >
            <BsGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all duration-300"
          >
            <BsLinkedin size={20} />
          </a>

          <a
            href="mailto:raviagrahari614@gmail.com"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Back to Top */}
        <a
          href="#hero"
          className="p-3 rounded-full bg-primary text-white hover:scale-110 transition-transform duration-300 shadow-lg"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  )
}
