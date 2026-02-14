'use client';

import Image from "next/image";
import heroImage from "@/public/testBild.png";
import { useCallback, useEffect, useMemo, useState } from "react";

const weddingDetails = [
  {
    icon: "⛪",
    title: "The Ceremony",
    description: "4:00 PM at The Grand Hall, 123 Love Lane, Celebration City",
  },
  {
    icon: "🎉",
    title: "The Reception",
    description: "6:00 PM at The Oak Room, 123 Love Lane, Celebration City",
  },
  {
    icon: "🛏️",
    title: "Accommodations",
    description: "Find local hotel recommendations for your stay.",
  },
];

const daySchedule = [
  {
    time: "15:00",
    event: "Ankommen",
    description: "Sanfter Empfang im Innenhof mit Aperitif und Musik.",
  },
  {
    time: "16:00",
    event: "Trauung",
    description: "Feierliche Zeremonie im Krügerischen Haus.",
  },
  {
    time: "17:00",
    event: "Sektempfang",
    description: "Prickelnde Drinks & kleine Häppchen.",
  },
  {
    time: "19:00",
    event: "Abendessen",
    description: "Festliches Menü und liebevolle Toasts.",
  },
  {
    time: "21:00",
    event: "Party",
    description: "Tanzfläche frei – bis tief in die Nacht.",
  },
];

const infoHighlights = [
  {
    title: "Dresscode",
    emoji: "👗",
    description: "Festlich & elegant – greift gern zu warmen Tönen und fließenden Stoffen.",
  },
  {
    title: "Geschenkwünsche",
    emoji: "🎁",
    description: "Unsere Reisekasse freut sich über jeden Beitrag zu neuen Abenteuern.",
  },
  {
    title: "Parkmöglichkeiten",
    emoji: "🅿️",
    description: "Plätze direkt vor Ort sowie entlang der Bergedorfer Straße.",
  },
  {
    title: "Übernachtung",
    emoji: "🏨",
    description: "Empfehlung: Hotel Elbblick oder kleine Pensionen am Hafen.",
  },
  {
    title: "Weiteres",
    emoji: "✨",
    description: "Fragen? Meldet euch gern bei unseren Trauzeugen Marie & Jonas.",
  },
];

