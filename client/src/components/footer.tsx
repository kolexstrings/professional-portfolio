import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-primary">Alex Chen</span>
            <p className="text-muted-foreground mt-1">Blockchain Developer & Web3 Architect</p>
          </div>
          
          <div className="flex space-x-6">
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
            <a
              href="#"
              className="text-muted-foreground hover:text-primary text-xl transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Alex Chen. Built with passion for Web3 innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
