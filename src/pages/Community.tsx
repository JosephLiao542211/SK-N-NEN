import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
    Heart,
    MessageCircle,
    Phone,
    Mail,
    MapPin,
    Clock,
    ExternalLink,
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { format, formatDistanceToNow } from 'date-fns';
import { useToast } from '@/components/ui/use-toast';

const Community = () => {
    const [message, setMessage] = useState('');
    const { toast } = useToast();
    const queryClient = useQueryClient();

    // Fetch messages
    const { data: messages = [], isLoading } = useQuery({
        queryKey: ['messages'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('messages')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                toast({
                    title: 'Error fetching messages',
                    description: error.message,
                    variant: 'destructive',
                });
                return [];
            }

            return data;
        },
    });

    // Add new message mutation
    const addMessageMutation = useMutation({
        mutationFn: async (newMessage: string) => {
            const { data, error } = await supabase
                .from('messages')
                .insert([
                    {
                        content: newMessage,
                        responses: 0,
                    },
                ])
                .select()
                .single();

            if (error) throw error;
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['messages'] });
            setMessage('');
            toast({
                title: 'Message posted',
                description: 'Your message has been shared with the community.',
            });
        },
        onError: (error) => {
            toast({
                title: 'Error posting message',
                description: error.message,
                variant: 'destructive',
            });
        },
    });

    const handleSubmitMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            addMessageMutation.mutate(message);
        }
    };

    const formatTimestamp = (timestamp: string) => {
        const date = new Date(timestamp);
        const distance = formatDistanceToNow(date, { addSuffix: true });
        return distance;
    };

    const midwifeContacts = [
        {
            name: 'Sarah Bearfoot, RM',
            specialization: 'Traditional & Modern Practices',
            phone: '(613) 396-3255',
            email: 'sbearfoot@midwivesofquinte.ca',
            availability: 'Mon-Fri 9am-5pm',
        },
        {
            name: 'Dr. Maria Santos',
            specialization: 'Indigenous Maternal Health',
            phone: '(613) 969-7400 ext. 2156',
            email: 'msantos@bqhs.ca',
            availability: 'Tue-Thu 8am-4pm',
        },
        {
            name: 'Jennifer Hill, RN',
            specialization: 'Prenatal Education & Support',
            phone: '(613) 396-3271',
            email: 'jhill@bqfn.ca',
            availability: 'Mon-Wed-Fri 10am-6pm',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50">
            <Navigation />

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="heading-lg text-gradient pb-6 px-4">
                            Community Support
                        </h1>
                        <p className="text-[1.1em] text-black max-w-2xl mx-auto italic px-4">
                            Share experiences, ask questions, and connect with
                            other mothers in our community. All messages are
                            anonymous to create a safe space for open
                            discussion.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Message Board */}
                        <div className="lg:col-span-2">
                            <Card className="bg-white/60 backdrop-blur-sm border-border/50 mb-6">
                                <CardHeader>
                                    <CardTitle className="text-xl font-serif text-gradient flex items-center">
                                        <MessageCircle className="mr-2 h-6 w-6" />
                                        Community Message Board
                                    </CardTitle>
                                    <p className="text-gray-600 text-body italic">
                                        Share your thoughts, questions, or
                                        experiences anonymously
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <form
                                        onSubmit={handleSubmitMessage}
                                        className="mb-6"
                                    >
                                        <Textarea
                                            placeholder="Share your message with the community..."
                                            value={message}
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                            className="mb-4 min-h-[100px] text-body"
                                            disabled={
                                                addMessageMutation.isPending
                                            }
                                        />
                                        <Button
                                            type="submit"
                                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                                            disabled={
                                                addMessageMutation.isPending
                                            }
                                        >
                                            {addMessageMutation.isPending
                                                ? 'Posting...'
                                                : 'Post Message'}
                                        </Button>
                                    </form>

                                    <div className="space-y-4">
                                        {isLoading ? (
                                            <p className="text-center text-gray-600">
                                                Loading messages...
                                            </p>
                                        ) : messages.length === 0 ? (
                                            <p className="text-center text-gray-600">
                                                No messages yet. Be the first to
                                                share!
                                            </p>
                                        ) : (
                                            messages.map((msg) => (
                                                <Card
                                                    key={msg.id}
                                                    className="bg-white/40 border-border/30"
                                                >
                                                    <CardContent className="pt-4">
                                                        <p className="text-black text-body mb-3 leading-relaxed">
                                                            {msg.content}
                                                        </p>
                                                        <div className="flex items-center justify-between text-xs">
                                                            <div className="flex items-center space-x-4 text-gray-600">
                                                                <span className="flex items-center">
                                                                    <Clock className="h-4 w-4 mr-1" />
                                                                    {formatTimestamp(
                                                                        msg.created_at
                                                                    )}
                                                                </span>
                                                                <span className="flex items-center">
                                                                    <Heart className="h-4 w-4 mr-1" />
                                                                    {
                                                                        msg.responses
                                                                    }{' '}
                                                                    responses
                                                                </span>
                                                            </div>
                                                            <Badge
                                                                variant="secondary"
                                                                className="text-xs"
                                                            >
                                                                Anonymous
                                                            </Badge>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar with Contacts */}
                        <div className="space-y-6">
                            {/* Contact Information */}
                            <Card className="bg-white/60 backdrop-blur-sm border-primary/10 hover:shadow-md transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="text-xl font-serif text-primary/80">
                                        Contact Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <h3 className="font-medium text-black/80">
                                            Kenhtè:ke Midwives
                                        </h3>
                                        <div className="text-sm space-y-1 text-black/70">
                                            <p className="flex items-center">
                                                <MapPin className="h-4 w-4 mr-2 text-primary/60" />
                                                1979 York Road, Tyendinaga
                                                Mohawk Territory, ON K0K 1X0
                                            </p>
                                            <p className="flex items-center">
                                                <Phone className="h-4 w-4 mr-2 text-primary/60" />
                                                (613) 396-2223
                                            </p>
                                            <p className="flex items-center">
                                                <Mail className="h-4 w-4 mr-2 text-primary/60" />
                                                shekon@kenhtekemidwives.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-2 text-sm text-black/60">
                                        <p className="font-medium">
                                            Hours of Operation:
                                        </p>
                                        <p>Monday-Friday: 8:30am-4:30pm</p>
                                        <p>Saturday & Sunday: Closed</p>
                                        <p className="mt-2 italic">
                                            24/7 on-call support for active
                                            clients
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Quick Links */}
                            <Card className="bg-white/60 backdrop-blur-sm border-primary/10 hover:shadow-md transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="text-xl font-serif text-primary/80">
                                        Important Resources
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 text-sm">
                                        <li>
                                            <a
                                                href="https://www.ontariomidwives.ca/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-black/70 hover:text-primary/80 transition-colors"
                                            >
                                                <ExternalLink className="h-4 w-4 mr-2 text-primary/60" />
                                                Association of Ontario Midwives
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.ontario.ca/page/midwifery-ontario"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-black/70 hover:text-primary/80 transition-colors"
                                            >
                                                <ExternalLink className="h-4 w-4 mr-2 text-primary/60" />
                                                Midwifery in Ontario
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.bqfnhc.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-black/70 hover:text-primary/80 transition-colors"
                                            >
                                                <ExternalLink className="h-4 w-4 mr-2 text-primary/60" />
                                                Bay of Quinte First Nations
                                                Health Centre
                                            </a>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Emergency Contacts */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
