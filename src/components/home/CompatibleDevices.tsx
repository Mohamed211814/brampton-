import React from "react";
import { Tv, Flame, Bot, Smartphone, Apple, Laptop, Radio, Layers } from "lucide-react";

export function CompatibleDevices() {
  const devices = [
    {
      icon: Tv,
      name: "Smart TVs",
      subtitle: "Samsung Tizen & LG webOS",
      apps: ["IBO Player", "IPTV Smarters", "Smart IPTV", "Nanomid"],
      tip: "Direct installation from your TV's built in App Store.",
    },
    {
      icon: Flame,
      name: "Amazon Fire TV & Firestick",
      subtitle: "Firestick 4K, 4K Max, Cube",
      apps: ["TiviMate (Recommended)", "IPTV Smarters Pro", "XCIPTV"],
      tip: "Easily installed via Downloader app in 3 minutes.",
    },
    {
      icon: Bot,
      name: "Android TV & Google TV",
      subtitle: "Nvidia Shield, Chromecast TV, Sony",
      apps: ["TiviMate IPTV Player", "OTT Navigator", "Televizo"],
      tip: "Full 4K HDR playback with hardware acceleration.",
    },
    {
      icon: Apple,
      name: "Apple TV, iPhone & iPad",
      subtitle: "tvOS & iOS Ecosystem",
      apps: ["Smarters Player Lite", "Snappier IPTV", "UHF Player"],
      tip: "Available directly through official Apple App Store.",
    },
    {
      icon: Smartphone,
      name: "Android Smartphones & Tablets",
      subtitle: "Samsung Galaxy, Pixel, Tablets",
      apps: ["IPTV Smarters", "XCIPTV Player", "GSE IPTV"],
      tip: "Stream on the go over 5G or home Wi-Fi.",
    },
    {
      icon: Laptop,
      name: "Windows PC & Mac",
      subtitle: "Laptops & Desktop Workstations",
      apps: ["VLC Media Player", "IPTV Smarters PC", "Web Player"],
      tip: "Watch directly via browser or dedicated desktop client.",
    },
    {
      icon: Radio,
      name: "MAG & Formuler Set Top Boxes",
      subtitle: "MAG 254/322/524 & Formuler Z11",
      apps: ["Stalker Portal", "MyTVOnline 2 & 3", "Ministra"],
      tip: "Direct MAC address activation for physical box users.",
    },
    {
      icon: Layers,
      name: "Universal Player Compatibility",
      subtitle: "Xtream Codes & M3U Standard",
      apps: ["Xtream Codes API", "M3U8 Playlists", "EPG XMLTV"],
      tip: "Compatible with any player supporting standard M3U protocols.",
    },
  ];

  return (
    <section id="devices" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Zero Hardware Lock-In
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Stream on Your Existing Screens &amp; Devices
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            No expensive proprietary cable box rentals. Our subscription integrates seamlessly with the streaming hardware you already own.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {devices.map((device, index) => {
            const Icon = device.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {device.name}
                  </h3>
                  <p className="text-xs text-red-600 font-bold mb-3">
                    {device.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {device.tip}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1.5">
                    Tested Apps:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {device.apps.map((app, aIdx) => (
                      <span
                        key={aIdx}
                        className="text-[10px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
