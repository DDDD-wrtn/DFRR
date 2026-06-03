import { motion } from 'motion/react';
import { prologues } from '../data/prologues';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-24 overflow-hidden border-b border-crimson/20">
      <img src="https://i.postimg.cc/gJ6gZbc0/jemog-eobsneun-dijain-(6).png" alt="Hero Background" className="absolute top-0 left-0 w-full h-full object-cover opacity-40 md:opacity-60 pointer-events-none" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black/40 via-deep-black/80 to-deep-black pointer-events-none"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-crimson font-serif tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm mb-3 md:mb-4">Dark Fantasy Romance RPG</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-[1.3] drop-shadow-2xl font-serif">
            마왕의 딸과<br className="block md:hidden" />
            <span className="hidden md:inline"> </span>
            <span className="text-crimson">정략결혼</span>을 해버렸다
          </h1>
          <p className="text-sm sm:text-base md:text-2xl text-silver mb-8 md:mb-12 max-w-3xl leading-relaxed px-4 md:px-0 mx-auto">
            위험한 동거, 그리고 위태로운 영지 통치. <br className="hidden md:block"/>
            당신의 선택이 대륙의 운명을 바꾼다.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5, duration: 1 }}
           className="w-full max-w-4xl mt-8 mb-16"
        >
          <h3 className="text-sm text-silver-dark tracking-widest uppercase mb-6 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-silver-dark/50"></span>
            프롤로그 엿보기
            <span className="w-12 h-px bg-silver-dark/50"></span>
          </h3>
          <div className="flex overflow-x-auto gap-4 pb-6 md:pb-8 justify-start md:justify-center py-4 px-4 sm:px-2 snap-x snap-mandatory w-[100vw] md:w-full -ml-6 md:ml-0 scrollbar-hide">
            {prologues.map((item, idx) => (
              <div 
                key={idx} 
                className="shrink-0 w-[240px] md:w-[360px] aspect-[4/5] overflow-hidden rounded-sm border border-crimson/20 shadow-[0_0_15px_rgba(139,0,0,0.1)] relative snap-center md:snap-align-none first:ml-6 md:first:ml-0 last:mr-6 md:last:mr-0"
              >
                <img src={item.cover} alt={item.title} className={`w-full h-full object-cover ${item.objectPosition || 'object-center'} opacity-90`} referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/30 to-transparent flex items-end p-4 md:p-6">
                  <p className="text-silver-light font-serif tracking-wider text-sm md:text-base">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center px-4">
            <p className="inline-flex flex-wrap justify-center items-center text-center text-silver-dark text-xs sm:text-sm tracking-widest font-sans opacity-90 px-4 md:px-8 py-3 md:py-4 border border-silver/10 rounded-sm bg-deep-black/50 leading-relaxed md:leading-normal">
               시작설정 <span className="text-crimson font-serif px-1 font-bold whitespace-nowrap">-프롤로그 웹툰-</span> 을 통해 보실 수 있습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
