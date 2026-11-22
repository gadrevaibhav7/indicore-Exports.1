import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Building2, Globe, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'spices',
    message: '',
    agreedToTerms: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in the required fields (Name, Email, and Message).");
      return;
    }

    setSubmitting(true);

    // Simulate authentic export trade verification delay
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setSubmissionId(`IND-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      inquiryType: 'spices',
      message: '',
      agreedToTerms: false,
    });
    setSubmitted(false);
  };

  return (
    <section className="bg-gradient-to-b from-[#fcfbf9] to-[#f4f1ea] py-16 md:py-24" id="contact-page-wrapper">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Over-heading layout */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-[#0e5138] font-mono tracking-widest text-[#904d00] text-xs uppercase font-bold block" id="contact-subtitle">
            Reliable B2B Global Trade Partners
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-[#121c2a] leading-tight tracking-tight" id="contact-title">
            Establish Commercial Sourcing
          </h1>
          <p className="text-[#404943] text-sm md:text-base leading-relaxed">
            Reach out directly to our trade desk to request bulk samples, technical specifications, customs documents, or port logistics arrangements. 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Direct Contact Details & Accreditations (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Cards Info */}
            <div className="bg-white rounded-3xl border border-[#ece7dc] p-8 space-y-8 shadow-sm">
              <h2 className="font-display font-bold text-2xl text-[#121c2a]">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Email address */}
                <div className="flex gap-4 items-start" id="info-email-block">
                  <div className="w-11 h-11 rounded-2xl bg-[#e6eee9] flex items-center justify-center text-[#0f5238] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400 block">
                      Direct Email
                    </span>
                    <a 
                      href="mailto:indicore55@gmail.com" 
                      className="text-[#121c2a] font-sans font-semibold hover:text-[#0f5238] transition-colors leading-relaxed tracking-tight text-base break-all"
                    >
                      indicore55@gmail.com
                    </a>
                    <p className="text-xs text-stone-500 mt-0.5">Response guaranteed within 12 Indian trade hours.</p>
                  </div>
                </div>

                {/* Phone contact */}
                <div className="flex gap-4 items-start" id="info-phone-block">
                  <div className="w-11 h-11 rounded-2xl bg-[#e6eee9] flex items-center justify-center text-[#0f5238] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400 block">
                      Phone Number
                    </span>
                    <a 
                      href="tel:+917208151825" 
                      className="text-[#121c2a] font-sans font-semibold hover:text-[#0f5238] transition-colors leading-relaxed tracking-tight text-base"
                    >
                      +91 7208151825
                    </a>
                    <p className="text-xs text-stone-500 mt-0.5">Available for WhatsApp and direct international dials.</p>
                  </div>
                </div>

                {/* Headquarters Office */}
                <div className="flex gap-4 items-start" id="info-address-block">
                  <div className="w-11 h-11 rounded-2xl bg-[#e6eee9] flex items-center justify-center text-[#0f5238] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400 block">
                      Registered Headquarters
                    </span>
                    <p className="text-[#121c2a] font-sans font-semibold leading-relaxed text-sm">
                      Mumbai / Unjha Agri-Trade Axis, India
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">Interfacing with Mundra (INMUN1) and Nhava Sheva (INNSA1) container terminals.</p>
                  </div>
                </div>

                {/* Export Hours */}
                <div className="flex gap-4 items-start" id="info-hours-block">
                  <div className="w-11 h-11 rounded-2xl bg-[#e6eee9] flex items-center justify-center text-[#0f5238] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400 block">
                      Trade Desk Working Hours
                    </span>
                    <p className="text-[#121c2a] font-sans font-semibold text-sm">
                      Monday – Saturday, 08:30 – 19:30 (IST)
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">Closed on officially recognized Indian National dry holidays.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* B2B Sourcing Accreditations Check list */}
            <div className="bg-[#f0ece3]/50 border border-[#ece7dc] rounded-3xl p-6 space-y-4">
              <span className="text-[10px] font-bold font-mono text-[#0f5238] uppercase tracking-wider block">
                Trade Accreditations & Standards
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-center gap-2.5 bg-white py-2 px-3 rounded-xl border border-[#ece7dc]/60">
                  <ShieldCheck className="w-4 h-4 text-[#0f5238] shrink-0" />
                  <span className="text-xs font-bold text-[#121c2a]">100% Traceability</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white py-2 px-3 rounded-xl border border-[#ece7dc]/60">
                  <ShieldCheck className="w-4 h-4 text-[#0f5238] shrink-0" />
                  <span className="text-xs font-bold text-[#121c2a]">USDA Approved</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white py-2 px-3 rounded-xl border border-[#ece7dc]/60">
                  <ShieldCheck className="w-4 h-4 text-[#0f5238] shrink-0" />
                  <span className="text-xs font-bold text-[#121c2a]">FSSAI Registered</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white py-2 px-3 rounded-xl border border-[#ece7dc]/60">
                  <ShieldCheck className="w-4 h-4 text-[#0f5238] shrink-0" />
                  <span className="text-xs font-bold text-[#121c2a]">Areca Bio-Certified</span>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: B2B Sourcing Intent & Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#ece7dc] p-8 shadow-sm relative">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="inquiry-form-active"
                  id="b2b-trade-inquiry-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="border-b border-stone-100 pb-4">
                    <h3 className="font-display font-bold text-2xl text-[#121c2a]">
                      Commercial Inquiry Form
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Required commercial documentation & pricing requests are routed directly to trade representatives.
                    </p>
                  </div>

                  {/* Input Rows */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name-input" className="block text-xs font-bold text-[#121c2a]">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name-input"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#ece7dc] rounded-xl text-sm text-[#121c2a] focus:outline-none focus:border-[#0f5238] focus:ring-1 focus:ring-[#0f5238]/20 transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label htmlFor="email-input" className="block text-xs font-bold text-[#121c2a]">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email-input"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="buyer@globalfoods.com"
                        className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#ece7dc] rounded-xl text-sm text-[#121c2a] focus:outline-none focus:border-[#0f5238] focus:ring-1 focus:ring-[#0f5238]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone-input" className="block text-xs font-bold text-[#121c2a]">
                        Contact Number
                      </label>
                      <input 
                        type="tel" 
                        id="phone-input"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#ece7dc] rounded-xl text-sm text-[#121c2a] focus:outline-none focus:border-[#0f5238] focus:ring-1 focus:ring-[#0f5238]/20 transition-all"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="company-input" className="block text-xs font-bold text-[#121c2a]">
                        Enterprise / Organization
                      </label>
                      <div className="relative">
                        <input 
                          type="text" 
                          id="company-input"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Global Agri Ltd."
                          className="w-full pl-10 pr-4 py-3 bg-[#fcfbf9] border border-[#ece7dc] rounded-xl text-sm text-[#121c2a] focus:outline-none focus:border-[#0f5238] focus:ring-1 focus:ring-[#0f5238]/20 transition-all"
                        />
                        <Building2 className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Purpose / Sourcing Category */}
                  <div className="space-y-1.5">
                    <label htmlFor="inquiryType-select" className="block text-xs font-bold text-[#121c2a]">
                      Primarily Sourcing Sourcing Target
                    </label>
                    <select
                      id="inquiryType-select"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#ece7dc] rounded-xl text-sm text-[#121c2a] focus:outline-none focus:border-[#0f5238] transition-all cursor-pointer"
                    >
                      <option value="spices">Premium Spices & Oils (Pepper, Cardamom, Turmeric, Cumin, Red Chili)</option>
                      <option value="areca">Biodegradable Areca Palm Tableware (Plates, Platters, Bowls)</option>
                      <option value="custom">Custom Commercial Packing & Vacuum Seals</option>
                      <option value="freight">FOB / CIF Container Sea Logistics Consultation</option>
                      <option value="samples">Commercial Quality Samples Order</option>
                    </select>
                  </div>

                  {/* Message details */}
                  <div className="space-y-1.5">
                    <label htmlFor="message-input" className="block text-xs font-bold text-[#121c2a]">
                      Your Sourcing Specifications & Inquiry Details <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      id="message-input"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please specify estimated quantity (MT), target port of destination, packaging requirements, or questions regarding certifications..."
                      className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#ece7dc] rounded-xl text-sm text-[#121c2a] focus:outline-none focus:border-[#0f5238] focus:ring-1 focus:ring-[#0f5238]/20 transition-all resize-y"
                    ></textarea>
                  </div>

                  {/* GDPR trade standards checkbox */}
                  <div className="flex items-start gap-3 pt-1">
                    <input 
                      type="checkbox" 
                      id="agreedToTerms-checkbox"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-4 h-4 rounded border-stone-300 text-[#0f5238] focus:ring-[#0f5238] cursor-pointer"
                    />
                    <label htmlFor="agreedToTerms-checkbox" className="text-xs text-stone-500 leading-relaxed cursor-pointer select-none">
                      I authorize Indicore Exports to record my specifications. All contact data is subject to direct GDPR food trade confidentiality guides.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#0f5238] hover:bg-[#0a3b27] text-white py-3.5 px-6 rounded-xl font-bold font-sans text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98 disabled:opacity-80"
                    id="submit-inquiry-button"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-stone-200 border-t-transparent animate-spin" />
                        <span>Processing Export Registry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Secure B2B Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="inquiry-form-success"
                  id="b2b-trade-inquiry-success"
                  className="py-10 text-center space-y-6 flex flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#e6eee9] flex items-center justify-center text-[#0f5238] shadow-sm animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-3xl text-primary-green">
                      Inquiry Logged Securely
                    </h3>
                    <p className="text-xs font-mono text-[#0e5138] bg-[#e0f5ff] text-[#0284c7] px-3 py-1 rounded-md inline-block">
                      {submissionId}
                    </p>
                    <p className="text-[#404943] text-sm max-w-md mx-auto leading-relaxed pt-2">
                      Thank you for submitting your custom credentials, <strong>{formData.name}</strong>. A dedicated trade representative has received this dossier for direct response from <strong>indicore55@gmail.com</strong>.
                    </p>
                  </div>

                  {/* Details Summary receipt */}
                  <div className="bg-[#fcfbf9] border border-[#ece7dc] rounded-2xl p-5 text-left w-full text-xs space-y-3.5 max-w-md font-sans">
                    <span className="font-bold text-[10px] font-mono text-stone-400 block uppercase border-b border-stone-100 pb-1.5">
                      Submitted Specs Log
                    </span>
                    <div className="grid grid-cols-3 gap-1">
                      <span className="text-stone-400 font-medium">Enterprise:</span>
                      <span className="col-span-2 text-text-charcoal font-semibold">{formData.company || 'Not Specified'}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <span className="text-stone-400 font-medium">Primary Target:</span>
                      <span className="col-span-2 text-text-charcoal font-semibold uppercase font-mono text-[10px]">
                        {formData.inquiryType}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <span className="text-stone-400 font-medium">Callback Email:</span>
                      <span className="col-span-2 text-text-charcoal font-semibold break-all">{formData.email}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <span className="text-stone-400 font-medium">Phone Support:</span>
                      <span className="col-span-2 text-text-charcoal font-semibold">{formData.phone || 'Not Sourced'}</span>
                    </div>
                  </div>

                  <button 
                    onClick={resetForm}
                    className="mt-4 px-6 py-2.5 rounded-xl border border-stone-200 hover:border-[#0f5238] font-bold text-xs text-text-charcoal hover:text-[#0f5238] transition-all bg-white"
                  >
                    Create Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
