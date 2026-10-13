import Image from "next/image";
import { ArrowRight, ArrowDown, Phone, Mail, MapPin, Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactForm, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL } from "@/components/contact-form";

export default function HomePage() {
  return (
    <div className="font-[family-name:var(--font-outfit)]">
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-teal focus:text-cream focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>

      {/* Minimal Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-sm">
        <nav className="px-6 md:px-12 py-6 flex items-center justify-between" aria-label="Main navigation">
          <a href="#" className="text-teal text-sm tracking-[0.3em] uppercase font-light" aria-label="House of Order - Home">
            House of Order
          </a>
          <a href="#contact" className="text-teal text-sm tracking-[0.2em] uppercase font-light hover:opacity-60 transition-opacity">
            Contact
          </a>
        </nav>
      </header>

      <main id="main-content">
        {/* Hero - Full Bleed Editorial */}
        <section className="relative h-screen" aria-labelledby="hero-heading">
          <Image
            src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1920&q=90"
            alt="Beautifully organized walk-in closet with neatly arranged clothing and natural light"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-20">
            <div className="max-w-4xl">
              <h1 id="hero-heading" className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-cormorant)] font-light text-white leading-[0.95] tracking-tight mb-8">
                Curating Order.
                <br />
                <span className="italic">Creating Harmony.</span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-light max-w-xl mb-12 leading-relaxed">
                Professional home organizing and styling for those who value
                serene, intentional spaces.
              </p>
              <Button variant="cream" size="lg" rounded="full" className="group pl-8" asChild>
                <a href="#contact">
                  Book Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
            <ArrowDown className="w-5 h-5" strokeWidth={1} />
          </div>
        </section>

        {/* Philosophy Statement - Full Width Text */}
        <section className="py-32 md:py-48 px-6 md:px-12 lg:px-20 bg-cream">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-cormorant)] font-light text-teal leading-snug">
              We believe that <em className="text-terracotta">tidy spaces</em> create <em className="text-terracotta">clear minds</em>.
              Every object deserves a home. Every room deserves intention.
            </p>
          </div>
        </section>

        {/* Services - Asymmetric Layout */}
        <section id="services" className="py-32 md:py-48 px-6 md:px-12 lg:px-20 bg-cream" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
              {/* Left Column - Title */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                <p className="text-sm tracking-[0.3em] uppercase text-sage-dark mb-4">Services</p>
                <h2 id="services-heading" className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-cormorant)] font-light text-teal leading-tight">
                  What We<br />Offer
                </h2>
              </div>

              {/* Right Column - Services List */}
              <div className="lg:col-span-7 lg:col-start-6 space-y-16">
                <article className="group">
                  <div className="border-t border-border pt-8">
                    <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] text-teal mb-4 group-hover:text-terracotta transition-colors">
                      Home Organizing
                    </h3>
                    <p className="text-teal/70 leading-relaxed mb-4 max-w-lg">
                      Declutter and organize a single space in your home. Create functional, organized spaces that are easy to maintain.
                    </p>
                    <p className="text-sm tracking-wide text-terracotta">$90/hour</p>
                  </div>
                </article>

                <article className="group">
                  <div className="border-t border-border pt-8">
                    <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] text-teal mb-4 group-hover:text-terracotta transition-colors">
                      Full Space Overhaul
                    </h3>
                    <p className="text-teal/70 leading-relaxed mb-4 max-w-lg">
                      A complete transformation for spaces that need a fresh start.
                    </p>
                    <p className="text-sm tracking-wide text-terracotta">Pricing varies based on the size of the space and the scope of the project.</p>
                  </div>
                </article>

                <article className="group">
                  <div className="border-t border-border pt-8">
                    <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] text-teal mb-4 group-hover:text-terracotta transition-colors">
                      Seasonal Reset
                    </h3>
                    <p className="text-teal/70 leading-relaxed mb-4 max-w-lg">
                      Refresh your space seasonally to maintain order and adapt to changing needs.
                    </p>
                    <p className="text-sm tracking-wide text-terracotta">$300 per session</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Two Image Grid - Editorial Layout */}
        <section className="grid md:grid-cols-2" aria-label="Organizing inspiration gallery">
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[90vh]">
            <Image
              src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=1200&q=90"
              alt="Neatly organized pantry shelves with matching containers"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[90vh]">
            <Image
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=90"
              alt="Minimalist bathroom with organized towels and natural elements"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* About - Editorial Text + Image */}
        <section id="about" className="py-32 md:py-48 px-6 md:px-12 lg:px-20 bg-cream" aria-labelledby="about-heading">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <p className="text-sm tracking-[0.3em] uppercase text-sage-dark">The Founder</p>
                <h2 id="about-heading" className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-cormorant)] font-light text-teal">
                  Meet Nicole
                </h2>
                <div className="space-y-6 text-teal/70 text-lg leading-relaxed">
                  <p>
                    House of Order is built on a simple philosophy: tidy spaces, clear minds.
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
                <p className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] italic text-terracotta pt-4">
                  "Fresh, functional, and timeless."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full Bleed Image - Minimal Living */}
        <section className="relative h-screen" aria-label="Minimal living space showcase">
          <Image
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=90"
            alt="Serene minimalist living room with natural light and clean lines"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <blockquote className="text-center max-w-3xl">
              <p className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-cormorant)] font-light text-white leading-tight">
                "The space you inhabit shapes the life you live."
              </p>
            </blockquote>
          </div>
        </section>

        {/* Process - Minimal Steps */}
        <section id="process" className="py-32 md:py-48 px-6 md:px-12 lg:px-20 bg-cream" aria-labelledby="process-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <p className="text-sm tracking-[0.3em] uppercase text-sage-dark mb-4">How It Works</p>
              <h2 id="process-heading" className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-cormorant)] font-light text-teal">
                The Process
              </h2>
            </div>

            <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 list-none">
              <li className="text-center">
                <span className="block text-6xl md:text-7xl font-[family-name:var(--font-cormorant)] font-light text-terracotta/30 mb-6">01</span>
                <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-teal mb-4">Consultation</h3>
                <p className="text-teal/60 leading-relaxed">
                  We discuss your goals, challenges, and vision for your space.
                </p>
              </li>
              <li className="text-center">
                <span className="block text-6xl md:text-7xl font-[family-name:var(--font-cormorant)] font-light text-terracotta/30 mb-6">02</span>
                <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-teal mb-4">Custom Plan</h3>
                <p className="text-teal/60 leading-relaxed">
                  A personalized organizing plan tailored to your lifestyle.
                </p>
              </li>
              <li className="text-center">
                <span className="block text-6xl md:text-7xl font-[family-name:var(--font-cormorant)] font-light text-terracotta/30 mb-6">03</span>
                <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-teal mb-4">Implementation</h3>
                <p className="text-teal/60 leading-relaxed">
                  Together, we declutter, organize, and style beautifully.
                </p>
              </li>
              <li className="text-center">
                <span className="block text-6xl md:text-7xl font-[family-name:var(--font-cormorant)] font-light text-terracotta/30 mb-6">04</span>
                <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-teal mb-4">Maintain</h3>
                <p className="text-teal/60 leading-relaxed">
                  Tips and systems to keep your space looking perfect.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* Asymmetric Gallery */}
        <section className="px-6 md:px-12 lg:px-20 pb-32 bg-cream" aria-label="Project gallery">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-4">
              <figure className="col-span-12 md:col-span-8 aspect-[16/10] relative">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=90"
                  alt="Modern minimalist living room with organized shelving"
                  fill
                  className="object-cover"
                />
              </figure>
              <figure className="col-span-6 md:col-span-4 aspect-[3/4] relative">
                <Image
                  src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=90"
                  alt="Organized bedroom closet with folded linens"
                  fill
                  className="object-cover"
                />
              </figure>
              <figure className="col-span-6 md:col-span-4 aspect-[3/4] relative">
                <Image
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=90"
                  alt="Minimalist home office with clean desk setup"
                  fill
                  className="object-cover"
                />
              </figure>
              <figure className="col-span-12 md:col-span-8 aspect-[16/10] relative">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=90"
                  alt="Bright and airy organized home interior"
                  fill
                  className="object-cover"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* Contact - Clean and Minimal */}
        <section id="contact" className="py-32 md:py-48 px-6 md:px-12 lg:px-20 bg-teal" aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <div className="space-y-12">
                <div>
                  <p className="text-sm tracking-[0.3em] uppercase text-sage-light mb-4">Get in Touch</p>
                  <h2 id="contact-heading" className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-cormorant)] font-light text-cream leading-tight">
                    Let&apos;s Create a Space<br />That Works for You.
                  </h2>
                </div>
                <p className="text-cream/70 text-lg leading-relaxed max-w-md">
                  Thoughtful organizing. Functional spaces. A fresh start.
                </p>

                <address className="space-y-6 not-italic text-cream/80">
                  <a href={`tel:${CONTACT_PHONE_TEL}`} className="flex items-center gap-4 hover:text-cream transition-colors">
                    <Phone className="w-5 h-5" strokeWidth={1} aria-hidden="true" />
                    <span>{CONTACT_PHONE}</span>
                  </a>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 hover:text-cream transition-colors">
                    <Mail className="w-5 h-5" strokeWidth={1} aria-hidden="true" />
                    <span>{CONTACT_EMAIL}</span>
                  </a>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5" strokeWidth={1} aria-hidden="true" />
                    <span>Miami & Surrounding Areas</span>
                  </div>
                </address>

                <a
                  href="https://www.instagram.com/nicorganizes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-cream/80 hover:text-cream transition-colors"
                  aria-label="Follow House of Order on Instagram"
                >
                  <Instagram className="w-5 h-5" strokeWidth={1} />
                  <span className="text-sm tracking-wide">@nicorganizes</span>
                </a>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Minimal */}
      <footer className="py-12 px-6 md:px-12 lg:px-20 bg-teal border-t border-cream/10" role="contentinfo">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-sm tracking-[0.2em] uppercase text-cream/60 font-light">
              House of Order
            </span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-cream/60 text-sm hover:text-cream transition-colors">
              {CONTACT_EMAIL}
            </a>
            <p className="text-cream/40 text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-cream/60 text-sm font-[family-name:var(--font-cormorant)] italic">
              Curating Order. Creating Harmony.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
