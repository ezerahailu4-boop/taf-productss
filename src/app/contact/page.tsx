"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const DEPARTMENTS = [
  {
    title: "Commercial & Wholesale Sales",
    desc: "For bulk carton orders, pallet distribution, and dealership territories across Ethiopia.",
    phone: "+251 11 662 0000 / +251 91 123 4567",
    email: "sales@tafenergies.com",
    badge: "DIRECT SALES",
  },
  {
    title: "Technical & Quality Assurance Desk",
    desc: "Technical Data Sheets (TDS), Batch Certificates of Analysis (CoA), and engine compatibility advice.",
    phone: "+251 11 662 0001",
    email: "technical@tafenergies.com",
    badge: "LAB & ASTM",
  },
  {
    title: "Corporate & Government Tenders",
    desc: "Procurement tenders for public transport fleets, municipal vehicles, and logistics operations.",
    phone: "+251 11 662 0002",
    email: "tenders@tafenergies.com",
    badge: "CORPORATE",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Wholesale Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const whatsappMessage = encodeURIComponent(
    `Hello TAF Energies PLC,\nName: ${formData.name || "Customer"}\nPhone: ${formData.phone || "Not provided"}\nSubject: ${formData.subject}\nMessage: ${formData.message || "Contact inquiry regarding Master Optima 20W-50 SM"}`
  );

  return (
    <div className="min-h-screen bg-ink text-paper">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <div className="border-b border-paper/10 pb-8 mb-10">
            <span className="rounded-full border border-flame-500/40 bg-flame-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-flame-400">
              OFFICIAL CHANNELS
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-paper mt-3">
              CONTACT <span className="gradient-flame-text">TAF ENERGIES PLC</span>
            </h1>
            <p className="mt-4 text-sm md:text-base text-cream/80 max-w-2xl leading-relaxed">
              Reach our commercial sales desk, technical team, or headquarters in Addis Ababa.
            </p>
          </div>

          {/* Department Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {DEPARTMENTS.map((dept) => (
              <div
                key={dept.title}
                className="card-glass rounded-2xl p-6 border border-paper/15 flex flex-col justify-between"
              >
                <div>
                  <span className="rounded border border-flame-500/40 bg-flame-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-flame-400">
                    {dept.badge}
                  </span>
                  <h3 className="font-display text-xl text-paper mt-3">{dept.title}</h3>
                  <p className="text-xs text-cream/70 mt-1 leading-relaxed">{dept.desc}</p>
                  
                  <div className="mt-4 space-y-1.5 border-t border-paper/10 pt-3 text-xs">
                    <p className="text-paper font-semibold">📞 {dept.phone}</p>
                    <p className="text-smoke">✉️ {dept.email}</p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-paper/10">
                  <a
                    href={`tel:${dept.phone.split("/")[0].trim()}`}
                    className="text-xs font-bold text-flame-400 hover:underline"
                  >
                    Call Directly &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Form & Physical Location */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
            {/* Form */}
            <div className="lg:col-span-7 card-glass rounded-3xl p-8 border border-paper/15 shadow-xl">
              <h3 className="font-display text-2xl text-paper mb-2">SEND DIRECT INQUIRY</h3>
              <p className="text-xs text-smoke mb-6">Our sales desk replies within 2 hours during normal business hours.</p>

              {submitted ? (
                <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 text-center">
                  <h4 className="font-display text-xl text-paper">Message Received!</h4>
                  <p className="text-xs text-cream/80 mt-2 max-w-sm mx-auto">
                    Thank you, {formData.name || "Customer"}. Our commercial team in Addis Ababa will call or message you shortly.
                  </p>
                  <a
                    href={`https://wa.me/251911234567?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-bold text-ink"
                  >
                    Follow up immediately on WhatsApp &rarr;
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-smoke mb-1 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-paper/15 bg-ink-soft px-4 py-3 text-sm text-paper focus:border-flame-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-smoke mb-1 uppercase tracking-wider">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+251 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-paper/15 bg-ink-soft px-4 py-3 text-sm text-paper focus:border-flame-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-smoke mb-1 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-paper/15 bg-ink-soft px-4 py-3 text-sm text-paper focus:border-flame-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-smoke mb-1 uppercase tracking-wider">
                        Inquiry Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full rounded-xl border border-paper/15 bg-ink-soft px-4 py-3 text-sm text-paper focus:border-flame-500 focus:outline-none"
                      >
                        <option className="bg-ink" value="Wholesale Inquiry">Wholesale Carton Orders</option>
                        <option className="bg-ink" value="Dealership Application">Become an Authorized Dealer</option>
                        <option className="bg-ink" value="Technical / TDS">Technical Data &amp; ASTM Inquiry</option>
                        <option className="bg-ink" value="Fleet Procurement">Fleet / Corporate Supply</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-smoke mb-1 uppercase tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Specify your volume, delivery city, or vehicle questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-paper/15 bg-ink-soft px-4 py-3 text-sm text-paper focus:border-flame-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      className="btn-flame w-full sm:w-auto rounded-xl px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-ink cursor-pointer"
                    >
                      Send Message
                    </button>
                    <a
                      href={`https://wa.me/251911234567?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-400 hover:underline"
                    >
                      Send directly via WhatsApp &rarr;
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* Location & Physical Map Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="card-glass rounded-3xl p-6 md:p-8 border border-paper/15">
                <span className="rounded border border-flame-500/40 bg-flame-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-flame-400">
                  PHYSICAL LOCATION
                </span>
                <h4 className="font-display text-2xl text-paper mt-3">HEAD OFFICE &amp; CENTRAL DEPOT</h4>
                <div className="mt-3 space-y-2 text-xs md:text-sm text-cream/80">
                  <p><strong>TAF Energies PLC</strong></p>
                  <p>TAF Business Complex, Debre Zeit Road</p>
                  <p>Gotera Industrial Zone, Kirkos Sub-City</p>
                  <p>P.O. Box 2541, Addis Ababa, Ethiopia</p>
                </div>

                <div className="mt-6 border-t border-paper/10 pt-4 space-y-2 text-xs text-smoke">
                  <p><strong>Working Hours:</strong></p>
                  <p>Monday – Friday: 8:00 AM – 5:30 PM (EAT)</p>
                  <p>Saturday: 8:00 AM – 1:00 PM (EAT)</p>
                  <p>Sunday &amp; Public Holidays: Closed</p>
                </div>

                <div className="mt-6 pt-4 border-t border-paper/10">
                  <a
                    href="https://maps.google.com/?q=Debre+Zeit+Road+Addis+Ababa+Ethiopia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-flame-400 hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

