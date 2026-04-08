"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Contactform = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", city: "", message: "", agreed: false });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agreed) { toast.error("Please agree to the Terms and Conditions."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        toast.success("Request sent! We’ll get back to you soon.");
        setForm({ firstName: "", lastName: "", email: "", city: "", message: "", agreed: false });
      } else {
        toast.error("Failed to send. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="overflow-x-hidden bg-gray-50 dark:bg-darkmode">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
          {/* Left Content */}
          <div className="md:col-span-6 col-span-12 flex flex-col justify-start" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
            <div className="flex gap-2 items-center mb-4">
              <span className="w-3 h-3 rounded-full bg-success"></span>
              <span className="font-medium text-sm text-midnight_text">Contact Dana Electrical</span>
            </div>

            <h2 className="text-midnight_text font-bold sm:text-4xl text-2xl leading-tight mb-8">Let’s discuss your electrical requirements and find the right solution</h2>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 pb-8 border-b border-border">
              <div>
                <span className="text-grey text-lg">Phone</span>
                <p className="text-midnight_text text-lg">+91 8460580905</p>
              </div>
              <div>
                <span className="text-grey text-lg">Email</span>
                <p className="text-midnight_text text-lg">danaelectricals347@gmail.com</p>
              </div>
              <div className="sm:col-span-2 pt-4">
                <span className="text-grey text-lg">Location</span>
                <p className="text-midnight_text text-lg">853-54, Navsari Bazar, Gopipura, Surat - 395001</p>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-grey text-base mb-4">Our Clients:</p>
              <div className="flex flex-col gap-3">
                {[
                  "J Kumar Infraprojects Ltd.",
                  "Cen India Projects Pvt. Ltd.",
                  "Kamar Infrastructure Pvt. Ltd.",
                  "Rahee Infratech Ltd.",
                ].map((client) => (
                  <div key={client} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    <span className="text-midnight_text font-medium text-sm">{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:col-span-6 col-span-12 relative" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            <div className="bg-white dark:bg-darkmode max-w-full sm:max-w-[30rem] md:max-w-[35rem] mx-auto pt-8 pb-8 px-6 rounded-md relative z-10">
              <h2 className="text-midnight_text dark:text-white font-bold sm:text-3xl text-xl mb-4">Request Electrical Service</h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <input
                    type="text" name="firstName" value={form.firstName} onChange={handleChange}
                    placeholder="First name" required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary outline-none bg-transparent dark:text-white dark:border-dark_border"
                  />
                  <input
                    type="text" name="lastName" value={form.lastName} onChange={handleChange}
                    placeholder="Last name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary outline-none bg-transparent dark:text-white dark:border-dark_border"
                  />
                </div>

                <input
                  type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="your@email.com" required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary outline-none bg-transparent dark:text-white dark:border-dark_border"
                />
                <input
                  type="text" name="city" value={form.city} onChange={handleChange}
                  placeholder="City / Area"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary outline-none bg-transparent dark:text-white dark:border-dark_border"
                />
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Describe your electrical requirement" required
                  className="w-full h-36 px-4 py-3 border border-border rounded-lg focus:border-primary outline-none bg-transparent dark:text-white dark:border-dark_border"
                ></textarea>

                <div className="flex items-start gap-2">
                  <input type="checkbox" name="agreed" checked={form.agreed} onChange={handleChange} className="mt-1" />
                  <p className="text-grey dark:text-white/50 text-sm">
                    I agree to the <span className="text-primary cursor-pointer">Terms and Conditions</span>
                  </p>
                </div>

                <button type="submit" disabled={loading}
                  className="w-full bg-primary hover:bg-blue-700 disabled:opacity-60 text-white py-3 rounded-lg mt-2 transition-colors">
                  {loading ? "Sending..." : "Submit Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;
