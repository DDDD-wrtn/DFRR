import { useState } from 'react';
import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';

const factionsData = [
  {
    id: 'belladonna',
    name: '벨라돈나 세력',
    theme: 'border-crimson/30',
    headerColor: 'text-crimson',
    members: [
      { name: '아스모드', role: '마족 장군', desc: '위험한 야심가. 압도적인 무력과 공포로 마족 강경파를 통솔하며 영주를 위협합니다.', img: 'https://i.postimg.cc/TY7J1bk1/Kakao-Talk-20260603-135621079-02.jpg' },
      { name: '그롬', role: '마족 강경파', desc: '인간과의 공존을 거부하고 전쟁을 부추기는 위험한 불씨.', img: 'https://i.postimg.cc/wj1cmBPL/Kakao-Talk-20260603-135621079-12.jpg' },
      { name: '릴리스', role: '마족 강경파', desc: '전쟁을 부추기며 영지의 불안을 조장하는 매혹적이고 위험한 존재.', img: 'https://i.postimg.cc/9QDt7fSC/Kakao-Talk-20260603-135621079-04.jpg' },
      { name: '모르가나', role: '벨라돈나 측근', desc: '마왕 시절부터 벨라돈나를 보필해온 그림자 같은 존재.', img: 'https://i.postimg.cc/zGySgfM5/Kakao-Talk-20260603-135621079-03.jpg' }
    ]
  },
  {
    id: 'hero',
    name: '용사 세력',
    theme: 'border-silver/30',
    headerColor: 'text-silver',
    members: [
      { name: '케이트', role: '마법고문 겸 비서장', desc: '질투심 많은 마법고문. 냉철한 안경 속 숨겨진 빈틈이 매력입니다.', img: 'https://i.postimg.cc/8z7B6C3T/Kakao-Talk-20260603-135621079-01.png' },
      { name: '리나엘', role: '옛 용사파티', desc: '용사의 든든한 조력자 혹은 뜻밖의 적이 될 수 있는 과거의 인연.', img: 'https://i.postimg.cc/138cqzT5/Kakao-Talk-20260603-135621079-05.png' },
      { name: '세레나', role: '옛 용사파티', desc: '과거 용사와 함께 마왕을 토벌했던 동료.', img: 'https://i.postimg.cc/6p8LvQSv/Kakao-Talk-20260603-135621079-11.jpg' },
      { name: '로제', role: '영지 내정 NPC', desc: '경계령의 실무를 책임지는 성실한 일꾼.', img: 'https://i.postimg.cc/7Z5M2LcT/Kakao-Talk-20260603-135621079-10.jpg' }
    ]
  },
  {
    id: 'alliance',
    name: '연합국 세력',
    theme: 'border-white/20',
    headerColor: 'text-white',
    members: [
      { name: '레오하르트', role: '인간계 재상', desc: '권모술수에 능한 노회한 정치가. 마왕의 딸을 이용해 이득을 취하려 합니다.', img: 'https://i.postimg.cc/pLmYFd7T/Kakao-Talk-20260603-135621079-07.jpg' },
      { name: '마르쿠스', role: '인간계 정치세력', desc: '경계령의 붕괴를 노리며 호시탐탐 기회를 엿보는 귀족.', img: 'https://i.postimg.cc/rwDCrpbL/Kakao-Talk-20260603-135621079.jpg' },
      { name: '아델리나', role: '인간계 정치세력', desc: '자신의 이익을 위해 언제든 배신할 준비가 된 위험한 인물.', img: 'https://i.postimg.cc/T3KqDPS3/Kakao-Talk-20260603-135621079-06.jpg' }
    ]
  }
];

