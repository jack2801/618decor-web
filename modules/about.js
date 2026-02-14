window.content_about = `<div class="min-h-screen bg-white pt-24 pb-12 px-6">
    <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter">
            Câu chuyện <span class="text-[#931A1A]">618 DECOR</span>
        </h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div class="space-y-6 text-slate-600 leading-relaxed">
                <p class="text-xl font-medium text-slate-800">
                    Chúng tôi không chỉ xây nhà, chúng tôi kiến tạo không gian tổ ấm.
                </p>
                <p>
                    Được thành lập với tâm huyết của những kiến trúc sư yêu nghề, 618 DECOR đã và đang khẳng định vị thế trong lĩnh vực thiết kế thi công trọn gói tại khu vực phía Bắc.
                </p>
                <p>
                    Mỗi dự án là một tác phẩm nghệ thuật riêng biệt, phản ánh đúng cá tính và nhu cầu của chủ đầu tư.
                </p>
            </div>
            <div class="bg-[#931A1A]/5 p-8 border-l-4 border-[#931A1A]">
                <h3 class="text-lg font-bold mb-4 text-[#931A1A]">Tầm nhìn & Sứ mệnh</h3>
                <p class="text-sm text-slate-700 italic">
                    "Trở thành đơn vị Top 1 về giải pháp kiến trúc hiện đại và tối ưu công năng, mang lại giá trị bền vững cho khách hàng thông qua sự minh bạch và tận tâm."
                </p>
            </div>
        </div>

        <div class="bg-slate-50 p-10 rounded-2xl border border-slate-100">
            <h2 class="text-2xl font-bold mb-6">Giá trị cốt lõi của chúng tôi</h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div class="text-center p-4">
                    <div class="text-3xl mb-2">💎</div>
                    <div class="font-bold">Chất lượng</div>
                </div>
                <div class="text-center p-4">
                    <div class="text-3xl mb-2">🤝</div>
                    <div class="font-bold">Uy tín</div>
                </div>
                <div class="text-center p-4">
                    <div class="text-3xl mb-2">🚀</div>
                    <div class="font-bold">Sáng tạo</div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    // Logic: Nếu đang ở trang chủ, nạp nội dung này vào container chính
    if(document.getElementById("main-content")) {
        document.getElementById("main-content").innerHTML = window.content_about;
        window.scrollTo(0, 0); // Cuộn lên đầu trang khi mở trang About
    }
</script>`;