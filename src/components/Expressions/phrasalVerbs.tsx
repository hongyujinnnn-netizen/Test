import { BookOpen, Search, Clock, ArrowRight, Bookmark, Globe, Sparkles, Star,Zap, TrendingUp } from 'lucide-react';

export default function PhrasalVerbs() {
  const categories = [
    {
      title: "Phrasal Verbs Using 'Up'",
      description: "In this section, we have prepared a list of phrasal verbs that contain 'up' as their particle, such as give up, level up, etc.",
      progress: 0,
      lessons: 22,
      words: 289,
      time: "2h 25m",
      image: "UP",
      color: "from-emerald-300 via-emerald-200 to-teal-200",
      shadow: "shadow-emerald-200"
    },
    {
      title: "Phrasal Verbs Using 'Out'",
      description: "In this section you are provided with a list of phrasal verbs with 'out' as their particle, such as turn out, carry out, etc.",
      progress: 0,
      lessons: 15,
      words: 215,
      time: "1h 48m",
      image: "OUT",
      color: "from-orange-300 via-orange-200 to-amber-200",
      shadow: "shadow-orange-200"
    },
    {
      title: "Phrasal Verbs Using 'Off' & 'In'",
      description: "In this lesson we have prepared a list of phrasal verbs with 'off' and 'in' as their particle, such as wash off, kick off, shut in, fill in, etc.",
      progress: 0,
      lessons: 18,
      words: 256,
      time: "2h 10m",
      image: "OFF",
      color: "from-yellow-300 via-yellow-200 to-amber-200",
      shadow: "shadow-yellow-200"
    },
    {
      title: "Phrasal Verbs Using 'On' & 'Upon'",
      description: "Phrasal verbs that contain the particles 'on' or 'upon', such as go on, hang on, touch up, fall upon, etc. are listed here.",
      progress: 0,
      lessons: 16,
      words: 198,
      time: "1h 35m",
      image: "ON",
      color: "from-cyan-300 via-cyan-200 to-sky-200",
      shadow: "shadow-cyan-200"
    },
    {
      title: "Phrasal Verbs Using 'Down' & 'Away'",
      description: "Here we have prepared phrasal verbs that contain the particles 'down' or 'away', such as gun down, bog down, get away, take away, etc.",
      progress: 0,
      lessons: 14,
      words: 178,
      time: "1h 28m",
      image: "DOWN",
      color: "from-purple-300 via-purple-200 to-fuchsia-200",
      shadow: "shadow-purple-200"
    },
    {
      title: "Phrasal Verbs Using 'Around', 'Over'",
      description: "This section gives you a list of phrasal verbs that contain 'Around', 'Over', or 'Along' as their particle.",
      progress: 0,
      lessons: 12,
      words: 145,
      time: "1h 15m",
      image: "OVER",
      color: "from-green-300 via-green-200 to-lime-200",
      shadow: "shadow-green-200"
    },
    {
      title: "Phrasal Verbs Using 'Back', 'Through'",
      description: "Here you are provided with a list of phrasal verbs with 'Back', 'Through', 'With', 'At', & 'By' as their particle.",
      progress: 0,
      lessons: 20,
      words: 267,
      time: "2h 18m",
      image: "BACK",
      color: "from-blue-300 via-blue-200 to-indigo-200",
      shadow: "shadow-blue-200"
    },
    {
      title: "Phrasal Verbs Using 'Into', 'To', 'About'",
      description: "In this lesson you will see phrasal verbs that are made with 'Into', 'To', 'About', & 'For', such as bump into, etc.",
      progress: 0,
      lessons: 17,
      words: 223,
      time: "1h 52m",
      image: "INTO",
      color: "from-rose-300 via-rose-200 to-pink-200",
      shadow: "shadow-rose-200"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-[#F8FAFC] relative overflow-hidden">
        
        {/* --- DECORATIVE PATTERN (The Crosses from your screenshot) --- */}
        <div className="hidden lg:flex flex-col gap-6 absolute left-6 top-40 opacity-20 select-none pointer-events-none">
          {[...Array(8)].map((_, i) => (
             <div key={i} className="text-blue-600 text-xl font-bold">+ + +</div>
          ))}
        </div>
        
        {/* Top Right Decorative Blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          
          {/* Header Section */}
          <div className="mb-12 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                {/* Breadcrumb - Pill Style */}
                <div className="inline-flex items-center gap-2 text-xs font-semibold bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-100 text-slate-500 mb-6">
                  <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
                  <span className="text-slate-300">/</span>
                  <a href="#" className="hover:text-blue-500 transition-colors">Expressions</a>
                  <span className="text-slate-300">/</span>
                  <span className="text-blue-600">Phrasal Verbs</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">
                  Categorized <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Phrasal Verbs</span>
                </h1>
                <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
                  Master English naturally. Explore lists of phrasal verbs organized by their particles like 'off', 'down', and 'up'.
                </p>
              </div>

              {/* Search Bar - Cute & Modern */}
              <div className="w-full md:w-auto min-w-[300px]">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                    <input
                      type="text"
                      placeholder="Search for a particle..."
                      className="w-full pl-12 pr-6 py-3.5 bg-white border border-slate-100 rounded-full shadow-lg shadow-slate-200/50 focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all text-slate-700 placeholder-slate-400 font-medium"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2rem] p-5 border border-slate-100 hover:border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 cursor-pointer flex gap-6 overflow-hidden relative"
              >
                {/* Book Cover Design - "Cute Sticker" style */}
                <div className={`w-28 shrink-0 rounded-2xl bg-gradient-to-br ${category.color} p-4 flex flex-col items-center justify-center relative shadow-lg ${category.shadow} group-hover:scale-105 transition-transform duration-300`}>
                  <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
                  <div className="absolute top-3 w-8 h-1 bg-white/30 rounded-full"></div>
                  
                  <div className="relative z-10 text-center">
                    <span className="block text-[10px] font-black tracking-widest text-slate-800/60 mb-1">PARTICLE</span>
                    <span className="block text-2xl font-black text-slate-800 tracking-tighter drop-shadow-sm">{category.image}</span>
                  </div>
                  
                  <div className="absolute bottom-3 right-3 bg-white/90 p-1.5 rounded-full shadow-sm">
                    <ArrowRight className="w-3 h-3 text-slate-700" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col py-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {category.title}
                    </h3>
                    <button className="text-slate-300 hover:text-amber-400 transition-colors">
                      <Bookmark className="w-6 h-6 fill-current opacity-20 hover:opacity-100" />
                    </button>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-2 font-medium">
                    {category.description}
                  </p>

                  {/* Stats Row */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-4 bg-slate-50 w-fit px-3 py-1.5 rounded-full border border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                        <span>{category.lessons}</span>
                      </div>
                      <div className="w-px h-3 bg-slate-200"></div>
                      <div className="flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{category.words}</span>
                      </div>
                      <div className="w-px h-3 bg-slate-200"></div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-orange-400" />
                        <span>{category.time}</span>
                      </div>
                    </div>

                    {/* Cute Progress Bar */}
                    <div className="flex items-center gap-3">
                        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-blue-400 to-blue-500 h-full rounded-full w-[2%]" // Hardcoded for visual
                            ></div>
                        </div>
                        <span className="text-xs font-bold text-slate-400">{category.progress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Educational Content - Styled as a "Notebook" */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 mb-12 shadow-xl shadow-slate-200/60 border border-slate-100 relative overflow-hidden">
             {/* Decorative background element */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-bl-[10rem] -z-0"></div>

             <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-purple-100 p-3 rounded-2xl rotate-3">
                        <Sparkles className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-800">Why Learn Phrasal Verbs?</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="prose prose-slate prose-lg text-slate-600">
                        <p className="font-medium text-lg leading-8">
                            Phrasal verbs are the secret sauce of English fluency! They blend verbs with prepositions to create magical new meanings. For example, <span className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-md">"turn down"</span> isn't about direction—it means to reject an offer.
                        </p>
                        
                        <div className="space-y-4 mt-8">
                            <div className="flex items-start gap-3">
                                <div className="bg-green-100 p-1.5 rounded-full mt-1">
                                    <Star className="w-4 h-4 text-green-600 fill-current" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Sound Natural</h4>
                                    <p className="text-sm">Speak like a local, not a textbook.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-blue-100 p-1.5 rounded-full mt-1">
                                    <Star className="w-4 h-4 text-blue-600 fill-current" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Understand Pop Culture</h4>
                                    <p className="text-sm">Get the jokes in movies and lyrics in songs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Tips Card */}
                    <div className="bg-slate-50 rounded-3xl p-8 border-2 border-dashed border-slate-200">
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <span className="text-2xl">💡</span> Pro Tips
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                                <span className="font-bold text-blue-500">01.</span>
                                <span className="text-sm font-medium text-slate-600">Start with common verbs like "get" & "take"</span>
                            </li>
                            <li className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                                <span className="font-bold text-purple-500">02.</span>
                                <span className="text-sm font-medium text-slate-600">Learn them in full sentences, not isolation</span>
                            </li>
                            <li className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                                <span className="font-bold text-orange-500">03.</span>
                                <span className="text-sm font-medium text-slate-600">Use spaced repetition to remember them</span>
                            </li>
                        </ul>
                    </div>
                </div>
             </div>
          </div>


           

      {/* Main CTA Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-indigo-600 to-emerald-700 rounded-3xl shadow-[0_20px_60px_rgba(168,85,247,0.4)] max-w-4xl w-full">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>

        {/* Content */}
        <div className="relative z-10 p-8 md:p-16 text-center">
          
          {/* Floating Icons */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl border border-white/20 animate-bounce">
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl border border-white/20 animate-bounce delay-150">
              <Zap className="w-6 h-6 text-cyan-300" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl border border-white/20 animate-bounce delay-300">
              <TrendingUp className="w-6 h-6 text-emerald-300" />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/30 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold text-white">10,000+ Active Learners</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            Ready to level up?
            <span className="inline-block ml-3 animate-bounce">🚀</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl mb-10 text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
            Join thousands of learners making their English sound natural, fun, and expressive.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative bg-white text-purple-600 px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] overflow-hidden">
              <span className="relative z-10">Start Learning Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-2xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300">
              Watch Demo
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>

        {/* Bottom Glow Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      </div> 
        </main>
      </div>
    </>
  );
}