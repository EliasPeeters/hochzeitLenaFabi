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
    time: "14:00",
    event: "Ankommen",
    image: "/ablauf/ankommen.png",
  },
  {
    time: "14:30",
    event: "Standesamtliche Trauung im Krügerschen Haus",
    image: "/ablauf/trauung.svg",
  },
  {
    time: "15:00",
    event: "Sektempfang und Fotos",
    image: "/ablauf/sekt.svg",
  },
  {
    time: "16:30",
    event: "Wechsel zur 2. Location",
    image: "/ablauf/wechsel.svg",
  },
  {
    time: "17:00",
    event: "Start beim Sebastians",
    image: "/ablauf/start_beim_sebastians.svg",
  },
  {
    time: "18:30",
    event: "Abendessen",
    image: "/ablauf/abendessen.svg",
  },
  {
    time: "23:00",
    event: "Ende",
    image: "/ablauf/ende.svg",
  },
];

const infoHighlights = [
  {
    title: "Dresscode",
    image: "/infos/dresscode.png",
    description:
      "Für unsere Hochzeit wünschen wir uns einen sommerlich-festlichen Look in pastelligen Farben. Unsere Farbpalette dient euch dabei gerne als Orientierung.",
    middleImage: "/infos/colors.jpg",
    extra:
      "Eine kleine Bitte: Bitte verzichtet an diesem Tag auf die Farben Weiß, Schwarz und Rot.",
  },
  {
    title: "Geschenkwünsche",
    image: "/infos/wuensche.png",
    description:
      "Wir wünschen uns keine Geschenke, aber über einen kleinen Beitrag zu unserer gemeinsamen Zukunft freuen wir uns sehr.",
  },
  {
    title: "Keine Fotos bei der Trauung",
    image: "/infos/noFotos.png",
    description:
      "Für die Trauung haben wir eine professionelle Fotografin und einen Videografen engagiert. Deshalb bitten wir euch, in dieser Zeit auf Handyaufnahmen zu verzichten. Die Bilder und Videos bekommt ihr im Anschluss natürlich von uns.",
    extra:
      "Nach der Trauung freuen wir uns über eure eigenen Schnappschüsse vom weiteren Verlauf des Tages.",
  },
  {
    title: "Übernachtung",
    image: "/infos/hotel.png",
    description:
      "Eine Empfehlung von uns wäre das Hotel Lindenhof in Geesthacht.",
    extra:
      "Alternativ wäre das Hotel Elbblick möglich – meldet euch hierfür bitte zeitnah bei uns.",
    linkLabel: "Hotel Lindenhof",
    linkHref: "https://lindenhofgeesthacht.de/",
  },
  {
    title: "Rückmeldung",
    image: "/infos/rsvp.png",
    description:
      "Wenn wir nichts von dir hören, gehen wir davon aus, dass du bei unserer Feier dabei bist.",
    extra:
      "Falls du doch nicht kommen kannst, gib uns bitte so früh wie möglich Bescheid.",
  },
  {
    title: "Weiteres",
    image: "/infos/weiteres.png",
    description:
      "Für Fragen oder geplante Beiträge zu unserer Hochzeit könnt ihr euch gerne an unsere Trauzeugen Anni (Tel. 0176 72668860) oder Ben (Tel. 0176 81034824) wenden, damit alles zeitlich gut abgestimmt ist.",
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
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-primary/15 bg-white/70 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                      Trauung
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-text-light">
                      Krügersches Haus, Bergedorfer Str. 28, 21502 Geesthacht
                    </p>
                    <a
                      href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47b1ef624a41f26f:0xdd0e3d3108769b8b?sa=X&ved=1t:8290&ictx=111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
                    >
                      Trauung auf Google Maps
                    </a>
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-white/70 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                      Restlicher Abend
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-text-light">
                      Sebastians, Elbuferstraße 75, 21502 Geesthacht
                    </p>
                    <a
                      href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47b1e54857f9302d:0x3717b586ad062854?sa=X&ved=1t:8290&ictx=111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
                    >
                      Abendlocation auf Google Maps
                    </a>
                  </div>
                </div>
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
                        <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-primary/30 bg-white p-2 shadow-sm">
                          <Image
                            src={item.image}
                            alt={item.event}
                            width={44}
                            height={44}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="ml-12">
                          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">
                            {item.time}
                          </p>
                          <h3 className="font-heading text-2xl text-text-light">{item.event}</h3>
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
                    className="w-[320px] shrink-0 rounded-2xl border border-primary/20 bg-white/80 p-6 text-center shadow-sm sm:w-[360px]"
                  >
                    <div className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white p-3 shadow-sm">
                      <Image
                        src={info.image}
                        alt={info.title}
                        width={80}
                        height={80}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="mt-4 font-heading text-xl text-text-light">{info.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-text-light/80">
                      {info.linkHref && info.linkLabel ? (
                        <>
                          Eine Empfehlung von uns wäre das{" "}
                          <a
                            href={info.linkHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-primary underline underline-offset-2"
                          >
                            {info.linkLabel}
                          </a>{" "}
                          in Geesthacht.
                        </>
                      ) : (
                        info.description
                      )}
                    </p>
                    {info.middleImage && (
                      <div className="mt-4 overflow-hidden rounded-2xl">
                        <Image
                          src={info.middleImage}
                          alt={`${info.title} Farben`}
                          width={320}
                          height={180}
                          className="h-auto w-full object-cover"
                        />
                      </div>
                    )}
                    {info.extra && (
                      <p className="mt-3 text-sm leading-relaxed text-text-light/80">
                        {info.extra}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}
