import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Link,
  Monitor,
  Server,
  Link2,
  RotateCcw,
  HardDrive,
  Zap,
} from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Blockchain & Web3",
      icon: Link,
      color: "bg-primary/10 text-primary",
      skills: [
        "Solidity",
        "EVM Chains",
        "Internet Computer",
        "IPFS",
        "ERC-4337",
      ],
    },
    {
      title: "Frontend Development",
      icon: Monitor,
      color: "bg-[hsl(261,83%,58%)]/10 text-[hsl(261,83%,58%)]",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend & Infrastructure",
      icon: Server,
      color: "bg-[hsl(162,100%,50%)]/10 text-[hsl(162,100%,50%)]",
      skills: ["Node.js", "Express", "GraphQL", "MongoDB"],
    },
  ];

  const specializedTech = [
    {
      icon: Link2,
      title: "Account Abstraction",
      subtitle: "ERC-4337 Implementation",
    },
    {
      icon: RotateCcw,
      title: "Cross-Chain",
      subtitle: "Multi-chain Solutions",
    },
    {
      icon: HardDrive,
      title: "Decentralized Storage",
      subtitle: "IPFS Integration",
    },
    { icon: Zap, title: "Gasless Transactions", subtitle: "UX Optimization" },
  ];

  return (
    <section id="skills" className="py-20 network-lines">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-animated-gradient">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive skill set spanning blockchain development and modern
            web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 glow-purple group"
            >
              <CardContent className="p-8 network-lines">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${category.color} float pulse-glow`}
                >
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-animated-gradient">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-web3-gradient hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-animated-gradient rounded-2xl glow-green network-lines">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Specialized Technologies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedTech.map((tech, index) => (
              <div
                key={index}
                className="text-center group hover:scale-110 transition-all duration-300"
              >
                <div className="mb-2 float group-hover:text-electric-yellow transition-colors duration-300">
                  <tech.icon className="w-8 h-8 mx-auto" />
                </div>
                <h4 className="font-semibold text-white group-hover:text-cyber-blue transition-colors duration-300">
                  {tech.title}
                </h4>
                <p className="text-blue-100 text-sm group-hover:text-neon-pink transition-colors duration-300">
                  {tech.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
