import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || /^[+]?[\d\s-]{7,20}$/.test(val), {
      message: "Please enter a valid phone number",
    }),
  subject: z
    .string()
    .trim()
    .min(1, { message: "Subject is required" })
    .max(200, { message: "Subject must be less than 200 characters" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must be less than 2000 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // For now, just show success - email functionality will be added with backend
      console.log("Form submitted:", data);
      
      setIsSubmitted(true);
      form.reset();
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Code Prompt Technical Solutions</title>
        <meta
          name="description"
          content="Get in touch with CodePrompt for your software development needs. Contact us via email at info@codeprompt.in or call +91 90985-46675."
        />
        <meta
          name="keywords"
          content="contact codeprompt, software development inquiry, web development contact, hire developers"
        />
        <meta property="og:title" content="Contact Code Prompt Technical Solutions" />
        <meta
          property="og:description"
          content="Ready to start your project? Contact our team for a free consultation."
        />
        <link rel="canonical" href="https://codeprompt.in/contact" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heading leading-tight mb-6">
                Let's Build Something{" "}
                <span className="text-primary">Amazing Together</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Have a project in mind? We'd love to hear from you. Send us a message 
                and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div>
                <SectionHeading
                  title="Contact Information"
                  description="Reach out to us through any of the following channels. We're here to help!"
                  centered={false}
                />

                <div className="mt-10 space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-secondary rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-heading mb-2">
                        Email Us
                      </h3>
                      <a
                        href="mailto:info@codeprompt.in"
                        className="text-muted-foreground hover:text-primary transition-colors block"
                      >
                        info@codeprompt.in
                      </a>
                      <a
                        href="mailto:support@codeprompt.in"
                        className="text-muted-foreground hover:text-primary transition-colors block"
                      >
                        support@codeprompt.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-secondary rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-heading mb-2">
                        Call Us
                      </h3>
                      <a
                        href="tel:+919098546675"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 90985-46675
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-accent/50 rounded-xl">
                  <h3 className="font-display font-semibold text-heading mb-2">
                    Quick Response Guaranteed
                  </h3>
                  <p className="text-muted-foreground">
                    We typically respond within 24 hours. For urgent inquiries, 
                    please call us directly.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-secondary rounded-2xl p-8 lg:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-2xl text-heading mb-4">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been sent successfully. We'll get back to you soon.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display font-semibold text-2xl text-heading mb-6">
                      Send Us a Message
                    </h3>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email *</FormLabel>
                                <FormControl>
                                  <Input placeholder="your@email.com" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone (Optional)</FormLabel>
                                <FormControl>
                                  <Input placeholder="+91 00000-00000" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Subject *</FormLabel>
                                <FormControl>
                                  <Input placeholder="How can we help?" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your project..."
                                  className="min-h-[150px] resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              Send Message
                              <Send className="ml-2 w-4 h-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
