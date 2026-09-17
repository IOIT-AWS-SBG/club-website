export interface Config {
  club_name: string;
  chapter: string;
  hero: {
    title_main: string;
    title_highlight: string;
    description: string;
    cta_text: string;
    whatsapp_link: string;
  };
  socials: {
    linkedin: string;
    instagram: string;
    whatsapp: string;
  };
}