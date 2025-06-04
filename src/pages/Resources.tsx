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
        {
            question: 'What if I experience discrimination in healthcare?',
            answer: "Document the incident, speak with a patient advocate or ombudsman, and don't hesitate to change providers if needed. You can also contact Indigenous health organizations for support and guidance. Remember, you deserve respectful, culturally appropriate care.",
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
                <div className="max-w-4xl mx-auto">
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

                    {/* Key Resources */}
                    <section className="mb-16">
                        <h2 className="heading-md text-center text-gradient mb-8">
                            Key Organizations & Resources
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {resources.map((resource, index) => (
                                <Card
                                    key={index}
                                    className="bg-white/60 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow"
                                >
                                    <CardHeader>
                                        <CardTitle className="font-serif text-lg text-black">
                                            {resource.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-black text-body mb-4 italic">
                                            {resource.description}
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center text-black text-small">
                                                <Phone className="h-4 w-4 mr-2" />
                                                {resource.contact}
                                            </div>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() =>
                                                    window.open(
                                                        resource.website,
                                                        '_blank'
                                                    )
                                                }
                                                className="w-full text-small"
                                            >
                                                Visit Website
                                                <ExternalLink className="ml-2 h-4 w-4" />
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

                    {/* Emergency Information */}
                    <section>
                        <Card className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-primary/20 shadow-md">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-2xl font-serif text-gradient text-center">
                                    Emergency & Crisis Support
                                </CardTitle>
                                <p className="text-center text-black/60 text-medium mt-2">
                                    24/7 Support when you need it most
                                </p>
                            </CardHeader>
                            <CardContent className="pt-8">
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
                                        <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                                            <Phone className="h-6 w-6 text-primary/80" />
                                        </div>
                                        <h3 className="font-serif font-semibold text-black/80 text-lg mb-3">
                                            24/7 Crisis Line
                                        </h3>
                                        <p className="text-black/70 text-body font-medium">
                                            1-888-472-4367
                                        </p>
                                        <p className="text-black/60 text-small mt-2">
                                            Available anytime, day or night
                                        </p>
                                    </div>
                                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
                                        <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                                            <Mail className="h-6 w-6 text-accent/80" />
                                        </div>
                                        <h3 className="font-serif font-semibold text-black/80 text-lg mb-3">
                                            Patient Advocate
                                        </h3>
                                        <p className="text-black/70 text-body font-medium">
                                            advocate@bqfn.ca
                                        </p>
                                        <p className="text-black/60 text-small mt-2">
                                            We'll respond within 24 hours
                                        </p>
                                    </div>
                                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
                                        <div className="w-12 h-12 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                                            <MapPin className="h-6 w-6 text-secondary/80" />
                                        </div>
                                        <h3 className="font-serif font-semibold text-black/80 text-lg mb-3">
                                            Health Centre
                                        </h3>
                                        <p className="text-black/70 text-body font-medium">
                                            Bay of Quinte First Nations
                                        </p>
                                        <p className="text-black/60 text-small mt-2">
                                            Open Mon-Fri, 8am-5pm
                                        </p>
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
