import React from 'react';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, BookOpen, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#fff5eb] via-[#fdf1f5] to-[#f0f7ff]">
            <Navigation />

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 relative">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-12">
                        <h1 className="heading-xl text-gradient mb-4">
                            Skén:nen
                        </h1>
                        <p className="text-large text-black/80 mb-8 font-medium">
                            Balance and Peace in Motherhood
                        </p>

                        <p className="text-medium text-black/80 max-w-3xl mx-auto">
                            A sacred space for Mohawk mothers of the Bay of
                            Quinte First Nations. Here you'll find resources,
                            support, and community to help you advocate for
                            yourself during pregnancy and connect with
                            traditional and modern midwife care in Kingston,
                            Ontario.
                        </p>
                    </div>

                    {/* Survey CTA */}
                    <div className="mb-16">
                        <Button
                            size="lg"
                            className="bg-primary/90 hover:bg-primary text-white px-8 py-4 text-base font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                            onClick={() =>
                                window.open(
                                    'https://forms.gle/shKoo6pzh4BTMErF9',
                                    '_blank'
                                )
                            }
                        >
                            Share Your Experience - Take Our Survey
                            <ExternalLink className="ml-2 h-5 w-5" />
                        </Button>
                        <p className="text-small text-black/60 mt-3">
                            Your voice matters in shaping the future of our
                            community
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="container mx-auto px-4 py-16 relative">
                <div className="max-w-5xl mx-auto">
                    <h2 className="heading-md text-center text-gradient mb-12">
                        Our Mission Goals
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="card-hover text-center p-6 bg-white/80 backdrop-blur-sm border-border/50">
                            <CardContent className="pt-6">
                                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                                    <BookOpen className="h-8 w-8 text-primary/80" />
                                </div>
                                <h3 className="text-xl font-serif font-semibold text-black/80 mb-3">
                                    Educational Resources
                                </h3>
                                <p className="text-body text-black/70">
                                    Providing access to culturally-informed
                                    pregnancy and parenting resources throughout
                                    Kingston and surrounding areas
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="card-hover text-center p-6 bg-white/80 backdrop-blur-sm border-border/50">
                            <CardContent className="pt-6">
                                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                                    <Users className="h-8 w-8 text-secondary/80" />
                                </div>
                                <h3 className="text-xl font-serif font-semibold text-black/80 mb-3">
                                    Traditional Midwifery
                                </h3>
                                <p className="text-body text-black/70">
                                    Connecting mothers with experienced
                                    Indigenous midwives and knowledge keepers in
                                    the Kingston community
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="card-hover text-center p-6 bg-white/80 backdrop-blur-sm border-border/50">
                            <CardContent className="pt-6">
                                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                                    <Heart className="h-8 w-8 text-accent/80" />
                                </div>
                                <h3 className="text-xl font-serif font-semibold text-black/80 mb-3">
                                    Safe Environment
                                </h3>
                                <p className="text-body text-black/70">
                                    Fostering a supportive, culturally safe
                                    space for Indigenous mothers throughout
                                    their pregnancy journey
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="container mx-auto px-4 py-16 relative">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="/Sarah-Anne-Gusdal-indigenous-milk-medicine-week.png"
                                alt="Indigenous milk medicine practices"
                                className="img-feature w-full"
                            />
                        </div>
                        <div>
                            <h2 className="heading-md text-gradient mb-6">
                                Traditional Wisdom Meets Modern Care
                            </h2>
                            <p className="text-medium text-black/80 mb-6">
                                We honor our ancestral knowledge while embracing
                                contemporary healthcare practices, creating a
                                holistic approach to maternal care that respects
                                both tradition and modern medicine.
                            </p>
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                                onClick={() => navigate('/Resources')}
                            >
                                Explore Our Resources
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kenhtè:ke Midwives Services Section */}
            <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col items-center mb-12">
                        <h2 className="heading-md text-center text-gradient mb-4">
                            Kenhtè:ke Midwives Services
                        </h2>
                        <a
                            href="https://www.kenhtekemidwives.com/services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-2 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-full transition-all duration-300 group"
                        >
                            Visit Official Services Page
                            <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="bg-white/60 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300 group">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-serif font-semibold text-primary/80 mb-4 pb-2 border-b border-primary/10 group-hover:border-primary/20 transition-all duration-300">
                                    Prenatal Care
                                </h3>
                                <ul className="space-y-2 text-black/70">
                                    <li className="flex items-start space-x-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2"></span>
                                        <span>
                                            Regular check-ups throughout
                                            pregnancy
                                        </span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2"></span>
                                        <span>
                                            Traditional medicine and teachings
                                        </span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2"></span>
                                        <span>
                                            Cultural and spiritual support
                                        </span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2"></span>
                                        <span>
                                            Home or clinic visits available
                                        </span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/60 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300 group">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-serif font-semibold text-primary/80 mb-4 pb-2 border-b border-primary/10 group-hover:border-primary/20 transition-all duration-300">
                                    Birth Support
                                </h3>
                                <ul className="space-y-2 text-black/70">
                                    <li className="flex items-start space-x-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2"></span>
                                        <span>24/7 on-call support</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2"></span>
                                        <span>
                                            Home or hospital birth options
                                        </span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2"></span>
                                        <span>
                                            Traditional birth ceremonies
                                        </span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2"></span>
                                        <span>Culturally safe care</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/60 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300 group">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-serif font-semibold text-primary/80 mb-4 pb-2 border-b border-primary/10 group-hover:border-primary/20 transition-all duration-300">
                                    Postpartum Care
                                </h3>
                                <ul className="space-y-2 text-black/70">
                                    <li className="flex items-start space-x-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2"></span>
                                        <span>Regular home visits</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2"></span>
                                        <span>Breastfeeding support</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2"></span>
                                        <span>Newborn care guidance</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2"></span>
                                        <span>
                                            Traditional healing practices
                                        </span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="container mx-auto px-4 py-16 relative">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="heading-md text-gradient mb-6">
                                Join Our Growing Community
                            </h2>
                            <p className="text-medium text-black/80 mb-6">
                                Connect with other mothers, share experiences,
                                and find support in our welcoming community.
                                Together, we create a stronger network of care
                                and understanding.
                            </p>
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                                onClick={() => navigate('/Community')}
                            >
                                Connect With Us
                            </Button>
                        </div>
                        <div className="order-1 md:order-2">
                            <img
                                src="/234222997-family-portrait-and-beach-picnic-outdoor-with-smile-travel-and-summer-vacation-in-park-holiday.png"
                                alt="Happy indigenous family enjoying time together"
                                className="img-feature w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Index;
