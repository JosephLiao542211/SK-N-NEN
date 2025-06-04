import React from 'react';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, BookOpen, ExternalLink } from 'lucide-react';

const Index = () => {
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
                        Our Community Impact
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="card-hover text-center p-6 bg-white/80 backdrop-blur-sm border-border/50">
                            <CardContent className="pt-6">
                                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Heart className="h-8 w-8 text-primary/80" />
                                </div>
                                <h3 className="text-4xl font-bold text-black/80 mb-2">
                                    150+
                                </h3>
                                <p className="text-body text-black/70">
                                    Mothers supported through pregnancy
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="card-hover text-center p-6 bg-white/80 backdrop-blur-sm border-border/50">
                            <CardContent className="pt-6">
                                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                                    <Users className="h-8 w-8 text-secondary/80" />
                                </div>
                                <h3 className="text-4xl font-bold text-black/80 mb-2">
                                    25+
                                </h3>
                                <p className="text-body text-black/70">
                                    Traditional midwives in our network
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="card-hover text-center p-6 bg-white/80 backdrop-blur-sm border-border/50">
                            <CardContent className="pt-6">
                                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                                    <BookOpen className="h-8 w-8 text-accent/80" />
                                </div>
                                <h3 className="text-4xl font-bold text-black/80 mb-2">
                                    100+
                                </h3>
                                <p className="text-body text-black/70">
                                    Educational resources available
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
                                onClick={() =>
                                    (window.location.href = `${process.env.FRONTEND_URL}/resources`)
                                }
                            >
                                Explore Our Resources
                            </Button>
                        </div>
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
                                onClick={() =>
                                    (window.location.href = `${process.env.FRONTEND_URL}/community`)
                                }
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

            {/* Emergency Contact Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <Card className="bg-white/90 backdrop-blur-sm border-border/50 shadow-lg">
                        <CardContent className="p-8">
                            <h2 className="heading-sm text-center text-gradient mb-8">
                                24/7 Support Available
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="text-center md:text-left">
                                    <p className="text-body mb-4">
                                        <span className="font-semibold text-base block mb-1 text-black/80">
                                            24/7 Midwife Hotline
                                        </span>
                                        <span className="text-black/70">
                                            1-800-MIDWIFE
                                        </span>
                                    </p>
                                    <p className="text-body">
                                        <span className="font-semibold text-base block mb-1 text-black/80">
                                            Bay of Quinte Health Services
                                        </span>
                                        <span className="text-black/70">
                                            (613) 969-7400
                                        </span>
                                    </p>
                                </div>
                                <div className="text-center md:text-left">
                                    <p className="text-body mb-4">
                                        <span className="font-semibold text-base block mb-1 text-black/80">
                                            Indigenous Health Line
                                        </span>
                                        <span className="text-black/70">
                                            1-888-354-7336
                                        </span>
                                    </p>
                                    <p className="text-body">
                                        <span className="font-semibold text-base block mb-1 text-black/80">
                                            Emergency Services
                                        </span>
                                        <span className="text-black/70">
                                            911
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default Index;
