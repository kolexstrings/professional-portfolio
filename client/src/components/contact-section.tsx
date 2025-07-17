import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to bring your Web3 vision to life? Let's discuss your next blockchain project.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-primary text-2xl h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:alex@example.com" className="text-muted-foreground hover:text-primary">
              alex@example.com
            </a>
          </div>
          
          <div className="group">
            <div className="w-16 h-16 bg-[hsl(261,83%,58%)]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="text-[hsl(261,83%,58%)] text-2xl h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <a href="#" className="text-muted-foreground hover:text-primary">
              linkedin.com/in/alexchen
            </a>
          </div>
          
          <div className="group">
            <div className="w-16 h-16 bg-[hsl(162,100%,50%)]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Github className="text-[hsl(162,100%,50%)] text-2xl h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">GitHub</h3>
            <a href="#" className="text-muted-foreground hover:text-primary">
              github.com/alexchen
            </a>
          </div>
        </div>
        
        <Card className="shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="resize-none"
              />
              <Button
                type="submit"
                className="w-full md:w-auto bg-gradient-to-r from-primary to-[hsl(261,83%,58%)] hover:from-primary/90 hover:to-[hsl(261,83%,58%)]/90 text-white"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
