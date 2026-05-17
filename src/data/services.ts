export type Service = {
  id: string;
  name: string;
  nameJa: string;
  subtitle: string;
  description: string;
  link: string;
  appStoreLink?: string;
  hideTitleLogo?: boolean;
  image?: string;
  images?: string[];
  mockupBg: string;
  reverse?: boolean;
};

export const services: Service[] = [
  {
    id: "shirimono",
    name: "Shirimono",
    nameJa: "日本語学習アプリ",
    subtitle: "Shirimono",
    description:
      "Shirimonoは、**フランス人と日本人の共同監修**によって作られた**日本語学習に特化**したアプリです。\n**漢字・単語・文法**の学習を**1つのアプリで完結**させます。\n\n**SRSシステム**により**記憶の定着を最大効率**で行えます。\nまた**JLPT**の級ごとの学習コースも用意されているため、**試験対策**にもピッタリです。",
    link: "https://shirimono.fun",
    appStoreLink: "https://apps.apple.com/us/app/shirimono/id6759329826",
    image: "/shirimono.png",
    images: [
      "/shirimono/1.webp",
      "/shirimono/2.webp",
      "/shirimono/3.webp",
      "/shirimono/4.webp",
      "/shirimono/5.webp",
      "/shirimono/6.webp",
    ],
    mockupBg: "bg-mint",
    reverse: false,
  },
  {
    id: "your-hintory",
    name: "Your History",
    nameJa: "紡ぐ書房",
    subtitle: "あなたの言葉を聴き、家族へ繋ぐ人生の書を仕立てます",
    description:
      "個人の**ライフストーリーの聴き取り**と**家族史の調査**によって**１冊の本**にまとめて提供するサービスです。\nご自身の**人生の振り返り**や、家族への**記憶の継承**を目的としてご利用いただいています。\n\n家族として長年同居していても「親」や「祖父母」という肩書きを外した**個人としての人生**は案外深く知らないことが多いです。\n紡ぐ書房のサービスを通して自分自身や家族と**「出会いなおし」**をしてみませんか。",
    link: "",
    hideTitleLogo: true,
    image: "/service/your-history.png",
    mockupBg: "bg-peach",
    reverse: true,
  },
];
