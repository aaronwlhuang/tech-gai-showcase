
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { events, getTechnologiesByEvent } from "@/data/technologies";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            GAI Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            探索生成式AI的無限可能，連結產業創新與技術突破
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/technology">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                探索技術櫥窗
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
              瀏覽最新活動
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              精選活動
            </h2>
            <p className="text-lg text-muted-foreground">
              深度探索工研院前沿技術在實際應用中的創新成果
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => {
              const relatedTechs = getTechnologiesByEvent(event.id);
              
              return (
                <Card 
                  key={event.id} 
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        <Calendar className="mr-1 h-3 w-3" />
                        {new Date(event.date).toLocaleDateString('zh-TW')}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {event.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    {relatedTechs.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-sm text-primary mb-3">
                          本活動使用的核心技術：
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {relatedTechs.map((tech) => (
                            <Link 
                              key={tech.id} 
                              to={`/technology/${tech.id}`}
                              className="inline-block"
                            >
                              <Badge 
                                variant="outline" 
                                className="hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer"
                              >
                                {tech.name}
                              </Badge>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        <span>產業專家 • 技術分享</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                        了解詳情
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Spotlight Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            技術聚焦
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            從AI視覺識別到量子運算，探索工研院如何透過創新技術推動產業數位轉型
          </p>
          <Link to="/technology">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
              探索所有技術
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">GAI Events</h3>
          <p className="text-primary-foreground/80 mb-6">
            工業技術研究院 • 推動台灣產業創新發展
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="sm">
              聯絡我們
            </Button>
            <Button variant="outline" size="sm" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              訂閱最新消息
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
