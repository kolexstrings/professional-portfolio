import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Hi, I'm</span>
                <span className="bg-gradient-to-r from-primary to-[hsl(261,83%,58%)] bg-clip-text text-transparent"> Alex Chen</span>
              </h1>
              <p className="text-2xl text-muted-foreground font-medium">
                Blockchain Developer & Web3 Architect
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
                Seasoned developer with 4+ years crafting decentralized applications and smart contracts. 
                Specialized in EVM chains, ICP, and cutting-edge Web3 technologies.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get In Touch
              </Button>
            </div>
            
            <div className="flex space-x-6 pt-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary text-xl transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary text-xl transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary text-xl transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
              alt="Professional developer workspace"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary to-[hsl(261,83%,58%)] p-4 rounded-2xl shadow-lg">
              <div className="text-white text-2xl">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[hsl(162,100%,50%)] p-4 rounded-2xl shadow-lg">
              <div className="text-slate-900 text-2xl">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H6.9C4.29 7 2.4 8.79 2.4 11.5S4.29 16 6.9 16H11v-1.9H6.9c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9.1-6H13v1.9h4.1c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1H13V17h4.1c2.61 0 4.5-1.79 4.5-4.5S19.71 7 17.1 7z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
