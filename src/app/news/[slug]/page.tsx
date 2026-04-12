import { notFound } from "next/navigation";
import Link from "next/link";
import { newsPosts } from "@/data/news";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const categoryColors: Record<string, string> = {
    プロダクト: "bg-mint-100 text-mint-500",
    サービス: "bg-peach-100 text-peach-400",
    会社情報: "bg-teal-100 text-teal-400",
    お知らせ: "bg-coral-100 text-coral-400",
  };

  const paragraphs = post.body.split("\n\n").filter(Boolean);

  return (
    <>
      <Header />
      <main className="pt-24 pb-24 min-h-screen">
        <div className="max-w-2xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-mint-400 transition-colors">
              TOP
            </Link>
            <span>/</span>
            <Link href="/#news" className="hover:text-mint-400 transition-colors">
              ニュース
            </Link>
            <span>/</span>
            <span className="text-gray-600 truncate max-w-40">{post.title}</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${categoryColors[post.category] ?? "bg-gray-100 text-gray-500"}`}
              >
                {post.category}
              </span>
              <time className="text-xs text-gray-400">{post.date}</time>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
              {post.title}
            </h1>
          </div>

          {/* Divider */}
          <div className="h-px bg-mint-200 mb-8" />

          {/* Body */}
          <article className="prose prose-sm md:prose-base max-w-none">
            {paragraphs.map((para, i) => {
              if (para.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-lg font-bold text-foreground mt-8 mb-3">
                    {para.replace("## ", "")}
                  </h2>
                );
              }
              if (para.startsWith("- ")) {
                const items = para.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="list-disc list-inside text-gray-700 text-sm leading-loose mb-4 space-y-1">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-gray-700 text-sm leading-loose mb-4">
                  {para}
                </p>
              );
            })}
          </article>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-mint-100">
            <Link
              href="/#news"
              className="inline-flex items-center gap-2 text-sm text-mint-500 font-medium hover:gap-3 transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              ニュース一覧へ戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
