import { Mail, MapPin, Phone, Send } from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { cn } from "../lib/utils";


const socialLinks = [
    { id: 1, icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook' },
    { id: 2, icon: <BsTwitterX />, url: 'https://x.com', label: 'X (Twitter)' },
    { id: 3, icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { id: 4, icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/ravi-kumar-4364972b7', label: 'LinkedIn' },
    { id: 5, icon: <FaGithub />, url: 'https://github.com/Ravi-agrahari1100', label: 'GitHub' },
];




export const ContactSection = () => {
       
   return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"

        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl mb:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium"> Email </h4>
                                    <a
                                        href="mailto:raviagrahari614@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >

                                        ravi@gmail.com
                                    </a>

                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium"> Phone </h4>
                                    <a
                                        href="tel:+8303742614"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >

                                        +{91} 8303742614
                                    </a>

                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium"> Location </h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >

                                        Tiwariganj Lucknow
                                    </a>

                                </div>
                            </div>

                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                    
                                <div className="flex space-x-3 justify-center">
                                    {socialLinks.map((link) => (
                                        <a
                                            key={link.id}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.label}

                                        >
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadaw-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name </label>
                                <input type="text" id="name" name="name" required
                                 className="w-full px-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                 placeholder="Ravi Kumar...."
                                 />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                                <input type="email" id="email" name="email" required
                                 className="w-full px-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                 placeholder="Hello@gamil.com"
                                 />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                                <textarea id="message" name="message" required
                                 className="w-full px-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                 placeholder="Hello, I'd like to tolk about...."
                                 />
                            </div>
                            <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                            Send Message    <Send size={16}/>

                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
