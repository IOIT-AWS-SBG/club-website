import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import { ArrowRight, Server } from "lucide-react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Config } from "@/types/config.interface";
import { Navbar } from "@/components/Navbar";
import { Event } from "@/types/event.interface";
import { EventModal } from "@/components/Event";

const getPageData: () => Promise<{ config: Config; events: Event[]; }> = async () => {
  const configPath = path.join(process.cwd(), "public", "config.json");
  const eventsPath = path.join(process.cwd(), "public", "events.json");

  const [configFile, eventsFile] = await Promise.all([
    fs.readFile(configPath, "utf8"),
    fs.readFile(eventsPath, "utf8"),
  ]);

  return {
    config: JSON.parse(configFile) as Config,
    events: JSON.parse(eventsFile) as Event[],
  };
}

export default async function Home() {
  const { config, events } = await getPageData();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#FF9900] selection:text-black overflow-x-hidden">
      <Navbar config={config} />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-16 sm:gap-24 w-full">

        {/* Hero Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-8 sm:pt-12 w-full">
          {/* Left: Raw Content & CTA */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 w-fit rounded-sm">
              <Server className="w-4 h-4 text-[#FF9900]" />
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-widest">
                {config.chapter}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              {config.hero.title_main} <br />
              <span className="text-[#FF9900]">{config.hero.title_highlight}</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-medium">
              {config.hero.description}
            </p>

            {/* Buttons: Stack on mobile, side-by-side on sm+ */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-4 w-full">
              <Link
                href={config.hero.whatsapp_link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF9900] hover:bg-[#e68a00] text-black font-bold px-6 py-3.5 sm:py-3 rounded-sm transition-colors"
              >
                {config.hero.cta_text}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#events"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-800 font-bold px-6 py-3.5 sm:py-3 rounded-sm transition-all"
              >
                View Events
              </Link>
            </div>
          </div>

          {/* Right: Infrastructure as Code Block (HIDDEN ON MOBILE, VISIBLE ON LARGE SCREENS) */}
          <div className="hidden lg:block w-full lg:w-1/2 max-w-full sm:max-w-md mx-auto lg:mx-0">
            <div className="w-full bg-gray-50 border border-gray-200 rounded-sm overflow-hidden shadow-none">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 border-b border-gray-200">
                <div className="w-3 h-3 rounded-full bg-red-600 shrink-0"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 shrink-0"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shrink-0"></div>
                <span className="ml-2 text-xs font-mono text-gray-500 truncate">main.tf</span>
              </div>
              <div className="p-4 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed w-full">
                <pre className="text-gray-800 min-w-min">
                  <span className="text-purple-700">resource</span>{" "}
                  <span className="text-green-700">{'"aws_instance"'}</span>{" "}
                  <span className="text-blue-700">{'"student_builder_node"'}</span>{" "}
                  {"{"}<br />
                  {"  "}ami           = <span className="text-green-700">{'"ami-0c55b159cbfafe1f0"'}</span><br />
                  {"  "}instance_type = <span className="text-green-700">{'"t3.micro"'}</span><br /><br />
                  {"  "}tags = {"{"}<br />
                  {"    "}Name        = <span className="text-green-700">{'"AISSMS-IOIT-Chapter"'}</span><br />
                  {"    "}Environment = <span className="text-green-700">{'"Production"'}</span><br />
                  {"    "}Status      = <span className="text-green-700">{'"Active"'}</span><br />
                  {"  "}{"}"}<br />
                  {"}"}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section mapped from JSON */}
        <section id="events" className="flex flex-col gap-6 border-t border-gray-200 pt-16 sm:pt-24 w-full">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Events & Workshops</h2>
            <p className="text-gray-500 text-sm">Join us at our upcoming sessions or catch up on what you missed.</p>
          </div>

          <div className="flex flex-col gap-8 w-full">
            {events.map((event: Event) => (
              <EventModal key={event.id} event={event} />
            ))}
          </div>
        </section>

      </main>

      {/* Upgraded Professional Footer */}
      <footer className="border-t border-gray-200 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} {config.club_name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href={config.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0A66C2] transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link
              href={config.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#E1306C] transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link
              href={config.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#25D366] transition-colors"
            >
              <span className="sr-only">WhatsApp</span>
              <FaWhatsapp className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
