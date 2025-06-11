import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { getTechnologyById, getEventsByTechnology } from "@/data/technologies";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle } from "lucide-react";
import NotFound from "./NotFound";
const TechnologyDetail = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  if (!id) return <NotFound />;
  const technology = getTechnologyById(id);
  const relatedEvents = getEventsByTechnology(id);
  if (!technology) return <NotFound />;
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <Link to="/technology">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回技術櫥窗
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {technology.name}
              </h1>
              <p className="text-2xl text-blue-600 font-medium mb-6">
                {technology.slogan}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {technology.description}
              </p>
              
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3" onClick={() => window.open(technology.externalLink, '_blank')}>
                了解更多技術詳情
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative">
              <img src={technology.image} alt={technology.name} className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">應用情境</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technology.applications.map((application, index) => <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{application}</h3>
                      <p className="text-muted-foreground">
                        透過先進技術實現產業升級與效率提升
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">核心優勢</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technology.advantages.map((advantage, index) => <Card key={index} className="text-center hover:shadow-lg transition-all hover:-translate-y-1 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-4">{advantage}</h3>
                  <p className="text-muted-foreground">
                    領先業界的技術指標，為您的業務帶來競爭優勢
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Related Events Section */}
      {relatedEvents.length > 0 && <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">相關活動</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedEvents.map(event => <Card key={event.id} className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">{event.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="mr-2 h-4 w-4" />
                      {new Date(event.date).toLocaleDateString('zh-TW')}
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      應用此技術
                    </Badge>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            想要將此技術應用到您的業務中？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            我們的專業團隊將為您提供客製化的解決方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3" onClick={() => window.open(technology.externalLink, '_blank')}>
              查看技術詳情
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white px-8 py-3 text-blue-500">
              聯絡技術專家
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default TechnologyDetail;