'use client';

import Image from "next/image";
import heroImage from "@/public/testBild.png";
import { useCallback, useEffect, useMemo, useState } from "react";

const navLinks = [
  { href: "#details", label: "Details" },
  { href: "#story", label: "Our Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#rsvp", label: "Rückmeldung" },
];

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
  { time: "15:00", event: "Ankommen" },
  { time: "16:00", event: "Trauung" },
  { time: "17:00", event: "Sektempfang" },
  { time: "19:00", event: "Abendessen" },
  { time: "21:00", event: "Party" },
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
        <header className="sticky top-0 z-50 flex items-center justify-between border-b border-primary/20 bg-background-light/80 px-4 py-3 font-display backdrop-blur-sm md:px-10">
          <div className="flex items-center gap-4">
            <span aria-hidden className="text-2xl text-primary">
              ✿
            </span>
            <h2 className="font-heading text-lg font-bold leading-tight text-text-light">
              Lena &amp; Fabi
            </h2>
          </div>
          <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
            <nav className="flex items-center gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium leading-normal text-text-light transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              className="flex h-10 min-w-[84px] items-center justify-center rounded-full bg-primary px-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
              href="#rsvp"
            >
              <span className="truncate">Rückmeldung</span>
            </a>
          </div>
          <button
            type="button"
            className="text-text-light md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </header>

        <main className="flex flex-1 justify-center py-5">
          <div className="flex w-full max-w-5xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
            <section className="w-full">
              <div className="p-0 sm:p-4">
                <div className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden rounded-xl text-center sm:gap-8 md:min-h-[75vh]">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-black/60" aria-hidden />
                  <div className="relative z-10 flex flex-col items-center gap-6 p-4 text-white">
                    <div className="flex flex-col gap-2">
                      <h1 className="font-heading text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                        Lena &amp; Fabi
                      </h1>
                      <h2 className="text-base font-normal leading-normal text-white md:text-xl">
                        Lena &amp; Fabi are getting married on October 10, 2026 at 10:00
                      </h2>
                    </div>
                    <a
                      className="flex h-12 min-w-[84px] items-center justify-center rounded-full bg-primary px-5 text-base font-bold text-white transition-opacity hover:opacity-90"
                      href="#rsvp"
                    >
                      <span className="truncate">Rückmeldung</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="mx-auto w-full max-w-lg">
              <div className="flex gap-4 px-4 py-10">
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

            <section className="w-full px-4 py-10">
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

            <section className="w-full px-4 pb-10">
              <div className="rounded-3xl border border-primary/10 bg-white/80 p-8 shadow-sm">
                <h2 className="font-heading text-center text-3xl font-bold text-text-light">
                  Tagesablauf
                </h2>
                <div className="relative mt-10 pl-12">
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/30" aria-hidden />
                  <div className="flex flex-col gap-10">
                    {daySchedule.map((item, index) => (
                      <div key={`${item.time}-${index}`} className="relative flex gap-4">
                        <span
                          className="absolute left-2 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow"
                          aria-hidden
                        >
                          {index + 1}
                        </span>
                        <div className="ml-14">
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            {item.time}
                          </p>
                          <h3 className="font-heading text-2xl text-text-light">{item.event}</h3>
                          {item.description && (
                            <p className="mt-1 text-sm text-text-light/70">{item.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full py-10" id="details">
              <div className="text-center">
                <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-text-light md:text-4xl">
                  The Wedding Day
                </h2>
                <p className="mt-2 text-text-light/80">October 10, 2026</p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
                {weddingDetails.map((detail) => (
                  <div
                    key={detail.title}
                    className="flex flex-col items-center gap-4 rounded-xl border border-primary/20 bg-white/70 p-6 text-center"
                  >
                    <span aria-hidden className="text-4xl text-secondary">
                      {detail.icon}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-heading text-lg font-bold leading-tight text-text-light">
                        {detail.title}
                      </h3>
                      <p className="text-sm leading-normal text-text-light/80">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 px-4">
                <div className="relative h-80 w-full">
                  <Image
                    src={heroImage}
                    alt="Map preview showing the celebration location."
                    fill
                    sizes="(max-width: 1024px) 100vw, 960px"
                    className="rounded-xl object-cover"
                    priority
                  />
                </div>
              </div>
            </section>

            <section className="w-full py-16" id="story">
              <div className="grid gap-12 md:grid-cols-2 md:items-center">
                <div className="relative h-96 w-full">
                  <Image
                    src={heroImage}
                    alt="Lena and Fabi laughing together."
                    fill
                    sizes="(max-width: 768px) 100vw, 512px"
                    className="rounded-xl object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-text-light md:text-4xl">
                    Our Story
                  </h2>
                  <p className="text-base leading-relaxed text-text-light/80">
                    It all started on a crisp autumn day at a local coffee shop. A spilled latte
                    and a shared laugh was all it took. From that moment, our story began to unfold,
                    filled with adventure, joy, and countless shared dreams. We&apos;ve explored new
                    cities, supported each other&apos;s passions, and built a life we love.
                  </p>
                  <p className="text-base leading-relaxed text-text-light/80">
                    Now, we&apos;re taking the next step and couldn&apos;t be more excited to begin
                    our forever. We are so grateful to have you celebrate this special milestone
                    with us.
                  </p>
                </div>
              </div>
            </section>

            <section className="w-full py-10" id="gallery">
              <div className="mb-8 text-center">
                <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-text-light md:text-4xl">
                  Gallery
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="relative aspect-square w-full">
                    <Image
                      src={heroImage}
                      alt={`Engagement photo placeholder ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="rounded-lg object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>

            <section className="mx-auto w-full max-w-2xl py-16" id="rsvp">
              <div className="mb-8 text-center">
                <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-text-light md:text-4xl">
                  Kindly Rückmeldung
                </h2>
                <p className="mt-2 text-text-light/80">
                  Please respond by September 15th
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
                      className="block w-full rounded-md border border-gray-300 bg-background-light px-4 py-2 text-text-light shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
                      className="block w-full rounded-md border border-gray-300 bg-background-light px-4 py-2 text-text-light shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
