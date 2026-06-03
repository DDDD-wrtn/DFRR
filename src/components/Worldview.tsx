import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Users, Swords, FileText, X } from 'lucide-react';

export default function WorldviewSection() {
  const [showEdict, setShowEdict] = useState(false);

  return (
    <section className="py-32 bg-deep-black-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-serif text-white mb-6">위태로운 공존의 시대</h2>
          <p className="text-silver text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            마왕의 죽음으로 막을 내린 듯했던 대전쟁. 하지만 그것은 평화가 아닌, 
            언제 터질지 모르는 시한폭탄 같은 공존의 시작이었습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-sm overflow-hidden border border-silver/10 relative">
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1400&auto=format&fit=crop" 
                alt="경계령 풍경" 
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 origin-center scale-105 hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-deep-black via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <p className="text-xs md:text-sm tracking-widest text-crimson font-serif mb-1 md:mb-2">Location</p>
                <h3 className="text-2xl md:text-3xl font-serif text-white">화약고, 경계령</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-12"
          >
            <div>
              <p className="text-silver leading-relaxed text-base md:text-lg mb-8">
                당신이 다스리게 될 영지 '경계령'은 인간과 마족이 혼거하며 끊임없이 충돌하는 가장 위험한 땅입니다. 
                폐허 속에서 억지로 피워낸 꽃처럼, 불안정한 이 땅에서 당신의 통치가 시작됩니다.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-crimson/10 flex items-center justify-center shrink-0 border border-crimson/20">
                    <ShieldAlert className="w-5 h-5 text-crimson" />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-xl mb-1">불안정한 치안</h4>
                    <p className="text-silver-dark text-sm leading-relaxed">종족 간의 잦은 마찰과 잔존하는 마수들의 위협으로부터 백성들을 지켜야 합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-silver/10 flex items-center justify-center shrink-0 border border-silver/20">
                    <Users className="w-5 h-5 text-silver" />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-xl mb-1">분열된 민심</h4>
                    <p className="text-silver-dark text-sm leading-relaxed">인간의 원망과 마족의 배타심 사이에서 아슬아슬한 줄타기를 해야만 합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-crimson-dark/20 flex items-center justify-center shrink-0 border border-crimson/20">
                    <Swords className="w-5 h-5 text-crimson-light" />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-xl mb-1">정치적 암투</h4>
                    <p className="text-silver-dark text-sm leading-relaxed">호시탐탐 영지를 노리는 인간계 귀족들과 마족 강경파의 이빨을 피해야 합니다.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <button onClick={() => setShowEdict(true)} className="flex items-center justify-center w-full md:w-auto gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-deep-black border border-silver/20 hover:border-crimson rounded-sm transition-colors text-silver-light hover:text-white group relative overflow-hidden">
                   <div className="absolute inset-0 bg-crimson/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <FileText className="w-4 h-4 md:w-5 md:h-5 text-crimson group-hover:scale-110 transition-transform relative z-10" />
                   <span className="font-serif tracking-widest text-xs md:text-sm relative z-10">경계령 영주 임명 칙령서 보기</span>
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {showEdict && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setShowEdict(false)}>
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm border border-silver/20 bg-deep-black scrollbar-hide flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-deep-black/80 backdrop-blur-md p-4 flex justify-end z-10 border-b border-white/5">
               <button onClick={() => setShowEdict(false)} className="p-2 bg-black/50 rounded-full text-white hover:bg-crimson transition-colors">
                 <X className="w-5 h-5" />
               </button>
            </div>
            <div className="p-2 md:p-6 flex justify-center">
               <img src="https://i.postimg.cc/Gp6H5Fb7/gyeong-gyelyeong-yeongju-immyeong-chiglyeong.jpg" alt="경계령 영주 임명 칙령서" className="w-full h-auto object-contain rounded-sm" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
