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
} from "lucide-react";

export default function HomePage() {
  return (
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
            <a
              href="#contact"
              className="bg-teal text-cream px-5 py-2 rounded-full hover:bg-teal/90 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-sage/20 text-sage-dark px-4 py-2 rounded-full text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Home Organizing & Styling</span>
            </div>
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
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-terracotta text-cream px-8 py-4 rounded-full hover:bg-terracotta/90 transition-colors text-lg font-medium"
              >
                Book a Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-teal text-teal px-8 py-4 rounded-full hover:bg-teal hover:text-cream transition-colors text-lg font-medium"
              >
                View Services
              </a>
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
            <div className="absolute -bottom-6 -left-6 bg-cream p-6 rounded-2xl shadow-xl border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-sage" />
                </div>
                <div>
                  <p className="font-semibold text-teal">Tidy Spaces</p>
                  <p className="text-sm text-teal/60">Clear Minds</p>
                </div>
              </div>
            </div>
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
            <div className="pt-4">
              <p className="text-2xl font-[family-name:var(--font-cormorant)] italic text-sage-dark">
                "Fresh, functional, and timeless."
              </p>
            </div>
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
            <div className="bg-cream-dark rounded-2xl p-8 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-sage/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage/30 transition-colors">
                <Home className="w-7 h-7 text-sage" />
              </div>
              <h3 className="text-xl font-semibold text-teal mb-3">Home Organizing</h3>
              <p className="text-teal/70 mb-4">
                Closets, kitchens, bedrooms, garages, offices — every space deserves intention and order.
              </p>
              <p className="text-terracotta font-medium">Starting at $90/hr</p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-cream-dark rounded-2xl p-8 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-terracotta/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-terracotta/30 transition-colors">
                <Sparkles className="w-7 h-7 text-terracotta" />
              </div>
              <h3 className="text-xl font-semibold text-teal mb-3">Full Space Overhaul</h3>
              <p className="text-teal/70 mb-4">
                Complete transformation of a single space — closet, pantry, playroom, or garage.
              </p>
              <p className="text-terracotta font-medium">$250 – $450 per space</p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-cream-dark rounded-2xl p-8 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
                <Package className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-teal mb-3">Move-In/Move-Out</h3>
              <p className="text-teal/70 mb-4">
                Start fresh in your new home with everything unpacked, organized, and ready to live.
              </p>
              <p className="text-terracotta font-medium">$350 – $600 per home</p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-cream-dark rounded-2xl p-8 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-blue-muted/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-muted/30 transition-colors">
                <CalendarDays className="w-7 h-7 text-blue-muted" />
              </div>
              <h3 className="text-xl font-semibold text-teal mb-3">Seasonal Resets</h3>
              <p className="text-teal/70 mb-4">
                Refresh your space seasonally to maintain order and adapt to changing needs.
              </p>
              <p className="text-terracotta font-medium">$150 – $300 per session</p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-cream-dark rounded-2xl p-8 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-sage/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage/30 transition-colors">
                <svg className="w-7 h-7 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal mb-3">Virtual Organizing</h3>
              <p className="text-teal/70 mb-4">
                Remote guidance and coaching for DIY organizers who want expert direction.
              </p>
              <p className="text-terracotta font-medium">$75 – $100/hr</p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-cream-dark rounded-2xl p-8 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-burgundy/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-burgundy/30 transition-colors">
                <svg className="w-7 h-7 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal mb-3">Vacation Rental Setup</h3>
              <p className="text-teal/70 mb-4">
                Make your Airbnb or rental property guest-ready with thoughtful organization.
              </p>
              <p className="text-terracotta font-medium">$200 – $400 per property</p>
            </div>
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
            <div className="bg-cream/10 backdrop-blur rounded-2xl p-8 border border-cream/20">
              <h3 className="text-xl font-semibold text-cream mb-2">Mini Consultation</h3>
              <p className="text-cream/70 mb-6">Perfect for getting started</p>
              <div className="text-4xl font-semibold text-gold mb-6">1 Hour</div>
              <ul className="space-y-3 text-cream/80 mb-8">
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
              <a href="#contact" className="block text-center bg-cream text-teal px-6 py-3 rounded-full font-medium hover:bg-cream/90 transition-colors">
                Book Now
              </a>
            </div>

            <div className="bg-terracotta rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-teal px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-cream mb-2">Seasonal Reset</h3>
              <p className="text-cream/70 mb-6">Quarterly refresh</p>
              <div className="text-4xl font-semibold text-cream mb-6">4 Hours</div>
              <ul className="space-y-3 text-cream/90 mb-8">
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
              <a href="#contact" className="block text-center bg-cream text-terracotta px-6 py-3 rounded-full font-medium hover:bg-cream/90 transition-colors">
                Book Now
              </a>
            </div>

            <div className="bg-cream/10 backdrop-blur rounded-2xl p-8 border border-cream/20">
              <h3 className="text-xl font-semibold text-cream mb-2">Full Home Refresh</h3>
              <p className="text-cream/70 mb-6">Complete transformation</p>
              <div className="text-4xl font-semibold text-gold mb-6">10 Hours</div>
              <ul className="space-y-3 text-cream/80 mb-8">
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
              <a href="#contact" className="block text-center bg-cream text-teal px-6 py-3 rounded-full font-medium hover:bg-cream/90 transition-colors">
                Book Now
              </a>
            </div>
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
                <a
                  href="#"
                  className="w-12 h-12 bg-teal text-cream rounded-full flex items-center justify-center hover:bg-teal/90 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-cream-dark rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-semibold text-teal mb-6">Book Your Consultation</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-teal mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream focus:outline-none focus:ring-2 focus:ring-sage text-teal"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-teal mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream focus:outline-none focus:ring-2 focus:ring-sage text-teal"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-teal mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream focus:outline-none focus:ring-2 focus:ring-sage text-teal"
                  >
                    <option>Home Organizing</option>
                    <option>Full Space Overhaul</option>
                    <option>Move-In/Move-Out</option>
                    <option>Seasonal Reset</option>
                    <option>Virtual Organizing</option>
                    <option>Not Sure Yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-teal mb-2">
                    Tell Me About Your Space
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream focus:outline-none focus:ring-2 focus:ring-sage text-teal resize-none"
                    placeholder="What areas need the most attention?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-terracotta text-cream py-4 rounded-full font-medium hover:bg-terracotta/90 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
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
  );
}
