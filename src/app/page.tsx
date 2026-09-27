import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";

import { Config } from "@/types/config.interface";
import { Navbar } from "@/components/Navbar";
import { Event } from "@/types/event.interface";
import { EventModal } from "@/components/Event";

const getPageData: () => Promise<{
  config: Config;
  events: Event[];
}> = async () => {
  const configPath = path.join(
    process.cwd(),
    "public",
    "config.json"
  );

  const eventsPath = path.join(
    process.cwd(),
    "public",
    "events.json"
  );

  const [configFile, eventsFile] = await Promise.all([
    fs.readFile(configPath, "utf8"),
    fs.readFile(eventsPath, "utf8"),
  ]);

  return {
    config: JSON.parse(configFile) as Config,
    events: JSON.parse(eventsFile) as Event[],
  };
};

export default async function Home() {
  const { config, events } = await getPageData();

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] text-gray-100 font-mono">

      <Navbar config={config} />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col gap-16 sm:gap-24">

        {/* ========================================================= */}
        {/* HERO */}
        {/* ========================================================= */}

        <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-8 sm:pt-16 w-full">

          {/* Hero Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 text-left">

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900 border border-gray-800 w-fit">
              <div className="w-2 h-2 bg-violet-500 shrink-0" />

              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                {config.chapter}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 tracking-tight leading-tight uppercase">
              {config.hero.title_main}

              <br />

              <span className="text-violet-400 px-2 leading-snug inline-block mt-2">
                {config.hero.title_highlight}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
              {config.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-0 w-full pt-4">

              <Link
                href={config.hero.whatsapp_link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold px-8 py-4 uppercase tracking-widest border border-violet-600 transition-colors"
              >
                {config.hero.cta_text}
              </Link>

              <Link
                href="#events"
                className="w-full sm:w-auto flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-gray-300 text-xs font-bold px-8 py-4 uppercase tracking-widest border border-gray-800 sm:border-l-0 transition-colors"
              >
                View Logs
              </Link>

            </div>

          </div>

          {/* Terminal */}
          <div className="hidden lg:block w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">

            <div className="w-full bg-[#0a0a0a] border border-gray-800 overflow-hidden">

              <div className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-3 border-b border-gray-800">

                <div className="w-3 h-3 bg-[#ff5f56] shrink-0" />
                <div className="w-3 h-3 bg-[#ffbd2e] shrink-0" />
                <div className="w-3 h-3 bg-[#27c93f] shrink-0" />

                <span className="ml-2 text-[10px] text-gray-500 uppercase tracking-widest truncate">
                  ubuntu@aws-sbg-node
                </span>

              </div>

              <div className="p-5 overflow-x-auto text-xs leading-relaxed w-full">

                <div className="flex gap-2 mb-2">
                  <span className="text-violet-500 font-bold">
                    {">"}
                  </span>

                  <span className="text-gray-100">
                    cat main.tf
                  </span>
                </div>

                <div className="mb-6 pl-4 border-l border-gray-800 text-gray-400">

                  <span className="text-blue-400">
                    resource
                  </span>{" "}

                  <span className="text-gray-300">
                    {"\"aws_instance\""}
                  </span>{" "}

                  <span className="text-blue-300">
                    {"\"node\""}
                  </span>{" "}
                  {"{"}

                  <br />

                  {"  "}ami ={" "}
                  <span className="text-gray-300">
                    {"\"ami-0c55b159cbfafe1f0\""}
                  </span>

                  <br />

                  {"  "}instance_type ={" "}
                  <span className="text-gray-300">
                    {"\"t3.micro\""}
                  </span>

                  <br />

                  {"  "}tags = {"{"} Name ={" "}
                  <span className="text-gray-300">
                    {"\"AISSMS-Chapter\""}
                  </span>{" "}
                  {"}"}

                  <br />

                  {"}"}

                </div>

                <div className="flex gap-2 mb-2">

                  <span className="text-violet-500 font-bold">
                    {">"}
                  </span>

                  <span className="text-gray-100">
                    terraform apply -auto-approve
                  </span>

                </div>

                <div className="mb-4 text-gray-500">
                  aws_instance.node: Creating...
                  <br />
                  aws_instance.node: Creation complete after 12s [id=i-09ab7c...]
                </div>

                <div className="mb-6 text-green-400 font-bold">
                  Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
                </div>

                <div className="flex gap-2 items-center">

                  <span className="text-violet-500 font-bold">
                    {">"}
                  </span>

                  <span className="w-2 h-4 bg-violet-500 animate-pulse" />

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ========================================================= */}
        {/* EVENTS */}
        {/* ========================================================= */}

        <section
          id="events"
          className="flex flex-col gap-8 border-t border-gray-800 pt-16 sm:pt-24 w-full"
        >

          <div className="flex flex-col gap-2">

            <h2 className="text-2xl font-bold text-gray-100 uppercase tracking-widest">
              System Logs
            </h2>

            <p className="text-gray-500 text-xs uppercase tracking-widest">
              Query: Upcoming & Past Events
            </p>

          </div>

          <div className="flex flex-col gap-12 w-full">

            {events.map((event) => (
              <EventModal
                key={event.id}
                event={event}
              />
            ))}

          </div>

        </section>

      </main>


      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="border-t border-gray-800 py-8 bg-gray-950">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">

          <p className="text-gray-600 text-xs uppercase tracking-widest text-center sm:text-left">
            © {new Date().getFullYear()} {config.club_name}.
          </p>

          <div className="flex items-center gap-6">

            <Link
              href={config.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
            >
              <span className="sr-only">
                LinkedIn
              </span>

              <FaLinkedin className="w-5 h-5" />
            </Link>

            <Link
              href={config.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
            >
              <span className="sr-only">
                Instagram
              </span>

              <FaInstagram className="w-5 h-5" />
            </Link>

            <Link
              href={config.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
            >
              <span className="sr-only">
                WhatsApp
              </span>

              <FaWhatsapp className="w-5 h-5" />
            </Link>

          </div>

        </div>

      </footer>

    </div>
  );
}