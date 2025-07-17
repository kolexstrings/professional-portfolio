import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about pushing the boundaries of Web3 technology and creating seamless decentralized experiences
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
              alt="Blockchain technology abstract visualization"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Blockchain Innovation & Web3 Expertise</h3>
            <p className="text-muted-foreground leading-relaxed">
              With over 4 years of hands-on experience in blockchain development, I specialize in architecting 
              and building sophisticated decentralized applications that bridge the gap between complex Web3 
              technology and intuitive user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans across EVM-compatible chains and the Internet Computer Protocol (ICP), 
              with deep knowledge in advanced concepts like ERC-4337 Account Abstraction, gasless transactions, 
              and cross-chain wallet solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-[hsl(261,83%,58%)]">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
