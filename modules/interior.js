window.content_interior = `<section class="fade-in-up py-20 px-6 md:px-20 bg-white min-h-screen">
    <div class="mb-12 border-l-4 border-[#931A1A] pl-6">
        <h2 class="text-4xl font-black uppercase tracking-tighter italic">Nội thất <span class="text-[#931A1A]">618Decor</span></h2>
    </div>

    <div class="flex flex-wrap gap-8 mb-12 border-b border-slate-100 pb-8">
        <div class="flex flex-col gap-3">
            <span class="text-[9px] font-black uppercase text-slate-300 tracking-widest">Phong cách</span>
            <select id="int-style" onchange="renderInterior()" class="px-4 py-2 text-[10px] font-bold border border-slate-200 outline-none">
                <option value="modern">HIỆN ĐẠI</option>
                <option value="classic">CỔ ĐIỂN</option>
            </select>
        </div>
        <div class="flex flex-col gap-3">
            <span class="text-[9px] font-black uppercase text-slate-300 tracking-widest">Không gian</span>
            <div class="flex gap-2">
                <button onclick="setRoom('living')" class="room-btn px-4 py-2 text-[10px] font-bold border border-slate-200 bg-[#931A1A] text-white">Phòng Khách</button>
                <button onclick="setRoom('kitchen')" class="room-btn px-4 py-2 text-[10px] font-bold border border-slate-200">Phòng Bếp</button>
                <button onclick="setRoom('bedroom')" class="room-btn px-4 py-2 text-[10px] font-bold border border-slate-200">Phòng Ngủ</button>
            </div>
        </div>
    </div>

    <div id="interior-grid" class="grid grid-cols-1 md:grid-cols-3 gap-4"></div>
</section>

<script>
    var currentRoom = 'living';
    function setRoom(r) { 
        currentRoom = r; 
        renderInterior(); 
    }

    function renderInterior() {
        var style = document.getElementById('int-style').value;
        var grid = document.getElementById('interior-grid');
        var html = '';
        for(var i=1; i<=6; i++) {
            var path = "assets/interior/" + style + "/" + currentRoom + "/view_" + i + ".jpg";
            html += "<div class='aspect-square bg-slate-100 overflow-hidden group relative'>" +
                    "<img src='" + path + "' class='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' onerror='this.parentElement.style.display=\"none\"'>" +
                    "</div>";
        }
        grid.innerHTML = html;
    }
    setTimeout(renderInterior, 150);
</script>`;