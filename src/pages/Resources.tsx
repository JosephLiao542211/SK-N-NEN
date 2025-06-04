import React from 'react';
import Navigation from '../components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
    ExternalLink,
    Phone,
    Mail,
    MapPin,
    CalendarCheck,
    Check,
    ClipboardCheck,
} from 'lucide-react';

const Resources = () => {
    const faqs = [
        {
            question:
                'How can I advocate for myself during prenatal appointments?',
            answer: "Come prepared with questions written down. Don't be afraid to ask for clarification if you don't understand something. You have the right to request culturally appropriate care and to have a support person with you. If you feel uncomfortable, you can always seek a second opinion or request a different healthcare provider.",
        },
        {
            question: 'What are my rights during pregnancy and birth?',
            answer: 'You have the right to informed consent for all procedures, the right to refuse treatment, the right to have a support person present, and the right to culturally appropriate care. You can request an Indigenous doula or midwife, and you have the right to incorporate traditional practices into your birth plan.',
        },
        {
            question:
                'How do I find a midwife who understands Indigenous culture?',
            answer: 'Contact the Association of Ontario Midwives for a list of culturally competent providers. Many midwives have specific training in Indigenous healthcare. You can also ask about their experience with traditional practices and their willingness to incorporate cultural elements into your care.',
        },
        {
            question: 'What questions should I ask my healthcare provider?',
            answer: "Ask about their experience with Indigenous patients, their policies on traditional practices, what procedures they recommend and why, what your options are for pain management, and how they handle emergencies. Don't hesitate to ask about anything you don't understand.",
        },
        {
            question: 'Can I use traditional medicines during pregnancy?',
            answer: 'Always discuss traditional medicines with your healthcare provider. Many are safe and beneficial, but some may interact with modern medications or have contraindications during pregnancy. A culturally competent provider will work with you to safely incorporate traditional practices.',
        },
    ];

    const resources = [
        {
            title: 'Association of Ontario Midwives',
            description: 'Find certified midwives in your area',
            contact: '1-866-418-3773',
            website: 'https://www.ontariomidwives.ca/',
        },
        {
            title: 'Indigenous Wellness Research Institute',
            description: 'Research and resources on Indigenous maternal health',
            contact: 'info@iwri.org',
            website: 'https://iwri.org/',
        },
        {
            title: "Native Women's Association of Canada",
            description: 'Advocacy and support for Indigenous women',
            contact: '1-613-722-3033',
            website: 'https://www.nwac.ca/',
        },
        {
            title: 'Birthing on Country Programs',
            description: 'Traditional birthing practices and modern care',
            contact: 'Contact your local Indigenous health centre',
            website: 'Various locations',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50">
            <Navigation />

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="heading-lg text-gradient pb-6">
                            Resources & Advocacy
                        </h1>
                        <p className="text-[1.1em] text-black max-w-2xl mx-auto italic">
                            Empowering you with knowledge, connections, and
                            tools to advocate for the care you and your baby
                            deserve.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mb-16">
                        <h2 className="heading-md text-center text-gradient mb-8">
                            Frequently Asked Questions
                        </h2>

                        <Accordion
                            type="single"
                            collapsible
                            className="space-y-4"
                        >
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-white/60 backdrop-blur-sm border border-border/50 rounded-lg px-6"
                                >
                                    <AccordionTrigger className="font-sans">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-black text-body leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>
                    {/* Kenhtè:ke Midwives Services Section */}
                    <section className="mb-16">
                        <div className="flex flex-col items-center mb-8">
                            <div className="relative w-full max-w-4xl mb-8"></div>
                            <div className="text-center max-w-2xl">
                                <h2 className="heading-md text-gradient mb-4">
                                    Kenhtè:ke Midwives Services
                                </h2>
                                <a
                                    href="https://www.kenhtekemidwives.com/services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 text-primary font-medium rounded-full transition-all duration-300 group"
                                >
                                    Visit Official Services Page
                                    <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between md:space-x-5 mx-auto">
                            <img
                                className="h-auto img-feature object-cover w-full md:w-1/3 rounded-2xl mb-5 md:mb-0"
                                src="/midwife.jpg"
                                alt="Kenhtè:ke Midwives team"
                            />

                            <Card className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
                                <CardContent className="pt-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-4 p-6 bg-white/60 rounded-2xl border border-primary/5">
                                            <h3 className="font-serif font-semibold text-primary/90 text-lg mb-4 pb-2 border-b border-primary/10">
                                                Prenatal Care Schedule
                                            </h3>
                                            <ul className="space-y-3">
                                                <li className="flex items-center space-x-3 text-black/70 group">
                                                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary/40 to-primary/60 group-hover:scale-125 transition-transform"></span>
                                                    <span className="group-hover:text-primary/90 transition-colors">
                                                        Every 4 weeks until 28
                                                        weeks
                                                    </span>
                                                </li>
                                                <li className="flex items-center space-x-3 text-black/70 group">
                                                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary/40 to-primary/60 group-hover:scale-125 transition-transform"></span>
                                                    <span className="group-hover:text-primary/90 transition-colors">
                                                        Every 2 weeks from 28 –
                                                        36 weeks
                                                    </span>
                                                </li>
                                                <li className="flex items-center space-x-3 text-black/70 group">
                                                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary/40 to-primary/60 group-hover:scale-125 transition-transform"></span>
                                                    <span className="group-hover:text-primary/90 transition-colors">
                                                        Every week after 36
                                                        weeks
                                                    </span>
                                                </li>
                                            </ul>
                                            <p className="text-black/50 italic mt-4 text-sm border-t border-primary/5 pt-4">
                                                Visits last approximately 1 hour
                                                and can be done at the clinic or
                                                your home
                                            </p>
                                        </div>
                                        <div className="space-y-4 p-6 bg-white/60 rounded-2xl border border-secondary/5">
                                            <h3 className="font-serif font-semibold text-secondary/90 text-lg mb-4 pb-2 border-b border-secondary/10">
                                                Postpartum Care Schedule
                                            </h3>
                                            <ul className="space-y-3">
                                                <li className="flex items-center space-x-3 text-black/70 group">
                                                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary/40 to-secondary/60 group-hover:scale-125 transition-transform"></span>
                                                    <span className="group-hover:text-secondary/90 transition-colors">
                                                        1, 3, 5 & 10 Day home
                                                        visits
                                                    </span>
                                                </li>
                                                <li className="flex items-center space-x-3 text-black/70 group">
                                                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary/40 to-secondary/60 group-hover:scale-125 transition-transform"></span>
                                                    <span className="group-hover:text-secondary/90 transition-colors">
                                                        3 & 6 Week clinic visits
                                                    </span>
                                                </li>
                                                <li className="flex items-center space-x-3 text-black/70 group">
                                                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary/40 to-secondary/60 group-hover:scale-125 transition-transform"></span>
                                                    <span className="group-hover:text-secondary/90 transition-colors">
                                                        24/7 on-call support
                                                        available
                                                    </span>
                                                </li>
                                            </ul>
                                            <p className="text-black/50 italic mt-4 text-sm border-t border-secondary/5 pt-4">
                                                Postpartum visits are
                                                approximately 1½ hours long
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Key Organizations & Resources */}
                    <section className="mb-16">
                        <div className="flex flex-col items-center mb-8">
                            <div className="text-center max-w-2xl">
                                <h2 className="heading-md text-gradient mb-4">
                                    Key Organizations & Resources
                                </h2>
                                <p className="text-medium text-black/80 mb-6">
                                    Connect with trusted organizations
                                    supporting Indigenous maternal health
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {resources.map((resource, index) => (
                                <Card
                                    key={index}
                                    className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300 group"
                                >
                                    <CardHeader>
                                        <CardTitle className="font-serif text-xl text-primary/90 group-hover:text-primary transition-colors">
                                            {resource.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-black/70 text-body mb-6">
                                            {resource.description}
                                        </p>
                                        <div className="space-y-3">
                                            <div className="flex items-center text-black/70 text-body group-hover:text-primary/90 transition-colors">
                                                <Phone className="h-5 w-5 mr-3 text-primary/70" />
                                                {resource.contact}
                                            </div>
                                            <Button
                                                variant="outline"
                                                size="default"
                                                onClick={() =>
                                                    window.open(
                                                        resource.website,
                                                        '_blank'
                                                    )
                                                }
                                                className="w-full bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 text-primary font-medium transition-all duration-300 group"
                                            >
                                                Visit Website
                                                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Self-Advocacy Tips */}
                    <section className="mb-16">
                        <Card className="bg-white/90 backdrop-blur-sm border-border/50 shadow-md hover:shadow-lg transition-all duration-300">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-2xl font-serif text-gradient text-center">
                                    Self-Advocacy Checklist
                                </CardTitle>
                                <p className="text-center text-black/60 text-medium mt-2">
                                    Prepare for your healthcare journey with
                                    confidence
                                </p>
                            </CardHeader>
                            <CardContent className="pt-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-primary/5 rounded-xl p-6">
                                        <h3 className="font-serif font-semibold text-black/80 text-xl mb-6 flex items-center">
                                            <CalendarCheck className="h-5 w-5 mr-2 text-primary/70" />
                                            Before Appointments
                                        </h3>
                                        <ul className="space-y-4 text-black/70 text-body">
                                            <li className="flex items-start">
                                                <Check className="h-5 w-5 mr-2 mt-0.5 text-primary/70" />
                                                <span>
                                                    Write down your questions
                                                    and concerns
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="h-5 w-5 mr-2 mt-0.5 text-primary/70" />
                                                <span>
                                                    Bring a support person if
                                                    desired
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="h-5 w-5 mr-2 mt-0.5 text-primary/70" />
                                                <span>
                                                    Research your healthcare
                                                    provider
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="h-5 w-5 mr-2 mt-0.5 text-primary/70" />
                                                <span>
                                                    Prepare your medical history
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="h-5 w-5 mr-2 mt-0.5 text-primary/70" />
                                                <span>
                                                    Know your rights and options
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-secondary/5 rounded-xl p-6">
                                        <h3 className="font-serif font-semibold text-black/80 text-xl mb-6 flex items-center">
                                            <ClipboardCheck className="h-5 w-5 mr-2 text-secondary/70" />
                                            During Appointments
                                        </h3>
                                        <ul className="space-y-4 text-black/70 text-body">
                                            <li className="flex items-start">
                                                <Check className="h-5 w-5 mr-2 mt-0.5 text-secondary/70" />
                                                <span>
                                                    Ask questions if you don't
                                                    understand
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="h-5 w-5 mr-2 mt-0.5 text-secondary/70" />
                                                <span>
                                                    Request time to consider
                                                    options
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="h-5 w-5 mr-2 mt-0.5 text-secondary/70" />
                                                <span>
                                                    Discuss cultural preferences
                                                    and practices
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="h-5 w-5 mr-2 mt-0.5 text-secondary/70" />
                                                <span>
                                                    Take notes or ask for
                                                    written information
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="h-5 w-5 mr-2 mt-0.5 text-secondary/70" />
                                                <span>
                                                    Trust your instincts and
                                                    speak up
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Resources;
