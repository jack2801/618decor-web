window.content_decor = `<section class="fade-in-up py-20 px-6 md:px-20 bg-white">
    <div class="mb-16 border-l-4 border-[#931A1A] pl-6">
        <h2 class="text-4xl font-black uppercase tracking-tighter italic">Dự án <span class="text-[#931A1A]">Thiết kế</span></h2>
        <p class="text-slate-400 text-[11px] uppercase tracking-[0.3em] mt-2">Kiến trúc - Nội thất - Cảnh quan</p>
    </div>

    <div class="flex flex-wrap gap-8 mb-12 border-b border-slate-100 pb-8">
        <div class="flex flex-col gap-3">
            <span class="text-[9px] font-black uppercase text-slate-300 tracking-widest">Loại hình</span>
            <div class="flex gap-2">
                <button onclick="updateDecor('interior')" id="btn-interior" class="px-4 py-2 text-[10px] font-bold uppercase border border-slate-200 hover:border-[#931A1A] transition-all">Nội thất</button>
                <button onclick="updateDecor('exterior')" id="btn-exterior" class="px-4 py-2 text-[10px] font-bold uppercase border border-slate-200 hover:border-[#931A1A] transition-all">Ngoại thất</button>
            </div>
        </div>
        
        <div class="flex flex-col gap-3">
            <span class="text-[9px] font-black uppercase text-slate-300 tracking-widest">Phong cách</span>
            <div class="flex gap-2">
                <button onclick="updateStyle('modern')" id="btn-modern" class="px-4 py-2 text-[10px] font-bold uppercase border border-slate-200">Hiện đại</button>
                <button onclick="updateStyle('classic')" id="btn-classic" class="px-4 py-2 text-[10px] font-bold uppercase border border-slate-200">Cổ điển</button>
            </div>
        </div>
    </div>

    <div id="decor-gallery" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        </div>
</section>

<script>
    // Cấu trúc quản lý đường dẫn ảnh theo đúng thư mục của ông
    var currentType = "interior";
    var currentStyle = "modern";

    function updateDecor(type) {
        currentType = type;
        renderGallery();
    }

    function updateStyle(style) {
        currentStyle = style;
        renderGallery();
    }

    function renderGallery() {
        var gallery = document.getElementById("decor-gallery");
        if(!gallery) return;

        // Giả lập danh sách ảnh (Trong thực tế ông có thể liệt kê file hoặc dùng vòng lặp)
        var images = [1, 2, 3, 4, 5, 6];
        var html = "";
        
        images.forEach(function(num) {
            // Đường dẫn tự động: assets / [loại hình] / [phong cách] / [tên ảnh]
            var path = "assets/" + currentType + "/" + currentStyle + "/view_" + num + ".jpg";
            
            html += "<div class='group overflow-hidden bg-slate-100 aspect-video relative cursor-pointer'>" +
                    "   <img src='" + path + "' class='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' onerror=\"this.parentElement.style.display='none'\">" +
                    "   <div class='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>" +
                    "       <span class='text-white text-[10px] font-black uppercase tracking-widest'>Xem dự án</span>" +
                    "   </div>" +
                    "</div>";
        });

        gallery.innerHTML = html;
        
        // Cập nhật màu nút active
        document.querySelectorAll("button").forEach(btn => btn.classList.remove("bg-[#931A1A]", "text-white", "border-[#931A1A]"));
        var activeType = document.getElementById("btn-" + currentType);
        var activeStyle = document.getElementById("btn-" + currentStyle);
        if(activeType) activeType.classList.add("bg-[#931A1A]", "text-white", "border-[#931A1A]");
        if(activeStyle) activeStyle.classList.add("bg-[#931A1A]", "text-white", "border-[#931A1A]");
    }

    // Chạy lần đầu khi nạp tab
    setTimeout(renderGallery, 100);
</script>`;