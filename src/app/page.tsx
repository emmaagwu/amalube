// app/page.tsx
// /* eslint-disable react/no-unescaped-entities */

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import ImageCarousel from '@/components/ImageCarousel';
import { SVGProps } from 'react';


interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}



export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // const projectImages = [
  //   {
  //     src: "/api/placeholder/800/600",
  //     alt: "Modern gas station installation",
  //     caption: "State-of-the-art cooking gas station in Houston"
  //   },
  //   {
  //     src: "/api/placeholder/800/600",
  //     alt: "Gas storage facilities",
  //     caption: "Safety-compliant gas storage and dispensing systems"
  //   },
  //   {
  //     src: "/api/placeholder/800/600",
  //     alt: "Equipment installation",
  //     caption: "Professional installation by certified technicians"
  //   },
  //   {
  //     src: "/api/placeholder/800/600",
  //     alt: "Safety systems",
  //     caption: "Advanced safety monitoring and control systems"
  //   },
  //   {
  //     src: "/api/placeholder/800/600",
  //     alt: "Station management",
  //     caption: "User-friendly station management interfaces"
  //   },
  //   {
  //     src: "/api/placeholder/800/600",
  //     alt: "Gas refilling service",
  //     caption: "Efficient gas refilling and distribution services"
  //   },
  //   {
  //     src: "/api/placeholder/800/600",
  //     alt: "Maintenance work",
  //     caption: "Regular maintenance to ensure optimal performance"
  //   },
  //   {
  //     src: "/api/placeholder/800/600",
  //     alt: "Compliance consultation",
  //     caption: "Expert regulatory compliance consultation"
  //   },
  //   {
  //     src: "/api/placeholder/800/600",
  //     alt: "Business planning",
  //     caption: "Strategic business planning for gas station operations"
  //   },
  //   {
  //     src: "/api/placeholder/800/600",
  //     alt: "Customer service",
  //     caption: "Dedicated customer support and service"
  //   }
  // ];

  const projectImages = [
    '/images/gas1.jpg',
    '/images/gas2.jpg',
    '/images/gas3.jpg',
    '/images/gas4.jpg',
    '/images/gas5.jpg',
    '/images/gas6.jpg',
    '/images/gas1.jpg',
    '/images/gas2.jpg',
    '/images/gas3.jpg',
    '/images/gas4.jpg',
  ]


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <header className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* <div className="flex items-center">
            <span className="font-bold text-2xl text-blue-600">Amalube</span>
          </div> */}
          <Image
            src="/images/Amalube-logo.jpeg"
            alt="Amalube Logo"
            width={120} // adjust as needed
            height={40}
            priority // optional: loads fast on initial render
          />

          {/* Desktop Navigation */}
          <NavigationMenu.Root className="hidden md:flex">
            <NavigationMenu.List className="flex space-x-8">
              <NavigationMenu.Item>
                <NavigationMenu.Link className="text-gray-700 hover:text-blue-600 font-medium" href="#hero">
                  Home
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link className="text-gray-700 hover:text-blue-600 font-medium" href="#services">
                  Services
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link className="text-gray-700 hover:text-blue-600 font-medium" href="#about">
                  About
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link className="text-gray-700 hover:text-blue-600 font-medium" href="#testimonials">
                  Testimonials
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link className="text-gray-700 hover:text-blue-600 font-medium" href="#contact">
                  Contact
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition duration-300">
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
          <Dialog.Content className="fixed top-0 right-0 h-full w-3/4 bg-white z-50 p-6 shadow-xl overflow-auto">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-xl text-blue-600">Amalube</span>
              <Dialog.Close asChild>
                <button className="text-gray-700">
                  <X size={24} />
                </button>
              </Dialog.Close>
            </div>
            <nav className="flex flex-col space-y-4">
              <a
                href="#hero"
                className="text-gray-700 py-2 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-700 py-2 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-700 py-2 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 py-2 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-700 py-2 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition duration-300 mt-4">
                Get a Quote
              </button>
            </nav>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-600 font-medium">Premium Gas Station Solutions</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-gray-900 leading-tight">
                Setting Up Your <span className="text-blue-600">Cooking Gas</span> Station Made Simple
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Amalube provides end-to-end solutions for cooking gas station setup, from planning and permits to installation and maintenance. Trust our experts to fuel your business success.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition duration-300 inline-flex items-center">
                  Get Started <ArrowRight size={18} className="ml-2" />
                </a>
                <a href="#services" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition duration-300">
                  Our Services
                </a>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl">
                {/* <Image
                  src="/images/Amalube-Hero2.jpeg"
                  alt="Modern Cooking Gas Station"
                  layout="fill"
                  objectFit="cover"
                  className="z-0"
                /> */}
                <Image
                  src="/images/Amalube-Hero2.jpeg"
                  alt="Modern Cooking Gas Station"
                  fill
                  className="object-cover"
                  priority // Ensures it loads ASAP in hero
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-medium">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-gray-900">Comprehensive Gas Station Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial planning to ongoing maintenance, we provide everything you need to establish and run a successful cooking gas station.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center bg-blue-100 p-3 rounded-lg mb-5">
                  <service.icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#contact" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition duration-300 inline-flex items-center">
              Request a Consultation <ArrowRight size={18} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-medium">Our Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-gray-900">See Our Work In Action</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse through our gallery of completed gas station projects and installations that showcase our expertise and quality workmanship.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* <ImageCarousel
              images={projectImages}
              autoScrollInterval={3000}
              className="mb-8"
            /> */}
            <ImageCarousel
              images={projectImages}
              caption={{
                title: 'Our Gas Station Setups',
                description: 'Explore our completed projects and see the quality we deliver.',
              }}
              autoplaySpeed={5000} // Optional: defaults to 4000ms
              enableLightbox={true} // Optional: defaults to true
            />
          </motion.div>

          <div className="text-center mt-10">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition duration-300 inline-flex items-center">
              Discuss Your Project <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div
  className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-lg"
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden">
    <Image
      src="/images/amalubeteam.jpg" // <-- replace this with your image path
      alt="Amalube Team or Facility"
      fill
      className="object-cover"
      priority
    />
  </div>