export default function CharactersSection() {
  const [isNight, setIsNight] = useState(false);

  return (
    <section className="py-32 bg-deep-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-crimson font-serif tracking-widest text-xs md:text-sm uppercase mb-2 block">Dramatis Personae</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white">주요 인물 및 세력</h2>
        </motion.div>

        {/* Belladonna Main Highlight (Flip Card) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-32 flex flex-col items-center"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif text-crimson mb-2">벨라돈나</h3>
            <p className="text-silver text-sm md:text-base mb-6">마왕의 숨겨진 딸</p>
            
            {/* Toggle */}
            <div className="flex justify-center items-center gap-4">
              <span className={`text-sm tracking-widest transition-colors ${!isNight ? 'text-white' : 'text-silver-dark'}`}>낮 🤍</span>
              <button 
                onClick={() => setIsNight(!isNight)}
                className="w-16 h-8 rounded-full border border-silver/30 p-1 relative transition-colors focus:outline-none"
                style={{ backgroundColor: isNight ? 'var(--color-crimson-light)' : 'var(--color-deep-black-secondary)' }}
              >
                <motion.div 
                  className="w-6 h-6 rounded-full bg-white flex items-center justify-center"
                  animate={{ x: isNight ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  {isNight ? <Moon className="w-3 h-3 text-crimson" /> : <Sun className="w-3 h-3 text-deep-black" />}
                </motion.div>
              </button>
              <span className={`text-sm tracking-widest transition-colors ${isNight ? 'text-crimson' : 'text-silver-dark'}`}>밤 🖤</span>
            </div>
          </div>

          <div 
            className={`w-full max-w-sm aspect-[3/4] flip-card bg-transparent cursor-pointer ${isNight ? 'flipped' : ''}`}
            onClick={() => setIsNight(!isNight)}
          >
            <div className="relative w-full h-full flip-card-inner">
              
              {/* Day */}
              <div className="absolute w-full h-full flip-card-front bg-deep-black-secondary rounded-sm overflow-hidden border border-silver/10">
                <img 
                  src="https://i.postimg.cc/7Z5M2LcS/Kakao-Talk-20260603-135621079-13.jpg" 
                  alt="벨라돈나 낮" 
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-transparent p-8 flex flex-col justify-end">
                  <div className="inline-block px-3 py-1 border border-white/20 text-white text-[10px] md:text-xs mb-2 md:mb-3 self-start font-mono bg-black/40">MBTI: INFP</div>
                  <h4 className="text-xl md:text-2xl font-serif text-white mb-2">낮의 벨라돈나</h4>
                  <p className="text-silver-light text-xs md:text-sm leading-relaxed">
                    소심하고 섬세한 성격. 하얀 드레스를 입고 부서질 듯 연약한 모습을 보입니다. 마족이라는 사실을 숨기고 싶어하며, 사람들의 눈치를 많이 봅니다.
                  </p>
                </div>
              </div>

              {/* Night */}
              <div className="absolute w-full h-full flip-card-back bg-crimson-dark rounded-sm overflow-hidden border border-crimson/30">
                <img 
                  src="https://i.postimg.cc/Gm4JypNP/Kakao-Talk-20260603-135621079-14.jpg" 
                  alt="벨라돈나 밤" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-8 flex flex-col justify-end">
                  <div className="inline-block px-3 py-1 border border-crimson/40 text-crimson-light text-[10px] md:text-xs mb-2 md:mb-3 self-start font-mono bg-black/50">MBTI: ENTP</div>
                  <h4 className="text-xl md:text-2xl font-serif text-crimson-light mb-2">밤의 벨라돈나</h4>
                  <p className="text-silver-light text-xs md:text-sm leading-relaxed">
                    도발적이고 여유로운 소악마. 검은 레이스 드레스를 입고 용사(당신)를 쥐락펴락합니다. 낮의 기억을 모두 가지고 있으며, 낮의 자신을 비웃기도 합니다.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Factions Grid */}
        <div className="space-y-32">
          {factionsData.map((faction, fIdx) => (
            <div key={faction.id}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-12 border-b border-silver/10 pb-4"
              >
                <h3 className={`text-xl md:text-3xl font-serif ${faction.headerColor}`}>
                  {faction.name}
                </h3>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {faction.members.map((char, idx) => (
                  <motion.div 
                    key={char.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                    className={`group relative overflow-hidden bg-deep-black-secondary border ${faction.theme} rounded-sm aspect-[4/5] flex flex-col justify-end p-5 hover:border-white/50 transition-colors cursor-pointer`}
                  >
                    <div className="absolute inset-0">
                      <img src={char.img} alt={char.name} className="w-full h-full object-cover opacity-80 md:opacity-40 grayscale-0 md:grayscale md:group-hover:grayscale-0 md:group-hover:opacity-80 md:group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/80 md:via-deep-black/70 to-transparent"></div>
                    </div>
                    <div className="relative z-10 transform translate-y-0 md:translate-y-6 md:group-hover:translate-y-0 transition-transform duration-500">
                      <span className={`text-xs ${faction.headerColor} mb-1 block font-serif tracking-widest`}>{char.role}</span>
                      <h4 className="text-xl font-serif text-white mb-2 md:mb-3">{char.name}</h4>
                      <p className="text-xs text-silver-light opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed font-sans">
                        {char.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
