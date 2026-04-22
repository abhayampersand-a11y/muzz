import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    submenu: [
      { label: "Bowling Machine Motor", href: "/about?gallery=bowling-machine-motor#portfolio" },
      { label: "High Frequency Converter", href: "/about?gallery=high-frequency-converter#portfolio" },
      { label: "Shrimp Farming Motors and Pumps", href: "/about?gallery=shrimp-farming-motors-and-pumps#portfolio" },
      { label: "Three Phase Water Pumps", href: "/about?gallery=three-phase-water-pumps#portfolio" },
      { label: "System Solution and Panel Making", href: "/about?gallery=system-solution-and-panel-making#portfolio" },
      { label: "Ceiling Fan Rewinding", href: "/about?gallery=ceiling-fan-rewinding#portfolio" },
      { label: "3 phase AC Induction Motor", href: "/about?gallery=3-phase-ac-induction-motor#portfolio" },
      { label: "Shutter Vibrator Motor", href: "/about?gallery=shutter-vibrator-motor#portfolio" },
      { label: "Single Phase Water Pumps", href: "/about?gallery=single-phase-water-pumps#portfolio" },
      { label: "AC Gear Motor", href: "/about?gallery=ac-gear-motor#portfolio" },
      { label: "Borewell Pumps", href: "/about?gallery=borewell-pumps#portfolio" },
      { label: "Dewatering Pumps", href: "/about?gallery=dewatering-pumps#portfolio" },
      { label: "Torrent Work", href: "/about?gallery=torrent-work#portfolio" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
