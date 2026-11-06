import React from "react";
import { Tv, Trophy, Film, Clapperboard, Sparkles, Globe2 } from "lucide-react";

export function ContentCategories() {
  const categories = [
    {
      icon: Tv,
      title: "Live TV Channels",
      description:
        "Over-the-air and specialty linear feeds including CBC, CTV, Global, Citytv, CP24, and major US broadcast feeds (ABC, NBC, CBS, FOX, PBS).",
      tags: ["Canadian Networks", "US Networks", "Local News", "Weather"],
    },
    {
      icon: Trophy,
      title: "Live Sports Feeds",
      description:
        "Full seasonal coverage of NHL Hockey (Toronto Maple Leafs), NBA (Toronto Raptors), MLB (Blue Jays), CFL, Premier League, UEFA, and Cricket.",
      tags: ["TSN 1 to 5", "Sportsnet 360/ONE", "ESPN", "Fight Networks"],
    },
    {
      icon: Film,
      title: "On Demand Movies",
      description:
        "Stream high definition cinema releases, timeless classics, Hollywood hits, Canadian independent cinema, and global film libraries in 1080p and 4K.",
      tags: ["New Cinema", "Action & Thriller", "Comedy & Family", "Sci-Fi"],
    },
    {
      icon: Clapperboard,
      title: "TV Series & Box Sets",
      description:
        "Complete multi season television drama series, reality programming, prestige documentaries, and comedy favorites ready to binge anytime.",
      tags: ["Full Box Sets", "Documentaries", "Crime & Drama", "Cartoons"],
    },
    {
      icon: Sparkles,
      title: "Entertainment & Kids",
      description:
        "Top family entertainment, lifestyle, culinary arts, reality TV, music videos, and safe educational programming for children of all ages.",
      tags: ["HGTV & Food", "Discovery & History", "Cartoon & Anime", "Music"],
    },
    {
      icon: Globe2,
      title: "International Content",
      description:
        "Extensive international channel packages reflecting Brampton's multicultural heritage, featuring South Asian (Punjabi, Hindi, Urdu), European, and Caribbean feeds.",
      tags: ["Punjabi & Hindi", "Tamil & Telugu", "European Feeds", "Arabic & Middle East"],
    },
  ];

  return (
    <section id="channels" className="py-20 bg-slate-50/70 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Streaming Diversity
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Comprehensive Entertainment for Every Room
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Whether you want live hockey broadcasts, breaking local news, or international programming in your native language, our playlists have you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={index}
                className="rounded-2xl p-6 sm:p-7 bg-white border border-slate-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                    {cat.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {cat.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
