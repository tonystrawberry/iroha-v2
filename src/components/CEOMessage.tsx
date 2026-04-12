import Blob from "./Blob";

export default function CEOMessage() {
  return (
    <section id="ceo" className="py-24 bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/4 opacity-20 pointer-events-none">
        <Blob color="linear-gradient(135deg, #7ecfb5, #a0d8cb)" size={380} variant="blob-2" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-15 pointer-events-none">
        <Blob color="linear-gradient(135deg, #f5a8a8, #fad8c0)" size={340} variant="blob-3" />
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-10 pointer-events-none">
        <Blob color="linear-gradient(135deg, #f5c4a0, #fdf0e8)" size={200} variant="blob" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <p className="text-mint-400 text-xs font-semibold tracking-widest uppercase mb-2">
          Message
        </p>
        <h2 className="text-3xl font-bold text-foreground mb-12">代表メッセージ</h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Photo */}
          <div className="flex-shrink-0">
            <img
              src="/ceo-message/profile.webp"
              alt="山下 楓美香"
              className="w-48 h-60 md:w-56 md:h-72 rounded-2xl object-cover"
            />
            <div className="mt-3 flex flex-col items-center gap-1">
              <div className="flex items-center gap-1.5">
                <div
                  className="w-4 h-4 blob shrink-0"
                  style={{ background: "linear-gradient(135deg, #7ecfb5, #f5a8a8)" }}
                />
                <p className="text-xs text-gray-500">一般社団法人IROHA 代表理事</p>
              </div>
              <p className="text-sm font-semibold text-foreground">山下 楓美香</p>
            </div>
          </div>

          {/* Message text */}
          <div className="flex-1 max-w-2xl">
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-5">
              大学院で私は、祖母の<span className="text-mint-500">ライフストーリー</span>を研究しました。19歳で上京するまで同居していた祖母ですが、研究のために何度もインタビューし様々な思い出の品を見せてくれるまで私は祖母を「おばあちゃん」という記号で捉え、<span className="text-mint-500">「出会い損ねていた」</span>ことに気がついたのです。
              そこで同時に気付いたのは、<span className="text-mint-500">出会い損ない</span>は私と祖母だけに起きた現象ではなく<span className="text-mint-500">社会の様々な場面で発生している</span>ということです。
            </p>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-5">
              お互いに1人の人として<span className="text-mint-500">「出会い直す」</span>ためには、<span className="text-mint-500">語りをひらく</span>ことが必要で、語りをひらくためには<span className="text-mint-500">言葉と耳を育てる</span>必要があります。
              私たちは案外、自身の思いや経験を表せる言葉や、そのまま受け取るための耳を持ち合わせていないものです。
              そんな営みをお手伝いするために、私たちは<span className="text-mint-500">IROHA</span>を立ち上げました。
            </p>
            <p className="text-gray-700 leading-loose text-sm md:text-base">
              国籍・文化・世代・性別・経験などあらゆる面で異なる私たち。
              だからこそ、<span className="text-mint-500">一人ひとりの物語が尊い</span>ものとなります。
              あらゆる人が、名前を持ったその人として<span className="text-mint-500">「出会いなおす」</span>ことができる未来を私たちは目指しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
