"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import FeatureCardEighteen from '@/components/sections/feature/FeatureCardEighteen';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Zap, Binoculars, Star, Heart, HelpCircle } from 'lucide-react';

export default function WildZooPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="large"
      sizing="mediumSizeExtraLargeSpacing"
      background="none"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="WildZoo"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152135573-g9swwpjj.jpg"
          logoAlt="WildZoo Logo"
          navItems={[
            {"name": "Home", "id": "hero"},
            {"name": "About", "id": "about"},
            {"name": "Animals", "id": "products"},
            {"name": "Visit", "id": "faq"},
            {"name": "Contact", "id": "contact"}
          ]}
          button={{
            "text": "Book Visit",
            "href": "contact"
          }}
          buttonClassName="px-6 py-2 rounded-lg font-semibold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Discover the Wonders of WildZoo"
          description="Experience an extraordinary journey through nature with over 200 animal species from around the globe. Create unforgettable memories with your family and friends."
          tag="Welcome to Adventure"
          tagIcon={Zap}
          kpis={[
            {"value": "200+", "label": "Animal Species"},
            {"value": "50K", "label": "Annual Visitors"},
            {"value": "100 Ha", "label": "Park Area"}
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152137294-v6gicq3c.jpg"
          imageAlt="Majestic lion at WildZoo"
          imagePosition="right"
          buttons={[
            {"text": "Plan Your Visit", "href": "contact"},
            {"text": "Learn More", "href": "about"}
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            {"type": "text", "content": "Connecting people with"},
            {"type": "image", "src": "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152143509-5rontqso.jpg", "alt": "Zoo visitor experience"},
            {"type": "text", "content": "the animal kingdom since 1985"}
          ]}
          useInvertedBackground="noInvert"
          buttons={[
            {"text": "Our Story", "href": "about"},
            {"text": "Conservation", "href": "contact"}
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardSix
          title="Featured Animals"
          description="Meet our remarkable residents. Each animal has a unique story and plays an important role in our ecosystem."
          tag="Explore"
          tagIcon={Binoculars}
          products={[
            {"id": "1", "name": "African Lions", "price": "$15/visit", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152137294-v6gicq3c.jpg", "imageAlt": "Lion enclosure"},
            {"id": "2", "name": "Graceful Giraffes", "price": "$15/visit", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152139424-6ybsmq31.jpg", "imageAlt": "Giraffe habitat"},
            {"id": "3", "name": "Striped Zebras", "price": "$15/visit", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152140293-jarto1l4.jpg", "imageAlt": "Zebra savanna"},
            {"id": "4", "name": "Playful Primates", "price": "$15/visit", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152141416-200zyn91.jpg", "imageAlt": "Monkey sanctuary"}
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEighteen
          title="What Makes WildZoo Special"
          description="Experience the difference with premium services and authentic wildlife encounters."
          tag="Why Choose Us"
          tagIcon={Star}
          negativeCard={{
            "title": "Standard Zoo Visit",
            "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152151651-bzum88hu.jpg",
            "imageAlt": "Basic experience",
            "items": [
              "Limited animal interactions",
              "Crowded peak hours",
              "Basic facilities",
              "No guided tours",
              "Limited educational programs"
            ]
          }}
          positiveCard={{
            "title": "WildZoo Experience",
            "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152152571-p0u2ac5b.jpg",
            "imageAlt": "Premium experience",
            "items": [
              "Expert-led animal encounters",
              "Reserved viewing times available",
              "World-class amenities",
              "Professional guided tours",
              "Daily educational presentations"
            ]
          }}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Visitor Stories"
          description="Hear from families and adventure seekers who have experienced WildZoo."
          tag="Reviews"
          tagIcon={Heart}
          testimonials={[
            {"id": "1", "name": "Sarah Johnson", "role": "Family Visitor", "company": "From Chicago", "rating": 5, "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152144682-htnjk2vn.jpg", "imageAlt": "Sarah and family"},
            {"id": "2", "name": "Michael Chen", "role": "Wildlife Enthusiast", "company": "From San Francisco", "rating": 5, "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152146250-yjhau5qx.jpg", "imageAlt": "Michael and partner"},
            {"id": "3", "name": "Emma Rodriguez", "role": "Teacher", "company": "From Austin", "rating": 5, "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152147331-i3xdaz2l.jpg", "imageAlt": "Emma at the zoo"},
            {"id": "4", "name": "David Park", "role": "Adventure Seeker", "company": "From Seattle", "rating": 5, "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152148277-n1c9arlm.jpg", "imageAlt": "David on a tour"},
            {"id": "5", "name": "Patricia Moore", "role": "Grandparent", "company": "From Florida", "rating": 5, "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152149165-8nddns07.jpg", "imageAlt": "Patricia enjoying the visit"},
            {"id": "6", "name": "James Wilson", "role": "Conservation Advocate", "company": "From Colorado", "rating": 5, "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152150519-o1xw0uvj.jpg", "imageAlt": "James with group"}
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about visiting WildZoo."
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {"id": "1", "title": "What are the zoo operating hours?", "content": "WildZoo is open daily from 9:00 AM to 6:00 PM. Extended hours available during summer months. Check our website for seasonal schedules."},
            {"id": "2", "title": "How much are tickets?", "content": "Adult tickets are $25, children (3-12) are $15, and seniors (65+) receive 20% off. Family packages and group discounts are available."},
            {"id": "3", "title": "Can I bring food and drinks?", "content": "Outside food is not permitted, but we have several cafes and restaurants throughout the park. You can bring your own water bottles."},
            {"id": "4", "title": "Are there guided tours available?", "content": "Yes, professional guided tours are available daily at 10:00 AM, 1:00 PM, and 3:00 PM. Advanced booking is recommended for group tours."},
            {"id": "5", "title": "Is the park accessible for wheelchairs?", "content": "Absolutely. WildZoo is fully accessible with paved paths, accessible restrooms, and wheelchair rental services available at the entrance."},
            {"id": "6", "title": "What is your pet policy?", "content": "Service animals are welcome. Pets are not permitted in the park, but we have secure pet care facilities available at the entrance."}
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Plan Your Zoo Adventure"
          description="Have questions or need group reservations? Get in touch with our team. We'll help you plan the perfect visit."
          inputs={[
            {"name": "name", "type": "text", "placeholder": "Full Name", "required": true},
            {"name": "email", "type": "email", "placeholder": "Email Address", "required": true},
            {"name": "phone", "type": "tel", "placeholder": "Phone Number", "required": false},
            {"name": "visitDate", "type": "date", "placeholder": "Preferred Visit Date", "required": false}
          ]}
          textarea={{
            "name": "message",
            "placeholder": "Tell us about your group size, interests, or special requests...",
            "rows": 5,
            "required": true
          }}
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152138176-3axzp4af.jpg"
          imageAlt="Elephant in the zoo"
          mediaPosition="right"
          buttonText="Request Information"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="WildZoo"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152135573-g9swwpjj.jpg"
          logoWidth={120}
          logoHeight={40}
          copyrightText="© 2025 WildZoo. All rights reserved."
          columns={[
            {
              "title": "Visit",
              "items": [
                {"label": "Plan Your Visit", "href": "contact"},
                {"label": "Ticket Prices", "href": "#"},
                {"label": "Hours", "href": "#"},
                {"label": "Accessibility", "href": "#"}
              ]
            },
            {
              "title": "Animals",
              "items": [
                {"label": "Featured Animals", "href": "products"},
                {"label": "Conservation", "href": "#"},
                {"label": "Educational Programs", "href": "#"},
                {"label": "Guided Tours", "href": "#"}
              ]
            },
            {
              "title": "Company",
              "items": [
                {"label": "About Us", "href": "about"},
                {"label": "Contact", "href": "contact"},
                {"label": "Careers", "href": "#"},
                {"label": "Press", "href": "#"}
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}