import { motion } from 'motion/react';
import { Network, HeartPulse } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="py-32 bg-deep-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-crimson font-serif tracking-widest text-xs md:text-sm uppercase mb-2 block">System Details</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white">나비효과</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col h-full bg-deep-black-secondary p-6 md:p-12 border border-silver/10 relative overflow-hidden group"
          >
            <div className="absolute -right-12 -top-12 w-64 h-64 bg-silver/5 rounded-full blur-[80px] group-hover:bg-silver/10 transition-colors"></div>
            
            <div className="mb-6 md:mb-8 p-4 bg-deep-black inline-block self-start rounded border border-silver/10">
              <Network className="w-6 h-6 md:w-8 md:h-8 text-silver" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-serif text-white mb-4">영지 관리 시스템</h3>
            <p className="text-silver text-sm md:text-base mb-8 leading-relaxed">
              민심, 경제, 치안, 군사, 외교. 다섯 가지 핵심 스탯은 서로 거미줄처럼 얽혀있습니다. 
              세금을 올려 경제를 살리면 민심이 폭락하고, 군병을 훈련시키면 인간계의 의심을 사 외교가 악화됩니다.
              단 한 번의 선택이 예상치 못한 나비효과를 불러옵니다.
            </p>
            
            <div className="mt-auto space-y-3">
               {['경제 상승 📈 -> 민심 하락 & 치안 불안정 📉', '군사력 집중 ⚔️ -> 외교적 고립 & 내전 위기 ⚠️'].map((item, idx) => (
                 <div key={idx} className="bg-deep-black/50 p-3 text-sm text-silver-light font-mono border border-white/5 rounded pl-4 border-l-2 border-l-silver">
                   {item}
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col h-full bg-deep-black-secondary p-6 md:p-12 border border-crimson/20 relative overflow-hidden group"
          >
            <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-crimson/10 rounded-full blur-[80px] group-hover:bg-crimson/20 transition-colors"></div>
            
            <div className="mb-6 md:mb-8 p-4 bg-crimson-dark/20 inline-block self-start rounded border border-crimson/30">
              <HeartPulse className="w-6 h-6 md:w-8 md:h-8 text-crimson-light" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-serif text-white mb-4">호감도 스펙트럼</h3>
            <p className="text-silver text-sm md:text-base mb-8 leading-relaxed">
              일반적인 미연시의 호감도가 아닙니다. -100(증오)에서 시작하여 감정의 벽을 돌파할 때마다 관계의 성질이 완전히 뒤바뀝니다.
              낮과 밤, 두 개의 우주를 가진 그녀를 온전한 당신의 편으로 만들 수 있을까요?
            </p>

            <div className="mt-auto space-y-4">
              <div className="relative h-2 w-full bg-deep-black rounded-full overflow-hidden mt-6 mb-2">
                <div className="absolute top-0 left-0 h-full w-[25%] bg-crimson/30"></div>
                <div className="absolute top-0 left-[25%] h-full w-[25%] bg-silver/30"></div>
                <div className="absolute top-0 left-[50%] h-full w-[50%] bg-gradient-to-r from-crimson to-crimson-light"></div>
              </div>
              <div className="flex justify-between text-xs font-mono text-silver-dark px-1">
                <span className="text-crimson">-100 (혐오)</span>
                <span>0 (무관심)</span>
                <span>100 (호기심)</span>
                <span className="text-crimson-light text-shadow">300 (맹목)</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
