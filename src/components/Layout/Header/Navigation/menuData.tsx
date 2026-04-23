import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Bowling Machine Motor", href: "/services?gallery=bowling-machine-motor#portfolio" },
      { label: "High Frequency Converter", href: "/services?gallery=high-frequency-converter#portfolio" },
      { label: "Shrimp Farming Motors and Pumps", href: "/services?gallery=shrimp-farming-motors-and-pumps#portfolio" },
      { label: "Three Phase Water Pumps", href: "/services?gallery=three-phase-water-pumps#portfolio" },
      { label: "System Solution and Panel Making", href: "/services?gallery=system-solution-and-panel-making#portfolio" },
      { label: "Ceiling Fan Rewinding", href: "/services?gallery=ceiling-fan-rewinding#portfolio" },
      { label: "3 phase AC Induction Motor", href: "/services?gallery=3-phase-ac-induction-motor#portfolio" },
      { label: "Shutter Vibrator Motor", href: "/services?gallery=shutter-vibrator-motor#portfolio" },
      { label: "Single Phase Water Pumps", href: "/services?gallery=single-phase-water-pumps#portfolio" },
      { label: "AC Gear Motor", href: "/services?gallery=ac-gear-motor#portfolio" },
      { label: "Borewell Pumps", href: "/services?gallery=borewell-pumps#portfolio" },
      { label: "Dewatering Pumps", href: "/services?gallery=dewatering-pumps#portfolio" },
      { label: "Torrent Work", href: "/services?gallery=torrent-work#portfolio" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
