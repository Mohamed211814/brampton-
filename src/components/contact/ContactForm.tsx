"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    device: "Firestick",
    plan: "1-month",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message via email server.");
      }

      setStatus("success");
    } catch (err: unknown) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        "Could not deliver the message automatically. Please reach out to us directly via WhatsApp or email."
      );
    }
  };

  const mailtoFallback = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    `IPTV Brampton Inquiry from ${formData.name || "Customer"}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nDevice: ${formData.device}\nPlan: ${formData.plan}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/50">
      {status === "success" ? (
        <div className="text-center py-10 space-y-4 animate-in fade-in">
          <div className="w-14 h-14 rounded-full bg-red-50 border border-red-200 text-red-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-950">Inquiry Received!</h3>
          <p className="text-slate-700 text-sm max-w-md mx-auto leading-relaxed">
            Thank you for contacting <span className="text-slate-950 font-bold">IPTV Brampton</span>. Your message has been forwarded to our support team at <span className="text-red-600 font-mono font-medium">{siteConfig.contact.email}</span>. We will reply to <span className="text-slate-950 font-mono font-semibold">{formData.email}</span> shortly (typically under 2 hours).
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsAppRawNumber}?text=${encodeURIComponent(
                `Hello, I submitted an inquiry under the name ${formData.name} for ${formData.device}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-colors shadow-md shadow-red-200 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Follow up on WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setFormData({ name: "", email: "", device: "Firestick", plan: "1-month", message: "" });
              }}
              className="text-xs text-slate-500 hover:text-slate-900 underline pt-2 sm:pt-0 cursor-pointer"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm space-y-2">
              <p className="font-semibold">{errorMessage}</p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={mailtoFallback}
                  className="inline-flex items-center gap-1 font-bold text-red-700 hover:underline"
                >
                  Click here to send email directly ({siteConfig.contact.email}) &rarr;
                </a>
                <a
                  href={siteConfig.contact.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-red-700 hover:underline"
                >
                  Or message us on WhatsApp &rarr;
                </a>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Your Full Name <span className="text-red-600">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Jaspreet Singh"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-950 placeholder:text-slate-400 text-sm focus:outline-none focus:bg-white focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-950 placeholder:text-slate-400 text-sm focus:outline-none focus:bg-white focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="device" className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Primary Streaming Device
              </label>
              <select
                id="device"
                value={formData.device}
                onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-950 text-sm focus:outline-none focus:bg-white focus:border-red-600"
              >
                <option value="Firestick">Amazon Fire TV / Firestick</option>
                <option value="Samsung TV">Samsung Smart TV (Tizen)</option>
                <option value="LG TV">LG Smart TV (webOS)</option>
                <option value="Android TV">Android TV / Google TV / Nvidia Shield</option>
                <option value="Apple TV">Apple TV / iPhone / iPad</option>
                <option value="MAG / Formuler">MAG or Formuler Box</option>
                <option value="PC / Mac">Windows PC or Mac</option>
                <option value="Other">Other / Not Sure</option>
              </select>
            </div>
            <div>
              <label htmlFor="plan" className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Interested Plan (CAD)
              </label>
              <select
                id="plan"
                value={formData.plan}
                onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-950 text-sm focus:outline-none focus:bg-white focus:border-red-600"
              >
                <option value="1-month">1 Month Access ($12.99 CAD)</option>
                <option value="3-months">3 Months Access ($25.50 CAD)</option>
                <option value="6-months">6 Months Access ($50.99 CAD)</option>
                <option value="12-months">12 Months Access ($79.99 CAD)</option>
                <option value="trial-inquiry">General Question / Setup Advice</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
              Message or Specific Channels Needed
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us if you need help with a specific app (e.g. TiviMate, IBO Player) or specific sports leagues / international channel packages..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-950 placeholder:text-slate-400 text-sm focus:outline-none focus:bg-white focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
            ></textarea>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 transition-colors text-sm shadow-lg shadow-red-200 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{status === "submitting" ? "Submitting..." : "Send Inquiry"}</span>
            </button>
            <div className="text-xs text-slate-500 flex items-center gap-1.5 text-center sm:text-right">
              <AlertCircle className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>Average response time: {siteConfig.contact.supportResponseTime}</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
