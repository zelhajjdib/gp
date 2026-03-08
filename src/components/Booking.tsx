"use client";

import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { bookingSchema, type BookingFormData } from "@/lib/validations";

const SERVICES = [
  { id: "ext", name: "Lavage Extérieur", price: "29€+", duration: "1h" },
  { id: "int", name: "Lavage Intérieur", price: "39€+", duration: "1h30" },
  { id: "full", name: "Lavage Complet", price: "59€+", duration: "2h" },
  { id: "polish", name: "Polish & Protection", price: "149€+", duration: "3h" },
  { id: "premium", name: "Detailing Premium", price: "299€+", duration: "Journée" },
] as const;

const TIME_SLOTS = ["08:00", "09:30", "11:00", "13:00", "14:30", "16:00"];
const DAYS_FR = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const MONTHS_FR = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

function getAvailableDays(count = 21) {
  const days: Date[] = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  while (days.length < count) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0) days.push(new Date(d));
  }
  return days;
}

function toDateString(d: Date) {
  return d.toISOString().split("T")[0];
}

type Step = 1 | 2 | 3;

const inputClass = "w-full bg-[#0a0a0a] border border-[#181818] focus:border-[#3D52D5]/60 text-white text-sm px-4 py-3.5 outline-none transition-all duration-200 placeholder:text-[#2a2a2a]";