export default function Home() {
  const targetDate = useMemo(() => new Date("2026-10-10T10:00:00"), []);

  const getTimeRemaining = useCallback(() => {
    const total = targetDate.getTime() - Date.now();
    if (total <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  }, [targetDate]);

  const [countdown, setCountdown] = useState(getTimeRemaining);

  useEffect(() => {
    const tick = () => setCountdown(getTimeRemaining());
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [getTimeRemaining]);

  const countdownData = [
    { label: "Tage", value: countdown.days.toString().padStart(2, "0") },
    { label: "Stunden", value: countdown.hours.toString().padStart(2, "0") },
    { label: "Minuten", value: countdown.minutes.toString().padStart(2, "0") },
    { label: "Sekunden", value: countdown.seconds.toString().padStart(2, "0") },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light text-text-light">
      <div className="flex flex-col">
        <main className="flex flex-1 justify-center py-5">
          <div className="flex w-full flex-1 flex-col px-4 sm:px-6 lg:px-8">
            <section className="w-full py-5">
              <div className="p-0 sm:p-4">
                <div className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden rounded-xl md:min-h-[75vh]">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-black/60" aria-hidden />
                  <div className="relative z-10 mx-4 flex flex-col items-center text-center text-white sm:mx-10">
                    <div className="flex flex-col items-center">
                      <p className="font-script text-4xl leading-none md:text-5xl">Wir heiraten!</p>
                      <h1 className="mt-4 font-heading text-6xl leading-[0.9] tracking-wide md:text-7xl">
                        LENA
                      </h1>
                      <p className="font-script mt-2 text-5xl leading-none md:text-6xl">&amp;</p>
                      <h2 className="mt-2 font-heading text-6xl leading-[0.9] tracking-wide md:text-7xl">
                        FABI
                      </h2>
                      <p className="font-script mt-4 text-4xl leading-none md:text-5xl">- 10.10.26 -</p>
                    </div>
                    <a
                      className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold tracking-wide text-white shadow-lg shadow-black/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-black/30"
                      href="#rsvp"
                    >
                      Rückmeldung
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="mx-auto w-full max-w-lg">
              <div className="flex gap-4 px-2 py-5">
                {countdownData.map((entry) => (
                  <div key={entry.label} className="flex grow basis-0 flex-col">
                    <div className="flex h-20 flex-col items-center justify-center rounded-lg bg-white/70 px-3">
                      <p className="text-2xl font-bold leading-tight text-text-light sm:text-3xl">
                        {entry.value}
                      </p>
                      <span className="text-sm text-text-light/80">{entry.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="w-full px-2 py-5">
              <div className="rounded-xl border border-primary/20 bg-white/70 p-6 text-center shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-text-light">Location</h2>
                <p className="mt-3 text-base leading-relaxed text-text-light/80">
                  Krügerisches Haus, Bergedorfer Str. 28, 21502 Geesthacht
                </p>
                <a
                  href="https://maps.app.goo.gl/WyXbKWRRZycounDM9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  Auf Google Maps öffnen
                </a>
              </div>
            </section>

            <section className="w-full px-2 pb-10 sm:px-4 py-5">
              <div className="rounded-3xl border border-primary/10 bg-white/80 p-4 shadow-sm">
                <h2 className="font-heading text-center text-3xl font-bold text-text-light">
                  Tagesablauf
                </h2>
                <p className="mt-3 text-center text-sm uppercase tracking-[0.1em] text-secondary">
                  Ein grober Leitfaden durch unseren Tag
                </p>
                <div className="relative mt-8">
                  <div className="absolute left-5 top-0 bottom-0 w-px bg-primary/20" aria-hidden />
                  <div className="flex flex-col gap-10">
                    {daySchedule.map((item, index) => (
                      <div key={`${item.time}-${index}`} className="relative flex gap-4">
                        <span
                          className="absolute left-0.5 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-white text-primary shadow-sm"
                          aria-hidden
                        >
                          ●
                        </span>
                        <div className="ml-12">
                          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">
                            {item.time}
                          </p>
                          <h3 className="font-heading text-2xl text-text-light">{item.event}</h3>
                          {item.description && (
                            <p className="mt-1 text-base italic text-text-light/70">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full px-2 pb-10">
              <h2 className="font-heading text-center text-3xl font-bold text-white">
                Alles Wichtige auf einen Blick
              </h2>
              <div className="no-scrollbar mt-6 flex gap-4 overflow-x-auto pb-4">
                {infoHighlights.map((info) => (
                  <div
                    key={info.title}
                    className="min-w-[220px] flex-1 rounded-2xl border border-primary/20 bg-white/80 p-6 text-center shadow-sm"
                  >
                    <p className="text-3xl" aria-hidden>
                      {info.emoji}
                    </p>
                    <p className="mt-2 font-heading text-xl text-text-light">{info.title}</p>
                    <p className="mt-2 text-sm text-text-light/80">{info.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mx-auto w-full max-w-2xl py-16" id="rsvp">
              <div className="mb-8 text-center">
                <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                  Eure Rückmeldung
                </h2>
                <p className="mt-2 px-4 text-white/90 sm:px-8">
                    Bitte lasst uns bis zum 10.09.2026 wissen, ob ihr dabei sein könnt!
                </p>
              </div>
              <form className="space-y-6 rounded-xl border border-primary/20 bg-white/70 p-8">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-text-light/80"
                      htmlFor="name"
                    >
                      Full Name(s)
                    </label>
                    <input
                      className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-text-light shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      id="name"
                      name="name"
                      placeholder="Lena & Fabi Doe"
                      type="text"
                    />
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-text-light/80">
                      Will you be attending?
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <label className="flex items-center gap-2 text-sm text-text-light">
                        <input
                          className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                          id="attending-yes"
                          name="attendance"
                          type="radio"
                        />
                        Joyfully Attending
                      </label>
                      <label className="flex items-center gap-2 text-sm text-text-light">
                        <input
                          className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                          id="attending-no"
                          name="attendance"
                          type="radio"
                        />
                        Regretfully Decline
                      </label>
                    </div>
                  </div>
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-text-light/80"
                      htmlFor="message"
                    >
                      Leave a message (optional)
                    </label>
                    <textarea
                      className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-text-light shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      id="message"
                      name="message"
                      placeholder="Wishing you all the best!"
                      rows={4}
                    />
                  </div>
                </div>
                <button
                  className="flex w-full items-center justify-center rounded-full bg-primary py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                  type="submit"
                >
                  Submit Rückmeldung
                </button>
              </form>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
