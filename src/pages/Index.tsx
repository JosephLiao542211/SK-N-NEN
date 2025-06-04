
import React from 'react';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, BookOpen, ExternalLink } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="heading-xl text-gradient mb-6">
              Skén:nen
            </h1>
            <p className="text-large text-black mb-6 font-medium italic">
              Balance and Peace in Motherhood
            </p>
            <p className="text-body text-black max-w-3xl mx-auto leading-relaxed">
              A sacred space for Mohawk mothers of the Bay of Quinte First Nations. 
              Here you'll find resources, support, and community to help you advocate 
              for yourself during pregnancy and connect with traditional and modern midwife care.
            </p>
          </div>
          
          {/* Survey CTA */}
          <div className="mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-base font-semibold rounded-full"
              onClick={() => window.open('https://forms.google.com/your-survey-link', '_blank')}
            >
              Share Your Experience - Take Our Survey
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-small text-gray-600 mt-3 italic">
              Your voice matters. Help us understand the needs of our community.
            </p>
          </div>
        </div>
      </section>

      {/* Abstract organic shapes */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200/30 organic-shape"></div>
        <div className="absolute top-20 right-0 w-48 h-48 bg-blue-200/30 organic-shape"></div>
        <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-orange-200/30 organic-shape"></div>
      </div>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md text-center text-gradient mb-12">
            Our Community Impact
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-white/60 backdrop-blur-sm border-border/50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold text-black mb-2">150+</h3>
                <p className="text-body text-black">Mothers supported through pregnancy</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-white/60 backdrop-blur-sm border-border/50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-4xl font-bold text-black mb-2">12</h3>
                <p className="text-body text-black">Certified midwives in our network</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-white/60 backdrop-blur-sm border-border/50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-4xl font-bold text-black mb-2">50+</h3>
                <p className="text-body text-black">Educational resources available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Resources */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md text-center text-gradient mb-12">
            Quick Access Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <h3 className="heading-sm text-gradient mb-4">Emergency Contacts</h3>
                <div className="space-y-3 text-black">
                  <p className="text-body"><span className="font-semibold text-base">24/7 Midwife Hotline:</span> 1-800-MIDWIFE</p>
                  <p className="text-body"><span className="font-semibold text-base">Bay of Quinte Health Services:</span> (613) 969-7400</p>
                  <p className="text-body"><span className="font-semibold text-base">Indigenous Health Line:</span> 1-888-472-4367</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <h3 className="heading-sm text-gradient mb-4">Support Groups</h3>
                <div className="space-y-3 text-black">
                  <p className="text-body"><span className="font-semibold text-base">Weekly Circle:</span> <span className="italic">Thursdays 7pm at Community Centre</span></p>
                  <p className="text-body"><span className="font-semibold text-base">New Mom Support:</span> <span className="italic">Tuesdays 10am via Zoom</span></p>
                  <p className="text-body"><span className="font-semibold text-base">Traditional Teachings:</span> <span className="italic">First Saturday of each month</span></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-body text-gray-700 mb-2">
              © 2024 Skén:nen - Bay of Quinte First Nations Maternal Health Hub
            </p>
            <p className="text-small text-gray-600 italic">
              Honoring traditional knowledge while embracing modern healthcare
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