export default function Booking() {
  const [step, setStep] = useState<Step>(1);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string>("");

  const availableDays = useMemo(() => getAvailableDays(), []);

  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const handleServiceSelect = (id: string) => {
    setSelectedService(id);
    setValue("service", id as BookingFormData["service"]);
  };

  const handleDateSelect = (dateStr: string) => {
    setSelectedDate(dateStr);
    setSelectedTime("");
    setValue("date", dateStr);
    setValue("time", "");
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setValue("time", time);
  };

  const canGoStep2 = selectedService !== "";
  const canGoStep3 = selectedDate !== "" && selectedTime !== "";

  const onSubmit = async (data: BookingFormData) => {
    setServerError("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setServerError(json.message ?? "Une erreur est survenue. Veuillez réessayer.");
        return;
      }
      setSubmitted(true);
    } catch {
      setServerError("Erreur réseau. Vérifiez votre connexion et réessayez.");
    }
  };

  if (submitted) {
    return (
      <section id="reservation" className="py-28 bg-[#080808]" style={{ borderTop: "1px solid #111" }}>
        <div className="mx-auto max-w-2xl px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className="w-14 h-14 bg-[#3D52D5] flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(61,82,213,0.4)]">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M5 14l7 7L23 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="font-[family-name:var(--font-barlow)] font-black italic text-4xl uppercase text-white mb-4">
              Demande envoyée !
            </h2>
            <p className="text-[#444] text-sm leading-loose mb-10 tracking-wide">
              Nous avons bien reçu votre demande de rendez-vous.<br />
              Nous vous confirmons votre créneau par email dans les plus brefs délais.
            </p>
            <button
              onClick={() => { setSubmitted(false); setStep(1); setSelectedService(""); setSelectedDate(""); setSelectedTime(""); }}
              className="text-[11px] text-[#333] hover:text-[#3D52D5] uppercase tracking-widest transition-colors border-b border-[#1c1c1c] hover:border-[#3D52D5]/40 pb-0.5"
            >
              Faire une nouvelle réservation
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservation" className="py-28 bg-[#080808]" style={{ borderTop: "1px solid #111" }}>
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-[1px] bg-[#3D52D5]" />
            <span className="text-[#3D52D5] text-[10px] font-bold tracking-[0.4em] uppercase">
              Prise de rendez-vous
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-barlow)] font-black italic text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.92] uppercase text-white">
            Réservez
            <br />
            <span className="text-[#3D52D5]">votre</span> créneau
          </h2>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-0 mb-14 max-w-xs">
          {([1, 2, 3] as Step[]).map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 flex items-center justify-center text-[10px] font-bold tracking-wider transition-all duration-300 ${
                step === s ? "bg-[#3D52D5] text-white" : step > s ? "bg-[#111] text-[#3D52D5] border border-[#3D52D5]/30" : "bg-[#0a0a0a] border border-[#181818] text-[#2a2a2a]"
              }`}>
                {step > s ? "✓" : s}
              </div>
              {s < 3 && (
                <div className={`w-12 h-[1px] transition-all duration-500 ${step > s ? "bg-[#3D52D5]/50" : "bg-[#181818]"}`} />
              )}
            </div>
          ))}
          <span className="ml-4 text-[10px] text-[#2a2a2a] uppercase tracking-widest">
            {step === 1 ? "Service" : step === 2 ? "Créneau" : "Vos infos"}
          </span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <AnimatePresence mode="wait">

            {/* STEP 1 */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }}>
                <p className="text-[#2a2a2a] text-[11px] uppercase tracking-widest mb-6">Quelle prestation souhaitez-vous ?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[1px] bg-[#111] mb-8">
                  {SERVICES.map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => handleServiceSelect(s.id)}
                      className={`text-left p-6 transition-all duration-200 ${
                        selectedService === s.id ? "bg-[#3D52D5]" : "bg-[#0a0a0a] hover:bg-[#0e0e0e]"
                      }`}
                    >
                      <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-3 ${selectedService === s.id ? "text-white/60" : "text-[#3D52D5]"}`}>
                        {s.duration}
                      </p>
                      <p className="font-[family-name:var(--font-barlow)] font-bold italic text-lg uppercase leading-tight mb-2 text-white">
                        {s.name}
                      </p>
                      <p className={`text-sm font-semibold ${selectedService === s.id ? "text-white/70" : "text-[#333]"}`}>
                        {s.price}
                      </p>
                    </button>
                  ))}
                </div>
                {errors.service && <p className="text-red-400 text-xs mb-4">{errors.service.message}</p>}
                <button
                  type="button"
                  disabled={!canGoStep2}
                  onClick={() => setStep(2)}
                  className="group relative inline-flex items-center gap-3 bg-[#3D52D5] disabled:bg-[#111] disabled:text-[#2a2a2a] disabled:cursor-not-allowed text-white font-bold uppercase tracking-[0.18em] text-[10px] px-8 py-4 overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(61,82,213,0.45)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Choisir un créneau
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-white/10 translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-500 skew-x-[-8deg]" />
                </button>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }}>
                <p className="text-[#2a2a2a] text-[11px] uppercase tracking-widest mb-6">Choisissez une date disponible</p>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-[1px] bg-[#111] mb-8">
                  {availableDays.map((d) => {
                    const str = toDateString(d);
                    const isSelected = selectedDate === str;
                    return (
                      <button
                        type="button"
                        key={str}
                        onClick={() => handleDateSelect(str)}
                        className={`flex flex-col items-center justify-center py-4 transition-all duration-200 ${isSelected ? "bg-[#3D52D5]" : "bg-[#0a0a0a] hover:bg-[#0e0e0e]"}`}
                      >
                        <span className={`text-[9px] uppercase tracking-widest mb-1 ${isSelected ? "text-white/60" : "text-[#2a2a2a]"}`}>
                          {DAYS_FR[d.getDay()]}
                        </span>
                        <span className="font-[family-name:var(--font-barlow)] font-bold text-xl text-white">
                          {d.getDate()}
                        </span>
                        <span className={`text-[9px] ${isSelected ? "text-white/60" : "text-[#2a2a2a]"}`}>
                          {MONTHS_FR[d.getMonth()].slice(0, 3)}.
                        </span>
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {selectedDate && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mb-8">
                      <p className="text-[#2a2a2a] text-[11px] uppercase tracking-widest mb-4">
                        Créneaux —{" "}
                        <span className="text-[#555]">
                          {new Date(selectedDate + "T12:00:00").toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
                        </span>
                      </p>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-[1px] bg-[#111]">
                        {TIME_SLOTS.map((t) => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => handleTimeSelect(t)}
                            className={`py-3.5 text-sm font-semibold tracking-wider transition-all duration-200 ${
                              selectedTime === t ? "bg-[#3D52D5] text-white" : "bg-[#0a0a0a] hover:bg-[#0e0e0e] text-[#333] hover:text-white"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {(errors.date || errors.time) && (
                  <p className="text-red-400 text-xs mb-4">{errors.date?.message ?? errors.time?.message}</p>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="border border-[#181818] hover:border-[#333] text-[#333] hover:text-[#888] font-bold uppercase tracking-[0.18em] text-[10px] px-8 py-4 transition-all duration-200"
                  >
                    Retour
                  </button>
                  <button
                    type="button"
                    disabled={!canGoStep3}
                    onClick={() => setStep(3)}
                    className="group relative inline-flex items-center gap-3 bg-[#3D52D5] disabled:bg-[#111] disabled:text-[#2a2a2a] disabled:cursor-not-allowed text-white font-bold uppercase tracking-[0.18em] text-[10px] px-8 py-4 overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(61,82,213,0.45)]"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Vos coordonnées
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-white/10 translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-500 skew-x-[-8deg]" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }}>
                {/* Summary */}
                <div className="border border-[#111] p-5 mb-10 flex flex-wrap gap-8">
                  <div>
                    <p className="text-[#2a2a2a] text-[9px] uppercase tracking-widest mb-1.5">Service</p>
                    <p className="text-white text-sm font-semibold">{SERVICES.find((s) => s.id === selectedService)?.name}</p>
                  </div>
                  <div>
                    <p className="text-[#2a2a2a] text-[9px] uppercase tracking-widest mb-1.5">Date</p>
                    <p className="text-white text-sm font-semibold">
                      {selectedDate ? new Date(selectedDate + "T12:00:00").toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }) : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#2a2a2a] text-[9px] uppercase tracking-widest mb-1.5">Heure</p>
                    <p className="text-white text-sm font-semibold">{selectedTime || "—"}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="ml-auto text-[10px] text-[#333] hover:text-[#3D52D5] uppercase tracking-widest transition-colors self-center border-b border-transparent hover:border-[#3D52D5]/30 pb-0.5"
                  >
                    Modifier
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-[9px] text-[#2a2a2a] uppercase tracking-widest mb-2">Prénom *</label>
                    <input id="firstName" {...register("firstName")} autoComplete="given-name" className={inputClass} placeholder="Jean" />
                    {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-[9px] text-[#2a2a2a] uppercase tracking-widest mb-2">Nom *</label>
                    <input id="lastName" {...register("lastName")} autoComplete="family-name" className={inputClass} placeholder="Dupont" />
                    {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[9px] text-[#2a2a2a] uppercase tracking-widest mb-2">Email *</label>
                    <input id="email" type="email" {...register("email")} autoComplete="email" className={inputClass} placeholder="jean@exemple.com" />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[9px] text-[#2a2a2a] uppercase tracking-widest mb-2">Téléphone *</label>
                    <input id="phone" type="tel" {...register("phone")} autoComplete="tel" className={inputClass} placeholder="0612345678" />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="vehicleBrand" className="block text-[9px] text-[#2a2a2a] uppercase tracking-widest mb-2">Marque du véhicule *</label>
                    <input id="vehicleBrand" {...register("vehicleBrand")} className={inputClass} placeholder="BMW, Mercedes, Renault..." />
                    {errors.vehicleBrand && <p className="text-red-400 text-xs mt-1">{errors.vehicleBrand.message}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-[9px] text-[#2a2a2a] uppercase tracking-widest mb-2">Message (optionnel)</label>
                    <textarea
                      id="message"
                      {...register("message")}
                      rows={3}
                      maxLength={500}
                      className={`${inputClass} resize-none`}
                      placeholder="Précisions sur votre véhicule, demandes particulières..."
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                  </div>
                </div>

                {serverError && (
                  <p className="text-red-400 text-xs mb-6 border border-red-900/30 bg-red-900/8 px-4 py-3 max-w-2xl">
                    {serverError}
                  </p>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="border border-[#181818] hover:border-[#333] text-[#333] hover:text-[#888] font-bold uppercase tracking-[0.18em] text-[10px] px-8 py-4 transition-all duration-200"
                  >
                    Retour
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center gap-3 bg-[#3D52D5] disabled:bg-[#111] disabled:text-[#2a2a2a] disabled:cursor-not-allowed text-white font-bold uppercase tracking-[0.18em] text-[10px] px-8 py-4 overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(61,82,213,0.45)]"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Confirmer la réservation
                          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 bg-white/10 translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-500 skew-x-[-8deg]" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}
