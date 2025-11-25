import Image from "next/image";
import {
  Sparkles,
  Home,
  Package,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Video,
  Building2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ComingSoonGate } from "@/components/coming-soon-gate";

export default function HomePage() {
  return (
    <ComingSoonGate>
    <div className="font-[family-name:var(--font-outfit)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-terracotta rounded-sm"></div>
              <div className="w-3 h-3 bg-gold rounded-full"></div>
            </div>
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-teal rounded-sm"></div>
              <div className="w-3 h-3 bg-sage rounded-sm"></div>
            </div>
            <span className="ml-2 font-semibold text-teal tracking-tight">
              House <span className="text-terracotta font-[family-name:var(--font-cormorant)] italic">of</span> Order
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-teal hover:text-terracotta transition-colors">
              About
            </a>
            <a href="#services" className="text-teal hover:text-terracotta transition-colors">
              Services
            </a>
            <a href="#process" className="text-teal hover:text-terracotta transition-colors">
              Process
            </a>
            <Button variant="default" size="sm" rounded="full" asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="sage" className="px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Home Organizing & Styling</span>
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-cormorant)] font-semibold text-teal leading-[1.1] tracking-tight">
              Curating Order.
              <br />
              <span className="text-terracotta">Creating Harmony.</span>
            </h1>
            <p className="text-lg text-teal/70 max-w-lg leading-relaxed">
              Transform your home into an organized, serene environment where you can thrive.
              Fresh, functional, and timeless spaces designed for how you actually live.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="xl" rounded="full" asChild>
                <a href="#contact">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline-primary" size="xl" rounded="full" asChild>
                <a href="#services">View Services</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80"
                alt="Beautifully organized closet space"
                fill
                className="object-cover"
                priority
              />
            </div>
            <Card className="absolute -bottom-6 -left-6 border-border shadow-xl">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-sage" />
                </div>
                <div>
                  <p className="font-semibold text-teal">Tidy Spaces</p>
                  <p className="text-sm text-teal/60">Clear Minds</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-cream-dark">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Nicole - Professional Home Organizer"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-terracotta rounded-full opacity-40"></div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <p className="text-terracotta font-medium tracking-wide uppercase text-sm">
              Behind the Brand
            </p>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-semibold text-teal">
              Meet Nicole
            </h2>
            <div className="space-y-4 text-teal/70 leading-relaxed">
              <p>
                House of Order is built on a simple philosophy: <span className="text-teal font-medium">tidy spaces, clear minds</span>.
              </p>
              <p>
                With a merchandising background and an eye for aesthetics, I blend classic
                organizing principles with modern tools to create systems that last.
              </p>
              <p>
                I help families and busy professionals bring order, beauty, and efficiency
                back into their homes — without the overwhelm.
              </p>
            </div>
            <Separator className="my-4" />
            <p className="text-2xl font-[family-name:var(--font-cormorant)] italic text-sage-dark">
              "Fresh, functional, and timeless."
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-terracotta font-medium tracking-wide uppercase text-sm mb-4">
              What I Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-semibold text-teal mb-6">
              Services & Packages
            </h2>
            <p className="text-teal/70">
              From single spaces to whole-home transformations, I offer flexible solutions
              tailored to your needs and lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="bg-cream-dark border-0 hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-14 h-14 bg-sage/20 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-sage/30 transition-colors">
                  <Home className="w-7 h-7 text-sage" />
                </div>
                <CardTitle className="text-xl text-teal">Home Organizing</CardTitle>
                <CardDescription className="text-teal/70">
                  Closets, kitchens, bedrooms, garages, offices — every space deserves intention and order.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <p className="text-terracotta font-medium">Starting at $90/hr</p>
              </CardFooter>
            </Card>

            {/* Service Card 2 */}
            <Card className="bg-cream-dark border-0 hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-14 h-14 bg-terracotta/20 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-terracotta/30 transition-colors">
                  <Sparkles className="w-7 h-7 text-terracotta" />
                </div>
                <CardTitle className="text-xl text-teal">Full Space Overhaul</CardTitle>
                <CardDescription className="text-teal/70">
                  Complete transformation of a single space — closet, pantry, playroom, or garage.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <p className="text-terracotta font-medium">$250 – $450 per space</p>
              </CardFooter>
            </Card>

            {/* Service Card 3 */}
            <Card className="bg-cream-dark border-0 hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-gold/30 transition-colors">
                  <Package className="w-7 h-7 text-gold" />
                </div>
                <CardTitle className="text-xl text-teal">Move-In/Move-Out</CardTitle>
                <CardDescription className="text-teal/70">
                  Start fresh in your new home with everything unpacked, organized, and ready to live.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <p className="text-terracotta font-medium">$350 – $600 per home</p>
              </CardFooter>
            </Card>

            {/* Service Card 4 */}
            <Card className="bg-cream-dark border-0 hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-muted/20 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-blue-muted/30 transition-colors">
                  <CalendarDays className="w-7 h-7 text-blue-muted" />
                </div>
                <CardTitle className="text-xl text-teal">Seasonal Resets</CardTitle>
                <CardDescription className="text-teal/70">
                  Refresh your space seasonally to maintain order and adapt to changing needs.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <p className="text-terracotta font-medium">$150 – $300 per session</p>
              </CardFooter>
            </Card>

            {/* Service Card 5 */}
            <Card className="bg-cream-dark border-0 hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-14 h-14 bg-sage/20 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-sage/30 transition-colors">
                  <Video className="w-7 h-7 text-sage" />
                </div>
                <CardTitle className="text-xl text-teal">Virtual Organizing</CardTitle>
                <CardDescription className="text-teal/70">
                  Remote guidance and coaching for DIY organizers who want expert direction.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <p className="text-terracotta font-medium">$75 – $100/hr</p>
              </CardFooter>
            </Card>

            {/* Service Card 6 */}
            <Card className="bg-cream-dark border-0 hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-14 h-14 bg-burgundy/20 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-burgundy/30 transition-colors">
                  <Building2 className="w-7 h-7 text-burgundy" />
                </div>
                <CardTitle className="text-xl text-teal">Vacation Rental Setup</CardTitle>
                <CardDescription className="text-teal/70">
                  Make your Airbnb or rental property guest-ready with thoughtful organization.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <p className="text-terracotta font-medium">$200 – $400 per property</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 px-6 bg-teal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sage-light font-medium tracking-wide uppercase text-sm mb-4">
              Save with Bundles
            </p>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-semibold text-cream mb-6">
              Popular Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-cream/10 backdrop-blur border-cream/20">
              <CardHeader>
                <CardTitle className="text-xl text-cream">Mini Consultation</CardTitle>
                <CardDescription className="text-cream/70">Perfect for getting started</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-semibold text-gold mb-6">1 Hour</div>
                <ul className="space-y-3 text-cream/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sage-light" />
                    Space assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sage-light" />
                    Personalized action plan
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sage-light" />
                    Product recommendations
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="cream" rounded="full" className="w-full" asChild>
                  <a href="#contact">Book Now</a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-terracotta border-0 relative">
              <Badge variant="gold" className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-xl text-cream">Seasonal Reset</CardTitle>
                <CardDescription className="text-cream/70">Quarterly refresh</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-semibold text-cream mb-6">4 Hours</div>
                <ul className="space-y-3 text-cream/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    Deep declutter session
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    System optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    Label & style refresh
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    Maintenance tips
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="cream-accent" rounded="full" className="w-full" asChild>
                  <a href="#contact">Book Now</a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-cream/10 backdrop-blur border-cream/20">
              <CardHeader>
                <CardTitle className="text-xl text-cream">Full Home Refresh</CardTitle>
                <CardDescription className="text-cream/70">Complete transformation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-semibold text-gold mb-6">10 Hours</div>
                <ul className="space-y-3 text-cream/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sage-light" />
                    Multiple room overhaul
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sage-light" />
                    Custom storage solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sage-light" />
                    Styling & finishing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sage-light" />
                    Follow-up support
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="cream" rounded="full" className="w-full" asChild>
                  <a href="#contact">Book Now</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-terracotta font-medium tracking-wide uppercase text-sm mb-4">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-semibold text-teal mb-6">
              The Process
            </h2>
            <p className="text-teal/70">
              A simple, stress-free approach to transforming your space.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-terracotta text-cream rounded-full flex items-center justify-center text-2xl font-semibold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-teal mb-3">Consultation</h3>
              <p className="text-teal/70">
                We discuss your goals, challenges, and vision for your space.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sage text-cream rounded-full flex items-center justify-center text-2xl font-semibold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-teal mb-3">Custom Plan</h3>
              <p className="text-teal/70">
                I create a personalized organizing plan tailored to your lifestyle.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold text-teal rounded-full flex items-center justify-center text-2xl font-semibold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-teal mb-3">Implementation</h3>
              <p className="text-teal/70">
                Together, we declutter, organize, and style your space beautifully.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal text-cream rounded-full flex items-center justify-center text-2xl font-semibold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-semibold text-teal mb-3">Enjoy & Maintain</h3>
              <p className="text-teal/70">
                You get tips and systems to keep your space looking perfect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 bg-cream-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-terracotta font-medium tracking-wide uppercase text-sm mb-4">
              Transformations
            </p>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-semibold text-teal">
              Spaces We Love
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=400&q=80"
                alt="Organized pantry"
                width={400}
                height={400}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&q=80"
                alt="Organized closet"
                width={400}
                height={400}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80"
                alt="Organized kitchen"
                width={400}
                height={400}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&q=80"
                alt="Organized bathroom"
                width={400}
                height={400}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <p className="text-terracotta font-medium tracking-wide uppercase text-sm mb-4">
                  Get in Touch
                </p>
                <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-semibold text-teal mb-6">
                  Ready to Transform Your Space?
                </h2>
                <p className="text-teal/70 leading-relaxed">
                  Let&apos;s chat about your organizing goals. Book a free 30-minute consultation
                  and discover how House of Order can help you create the home you deserve.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <p className="text-sm text-teal/60">Phone</p>
                    <p className="text-teal font-medium">(305) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-terracotta/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <p className="text-sm text-teal/60">Email</p>
                    <p className="text-teal font-medium">hello@houseoforder.co</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-teal/60">Service Area</p>
                    <p className="text-teal font-medium">Miami & Surrounding Areas</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <Button variant="default" size="icon-xl" rounded="full" asChild>
                  <a href="#">
                    <Instagram className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            <Card className="bg-cream-dark border-0 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-2xl text-teal">Book Your Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-teal">
                      Your Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Jane Doe"
                      className="rounded-xl bg-cream border-border text-teal h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-teal">
                      Email Address
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="jane@example.com"
                      className="rounded-xl bg-cream border-border text-teal h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-teal">
                      Service Interest
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full rounded-xl bg-cream border-border text-teal h-12">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home-organizing">Home Organizing</SelectItem>
                        <SelectItem value="full-space-overhaul">Full Space Overhaul</SelectItem>
                        <SelectItem value="move-in-out">Move-In/Move-Out</SelectItem>
                        <SelectItem value="seasonal-reset">Seasonal Reset</SelectItem>
                        <SelectItem value="virtual-organizing">Virtual Organizing</SelectItem>
                        <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-teal">
                      Tell Me About Your Space
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="What areas need the most attention?"
                      className="rounded-xl bg-cream border-border text-teal resize-none"
                    />
                  </div>
                  <Button variant="accent" size="xl" rounded="full" className="w-full">
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-teal">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-terracotta rounded-sm"></div>
                <div className="w-3 h-3 bg-gold rounded-full"></div>
              </div>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-cream/50 rounded-sm"></div>
                <div className="w-3 h-3 bg-sage rounded-sm"></div>
              </div>
              <span className="ml-2 font-semibold text-cream tracking-tight">
                House <span className="text-terracotta font-[family-name:var(--font-cormorant)] italic">of</span> Order
              </span>
            </div>
            <p className="text-cream/70 text-sm">
              &copy; {new Date().getFullYear()} House of Order. All rights reserved.
            </p>
            <p className="text-cream/50 text-sm font-[family-name:var(--font-cormorant)] italic">
              Curating Order. Creating Harmony.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </ComingSoonGate>
  );
}
