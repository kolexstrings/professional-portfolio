import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Blockchain & Web3",
      icon: "🔗",
      color: "bg-primary/10 text-primary",
      skills: ["Solidity", "EVM Chains", "Internet Computer", "IPFS", "ERC-4337"]
    },
    {
      title: "Frontend Development",
      icon: "💻",
      color: "bg-[hsl(261,83%,58%)]/10 text-[hsl(261,83%,58%)]",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend & Infrastructure",
      icon: "🖥️",
      color: "bg-[hsl(162,100%,50%)]/10 text-[hsl(162,100%,50%)]",
      skills: ["Node.js", "Express", "GraphQL", "MongoDB"]
    }
  ];

  const specializedTech = [
    { icon: "⛓️", title: "Account Abstraction", subtitle: "ERC-4337 Implementation" },
    { icon: "🔄", title: "Cross-Chain", subtitle: "Multi-chain Solutions" },
    { icon: "💾", title: "Decentralized Storage", subtitle: "IPFS Integration" },
    { icon: "⚡", title: "Gasless Transactions", subtitle: "UX Optimization" }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive skill set spanning blockchain development and modern web technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${category.color}`}>
                  <span className="text-xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-8 bg-gradient-to-r from-primary to-[hsl(261,83%,58%)] rounded-2xl">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Specialized Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedTech.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h4 className="font-semibold text-white">{tech.title}</h4>
                <p className="text-blue-100 text-sm">{tech.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
