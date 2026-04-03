
export default function Home() {
    return (
        <div>
            <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#f7fbff] to-[#eef5ff] px-4 pt-28 pb-16 sm:px-8 lg:px-12">
                <div className="pointer-events-none absolute top-20 left-8 h-20 w-20 rounded-full bg-tertiary-fixed/80"></div>
                <div className="pointer-events-none absolute right-12 top-36 h-24 w-24 rotate-12 rounded-3xl bg-secondary-container/75"></div>
                <div className="pointer-events-none absolute bottom-20 left-1/3 h-40 w-10 -rotate-12 rounded-full bg-primary-container/25"></div>

                <div className="relative z-10 mx-auto grid max-w-[1380px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
                    <div className="group relative order-1 lg:order-2 lg:col-span-6">
                        <div className="absolute -inset-3 -z-10 rounded-[34px] bg-gradient-to-br from-[#a7d4ff] via-[#d9ecff] to-[#b9ffd5] opacity-70 blur-2xl"></div>
                        <img
                            src="/images/home.png"
                            alt="Bé học kỹ năng sống qua game"
                            className="h-[340px] w-full rounded-[30px] object-cover object-[52%_35%] shadow-[0_16px_44px_rgba(64,126,220,0.25)] transition-transform duration-500 group-hover:scale-[1.02] sm:h-[460px] lg:h-[520px]"
                        />
                    </div>

                    <div className="order-2 space-y-8 text-center lg:order-1 lg:col-span-6 lg:text-left">
                        <h1 className="font-headline text-4xl leading-[1.12] font-extrabold text-on-surface sm:text-5xl lg:text-6xl">
                            Chơi tình huống thật -{' '}
                            <span className="text-primary">Giỏi kỹ năng sống thật</span>
                        </h1>

                        <p className="mx-auto max-w-2xl text-base leading-relaxed font-semibold text-on-surface-variant sm:text-lg lg:mx-0">
                            AI đồng hành giúp bé phản xạ an toàn mỗi ngày qua những thử thách mô
                            phỏng thế giới thực đầy thú vị.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 pt-2 lg:justify-start">
                            <button className="rounded-full bg-[#80BEED] px-8 py-4 text-lg font-extrabold text-white shadow-lg shadow-[#80BEED]/35 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-[#80BEED]/45 active:scale-95">
                                Bắt đầu chơi 🎮
                            </button>

                            <button className="rounded-full border-2 border-[#80BEED] bg-surface-container-lowest px-8 py-4 text-lg font-extrabold text-primary transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#ebf5ff] active:scale-95">
                                Tạo nhân vật 🧑‍🎓
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}