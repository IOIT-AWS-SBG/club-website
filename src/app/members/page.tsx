import { promises as fs } from "fs";
import path from "path";

import { Config } from "@/types/config.interface";
import { TeamData } from "@/types/team.interface";
import { Navbar } from "@/components/Navbar";
import { Team } from "@/components/Team";

const getMembersPageData: () => Promise<{
  config: Config;
  team: TeamData;
}> = async () => {
  const configPath = path.join(
    process.cwd(),
    "public",
    "config.json"
  );

  const teamPath = path.join(
    process.cwd(),
    "public",
    "team.json"
  );

  const [configFile, teamFile] = await Promise.all([
    fs.readFile(configPath, "utf8"),
    fs.readFile(teamPath, "utf8"),
  ]);

  return {
    config: JSON.parse(configFile) as Config,
    team: JSON.parse(teamFile) as TeamData,
  };
};

export default async function MembersPage() {
  const { config, team } = await getMembersPageData();

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] text-gray-100 font-mono">

      <Navbar config={config} />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">

        {/* ======================================================= */}
        {/* PAGE HEADER */}
        {/* ======================================================= */}

        <section className="flex flex-col gap-8 pt-8 sm:pt-16">

          <div className="flex flex-col gap-2 border-b border-gray-800 pb-6">

            <div className="flex items-center gap-3">

              <div className="w-2 h-2 bg-violet-500 shrink-0" />

              <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                AWS Student Builder Group
              </p>

            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 uppercase tracking-tight">
              Members
            </h1>

            <p className="text-gray-500 text-xs uppercase tracking-widest">
              Query: THE PEOPLE BEHIND THE CHAPTER
            </p>

          </div>


          {/* ===================================================== */}
          {/* TEAM */}
          {/* ===================================================== */}

          <Team team={team} />

        </section>

      </main>


      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="border-t border-gray-800 py-8 bg-gray-950">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-gray-600 text-xs uppercase tracking-widest text-center">
            © {new Date().getFullYear()} {config.club_name}.
          </p>

        </div>

      </footer>

    </div>
  );
}