</motion.div>

            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-medium">About Amalube</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-gray-900">Your Trusted Partner in Gas Station Solutions</h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 2022, Amalube has been at the forefront of the cooking gas station industry, providing unmatched expertise and comprehensive solutions to entrepreneurs and businesses across the country.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of certified engineers, safety experts, and business consultants work together to ensure your gas station meets all regulations, operates efficiently, and generates optimal returns.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {aboutFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check size={18} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition duration-300 inline-flex items-center">
                Learn More About Us <ArrowRight size={18} className="ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-medium">Client Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-gray-900">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what some of our satisfied clients have to say about working with Amalube.
            </p>

          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="rounded-full bg-blue-100 h-12 w-12 flex items-center justify-center text-blue-600 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">&quot;{testimonial.quote}&quot;</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="font-medium">Contact Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">Get In Touch With Our Experts</h2>
              <p className="text-lg opacity-90 mb-8">
                Whether you&apos;re ready to start your gas station journey or just have questions, our team is here to help. Reach out today for a consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 rounded-full p-3 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="opacity-90">+234 803 765 8245</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 rounded-full p-3 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="opacity-90">info@amalube.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 rounded-full p-3 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="opacity-90">1Suite 102, Cosy plaza, 16 Ada George road, by location junction, rivers state, Port Harcourt</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Consultation</h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none text-gray-900"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none text-gray-900"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none text-gray-900"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none text-gray-900"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-300">
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <span className="font-bold text-2xl text-blue-400">Amalube</span>
              <p className="mt-4 text-gray-400">
                Providing comprehensive cooking gas station solutions since 2010. Your trusted partner for setup, maintenance, and success.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gas Station Setup</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safety Compliance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Equipment Supply</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Maintenance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Consultation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone size={16} className="mr-2 text-blue-400" />
                  <span className="text-gray-400">+234 803 765 8245</span>
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="mr-2 text-blue-400" />
                  <span className="text-gray-400">info@amalube.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin size={16} className="mr-2 text-blue-400" />
                  <span className="text-gray-400">Suite 102, Cosy plaza, 16 Ada George road, by location junction, rivers state, Port Harcourt</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Amalube. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.053 10.053 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Data for the landing page
const services = [
  {
    title: "Gas Station Planning & Design",
    description: "Expert planning and design services for your cooking gas station, ensuring optimal layout, efficiency, and compliance with safety regulations.",
    icon: DocumentIcon
  },
  {
    title: "Equipment Supply & Installation",
    description: "High-quality gas storage tanks, dispensers, compressors, and all necessary equipment for your station, professionally installed by our experts.",
    icon: ToolIcon
  },
  {
    title: "Regulatory Compliance & Permits",
    description: "Navigate complex regulations with ease. We handle all necessary permits, licenses, and compliance requirements for your gas station.",
    icon: ShieldIcon
  },
  {
    title: "Safety Systems & Training",
    description: "Comprehensive safety systems installation and staff training programs to ensure your station operates safely and efficiently.",
    icon: AlertIcon
  },
  {
    title: "Maintenance & Technical Support",
    description: "Ongoing maintenance services and 24/7 technical support to keep your gas station running smoothly and prevent costly downtime.",
    icon: WrenchIcon
  },
  {
    title: "Business Consulting",
    description: "Expert advice on business operations, marketing strategies, and growth opportunities to maximize your gas station's profitability.",
    icon: ChartIcon
  }
];

const aboutFeatures = [
  "15+ Years Industry Experience",
  "Certified Safety Experts",
  "Full Compliance Guarantee",
  "Premium Equipment Providers",
  "24/7 Emergency Support",
  "5000+ Projects Completed",
  "Nationwide Coverage",
  "Customer Satisfaction Guarantee"
];

const testimonials = [
  {
    name: "Michael Johnson",
    position: "Gas Station Owner, Abuja",
    quote: "Working with Amalube was a game-changer for my business. Their expert guidance and comprehensive services made setting up my first gas station surprisingly simple. Five years later, I'm operating three successful locations with their continued support.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    position: "Energy Entrepreneur",
    quote: "The team at Amalube handled everything from permits to installation. Their attention to safety and compliance gave me complete peace of mind, and their ongoing support has been invaluable as my business grows.",
    rating: 5
  },
  {
    name: "David Chen",
    position: "Franchise Owner",
    quote: "When expanding our franchise operations to include cooking gas services, Amalube provided expert consultation and seamless implementation. Their industry knowledge and professional approach exceeded our expectations.",
    rating: 4
  }
];

// Custom icons for the services section
// function DocumentIcon(props) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       {...props}
//     >
//       <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
//       <polyline points="14 2 14 8 20 8"></polyline>
//       <line x1="16" y1="13" x2="8" y2="13"></line>
//       <line x1="16" y1="17" x2="8" y2="17"></line>
//       <polyline points="10 9 9 9 8 9"></polyline>
//     </svg>
//   );
// }

// function ToolIcon(props) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       {...props}
//     >
//       <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
//     </svg>
//   );
// }

// function ShieldIcon(props) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       {...props}
//     >
//       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//       <path d="m9 12 2 2 4-4"></path>
//     </svg>
//   );
// }

// function AlertIcon(props) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       {...props}
//     >
//       <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
//       <line x1="12" y1="9" x2="12" y2="13"></line>
//       <line x1="12" y1="17" x2="12.01" y2="17"></line>
//     </svg>
//   );
// }

// function WrenchIcon(props) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       {...props}
//     >
//       <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
//     </svg>
//   );
// }

// function ChartIcon(props) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       {...props}
//     >
//       <line x1="18" y1="20" x2="18" y2="10"></line>
//       <line x1="12" y1="20" x2="12" y2="4"></line>
//       <line x1="6" y1="20" x2="6" y2="14"></line>
//     </svg>
//   );
// }

function DocumentIcon(props: IconProps) {
  const { size = 24, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );
}

function ToolIcon(props: IconProps) {
  const { size = 24, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  );
}

function ShieldIcon(props: IconProps) {
  const { size = 24, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  );
}

function AlertIcon(props: IconProps) {
  const { size = 24, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  );
}

function WrenchIcon(props: IconProps) {
  const { size = 24, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  );
}

function ChartIcon(props: IconProps) {
  const { size = 24, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  );
}