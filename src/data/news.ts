export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
  image: string;
  category: string;
};

export const newsPosts: NewsPost[] = [
  {
    slug: "shirimono-app-launch",
    title: "日本語学習アプリ「Shirimono」リリースのお知らせ",
    date: "2024-03-15",
    excerpt:
      "IROHAの日本語学習アプリ「Shirimono」が正式リリースされました。言葉を育て、聴くを育て、語りをひらく。",
    body: `IROHAの日本語学習アプリ「Shirimono」が正式リリースされました。

本アプリは、日本語を学ぶすべての人々のために設計された革新的な学習ツールです。音声認識技術と自然言語処理を組み合わせ、より自然な日本語習得をサポートします。

## 主な機能

- 発音練習モード：ネイティブスピーカーの発音と比較して練習できます
- 語彙強化システム：日常会話に必要な語彙を効率的に学べます
- 文化コンテンツ：日本の文化や習慣も同時に学べるコンテンツを収録

App StoreおよびGoogle Playより無料でダウンロードいただけます。`,
    image: "/images/news-1.jpg",
    category: "プロダクト",
  },
  {
    slug: "your-hintory-service",
    title: "家族史作成サービス「Your History」提供開始",
    date: "2024-02-20",
    excerpt:
      "大切な家族の歴史を美しく残す「Your History」サービスの提供を開始しました。",
    body: `大切な家族の歴史を美しく残す「Your History」サービスの提供を開始しました。

旅行の思い出や家族の歴史を、プロフェッショナルなデザインの本として残すことができます。

## サービスの特徴

- 簡単な入力で美しい本が完成
- 高品質な印刷・製本
- デジタルアーカイブとしても保存可能

詳しくはサービスページをご覧ください。`,
    image: "/images/news-2.jpg",
    category: "サービス",
  },
  {
    slug: "company-founding",
    title: "株式会社IROHA設立のご挨拶",
    date: "2024-01-10",
    excerpt:
      "この度、株式会社IROHAを設立いたしました。言葉と耳の未来を開く会社として、新しい価値を提供してまいります。",
    body: `この度、株式会社IROHAを設立いたしました。

「Nurture Words and Ears. Open your stories.」をビジョンに掲げ、言葉と耳の未来を開く会社として、新しい価値を提供してまいります。

## 会社概要

- 会社名：株式会社IROHA
- 設立：2024年1月
- 事業内容：言語学習サービス、デジタルコンテンツ事業

今後ともどうぞよろしくお願いいたします。`,
    image: "/images/news-3.jpg",
    category: "会社情報",
  },
  {
    slug: "partnership-announcement",
    title: "教育機関との提携に関するお知らせ",
    date: "2024-04-01",
    excerpt:
      "複数の教育機関との提携が決定しました。より多くの方に質の高い日本語教育を届けてまいります。",
    body: `複数の教育機関との提携が決定しました。

この提携により、IROHAのサービスをより多くの学習者に提供することが可能になります。

## 提携の目的

教育の質を高め、より多くの方に日本語学習の機会を提供することを目指しています。

詳細については、後日改めてご案内いたします。`,
    image: "/images/news-4.jpg",
    category: "お知らせ",
  },
];
