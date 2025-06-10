
import Navigation from "@/components/Navigation";
import { technologies } from "@/data/technologies";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TechnologyShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            技術櫥窗
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            探索工研院最前沿的創新技術，驅動產業數位轉型與永續發展
          </p>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card 
                key={tech.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {tech.slogan}
                    </p>
                    
                    <Link to={`/technology/${tech.id}`}>
                      <Button 
                        className="w-full group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                      >
                        <span>了解更多</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            準備好迎接技術革新了嗎？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            聯絡我們，了解如何將這些先進技術應用到您的業務中
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 text-lg font-semibold"
          >
            聯絡專家團隊
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TechnologyShowcase;
