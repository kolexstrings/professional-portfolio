import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "DeFi Trading Platform",
      status: "Live",
      statusColor: "bg-primary/10 text-primary",
      description: "Full-featured DEX with advanced trading features, liquidity pools, and yield farming. Implemented using smart contracts on multiple EVM chains with gasless transaction support.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      tags: ["Solidity", "React", "Web3.js", "ERC-4337"]
    },
    {
      title: "NFT Marketplace on ICP",
      status: "Featured",
      statusColor: "bg-[hsl(261,83%,58%)]/10 text-[hsl(261,83%,58%)]",
      description: "Scalable NFT marketplace built on Internet Computer Protocol with integrated IPFS storage, advanced search capabilities, and seamless user experience.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      tags: ["Motoko", "Next.js", "IPFS", "ICP"]
    },
    {
      title: "Cross-Chain Bridge",
      status: "Open Source",
      statusColor: "bg-[hsl(162,100%,50%)]/10 text-[hsl(162,100%,50%)]",
      description: "Secure cross-chain bridge enabling seamless asset transfers between Ethereum, Polygon, and Binance Smart Chain with automated liquidity management.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      tags: ["Solidity", "Hardhat", "Chainlink", "Multi-chain"]
    },
    {
      title: "Smart Contract Wallet",
      status: "In Development",
      statusColor: "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
      description: "Next-generation smart contract wallet with social recovery, multi-signature support, and gasless transactions using Account Abstraction (ERC-4337).",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      tags: ["ERC-4337", "TypeScript", "ethers.js", "React Native"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Innovative Web3 solutions that showcase technical expertise and user-centric design
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <Badge variant="secondary" className={project.statusColor}>
                    {project.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/90 p-0"
                    disabled={project.status === "In Development"}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {project.status === "In Development" ? "Coming Soon" : "Live Demo"}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground p-0"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
