import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-black pt-24 pb-12 border-t border-crimson/20 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507608149806-5b4870f20d6f?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        
        <h2 className="text-2xl md:text-5xl font-serif text-white mb-6 md:mb-8 leading-normal md:leading-tight">
          당신의 선택이<br/>
          <span className="text-crimson">대륙의 운명</span>을 바꿉니다.
        </h2>
        
        <motion.a
          href="https://crack.wrtn.ai/detail/6a16a745b98db112e9d953dd"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center justify-center px-6 py-4 md:px-10 md:py-5 bg-crimson border border-crimson-light text-white font-bold tracking-[0.2em] overflow-hidden rounded-sm transition-all hover:bg-crimson-light mb-16 md:mb-20 text-sm md:text-base shadow-[0_0_30px_rgba(139,0,0,0.3)]"
        >
          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
          즉시 플레이 시작
          <ChevronRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.a>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs pt-8 border-t border-white/10 text-silver-dark tracking-wider">
          <p>&copy; 2026 Dark Fantasy Romance RPG. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">Term of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
