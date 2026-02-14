window.content_header = `<header class="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-[100] border-b border-slate-100">
    <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div class="flex items-center cursor-pointer" onclick="switchTab('home')">
            <img src="logo_618.png" alt="618Decor Logo" class="h-12 w-auto object-contain">
        </div>

        <nav class="hidden md:flex items-center space-x-7">
            <div class="relative group">
                <button class="flex items-center text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-500 group-hover:text-[#931A1A] transition-colors">
                    01. Ngoại thất
                    <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div class="absolute top-full left-0 w-40 bg-white shadow-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <button onclick="switchTab('exterior_villa')" class="w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#931A1A]">Biệt thự</button>
                    <button onclick="switchTab('exterior_townhouse')" class="w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#931A1A]">Nhà phố</button>
                    <button onclick="switchTab('exterior_other')" class="w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#931A1A]">Khác</button>
                </div>
            </div>

            <div class="relative group">
                <button class="flex items-center text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-500 group-hover:text-[#931A1A] transition-colors">
                    02. Nội thất
                    <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div class="absolute top-full left-0 w-40 bg-white shadow-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <button onclick="switchTab('interior_living')" class="w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#931A1A]">Khách</button>
                    <button onclick="switchTab('interior_kitchen')" class="w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#931A1A]">Bếp</button>
                    <button onclick="switchTab('interior_bedroom')" class="w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#931A1A]">Ngủ</button>
                    <button onclick="switchTab('interior_altar')" class="w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#931A1A]">Thờ</button>
                </div>
            </div>

            <div class="relative group">
                <button class="flex items-center text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-500 group-hover:text-[#931A1A] transition-colors">
                    03. Dịch vụ
                    <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div class="absolute top-full left-0 w-64 bg-white shadow-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <button onclick="switchTab('sv_ext_design')" class="w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#931A1A]">1. Thiết kế ngoại thất</button>
                    <button onclick="switchTab('sv_int_design')" class="w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#931A1A]">2. Thiết kế nội thất</button>
                    <button onclick="switchTab('sv_landscape')" class="w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#931A1A]">3. Thiết kế cảnh quan sân vườn</button>
                    <button onclick="switchTab('sv_const_full')" class="w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#931A1A]">4. Thi công xây dựng trọn gói</button>
                    <button onclick="switchTab('sv_int_full')" class="w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#931A1A]">5. Thi công nội thất trọn gói</button>
                    <button onclick="switchTab('sv_renovation')" class="w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#931A1A]">6. Thi công cải tạo nội - ngoại thất</button>
                    <button onclick="switchTab('sv_supervision')" class="w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#931A1A]">7. Tư vấn giám sát</button>
                    <button onclick="switchTab('sv_permit')" class="w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#931A1A]">8. Cấp phép xây dựng</button>
                </div>
            </div>

            <button id="link-landscape" onclick="switchTab('landscape')" class="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-500 hover:text-[#931A1A] transition-colors">04. Cảnh quan</button>
            <button id="link-training" onclick="switchTab('training')" class="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-500 hover:text-[#931A1A] transition-colors">05. Training</button>
            <button id="link-smarttool" onclick="switchTab('smarttool')" class="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-500 hover:text-[#931A1A] transition-colors">06. Smart tool</button>
        </nav>

        <div class="hidden md:flex items-center space-x-4">
            <a href="tel:0906029448" class="text-[10px] font-black border-2 border-[#931A1A] text-[#931A1A] px-4 py-2 rounded-full hover:bg-[#931A1A] hover:text-white transition-all uppercase italic">
                Hotline: 0906.029.448
            </a>
            <button onclick="switchTab('login')" class="group flex items-center space-x-2 text-[10px] font-extrabold uppercase tracking-widest text-slate-900 hover:text-[#931A1A] transition-all">
                <div class="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#931A1A] transition-all">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <span>PORTAL</span>
            </button>
        </div>
    </div>
</header>`;