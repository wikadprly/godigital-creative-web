export const socials = {
  whatsapp: {
    label: "WhatsApp",
    url: "https://wa.me/628131157338?text=Halo%20GoDigital%20Creative,%20saya%20ingin%20konsultasi%20layanan%20desain.",
  },
  instagram: {
    label: "Instagram",
    url: "https://instagram.com/go.dcreative",
  },
  tiktok: {
    label: "TikTok",
    url: "https://tiktok.com/@go.dcreative",
  },
} as const;

export type SocialKey = keyof typeof socials;
