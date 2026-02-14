window.content_login = `<section class="min-h-[80vh] flex items-center justify-center bg-slate-50 px-6">
    <div class="max-w-md w-full bg-white p-10 shadow-2xl rounded-sm border-t-4 border-[#931A1A]">
        <div class="text-center mb-10">
            <h2 class="text-2xl font-black uppercase tracking-tighter">618<span class="text-[#931A1A]">DECOR</span></h2>
            <p class="text-[10px] text-slate-400 uppercase tracking-[0.3em] mt-2">Hệ thống quản lý nội bộ</p>
        </div>

        <div class="space-y-6">
            <div>
                <label class="block text-[10px] font-black uppercase mb-2 text-slate-500">Tài khoản</label>
                <input id="user" type="text" class="w-full p-4 bg-slate-50 border-none outline-none focus:ring-1 focus:ring-[#931A1A] text-sm">
            </div>
            <div>
                <label class="block text-[10px] font-black uppercase mb-2 text-slate-500">Mật khẩu</label>
                <input id="pass" type="password" class="w-full p-4 bg-slate-50 border-none outline-none focus:ring-1 focus:ring-[#931A1A] text-sm">
            </div>
            
            <button onclick="handleLogin()" class="w-full bg-[#931A1A] text-white py-4 font-black uppercase tracking-widest text-[11px] hover:bg-black transition-all">
                Đăng nhập hệ thống
            </button>
        </div>

        <p id="login-msg" class="text-center mt-6 text-red-600 text-[10px] font-bold uppercase italic"></p>
    </div>
</section>

<script>
    function handleLogin() {
        const u = document.getElementById('user').value;
        const p = document.getElementById('pass').value;
        const msg = document.getElementById('login-msg');

        if(u === 'admin' && p === '618') {
            alert('Chào Admin! Chuyển tới trang quản trị bài viết.');
            switchTab('admin'); // Tab AI viết trang đăng bài Facebook
        } else if(u === 'khach' && p === '618') {
            alert('Chào Quý khách! Chuyển tới kho Smart Tool.');
            switchTab('smart_tool'); // Tab AI viết trang tải Coronex
        } else {
            msg.innerText = 'Thông tin đăng nhập không chính xác!';
        }
    }
</script>`;