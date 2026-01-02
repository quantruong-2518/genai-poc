# AI-Powered Test Grading & Teaching Assistant Platform (AI Gradix)
## Product Requirement Document (PRD)

### 1. Giới thiệu & Tầm nhìn (Introduction & Vision)
#### 1.1. Tổng quan sản phẩm
**AI Gradix** là nền tảng trợ lý sư phạm toàn diện tích hợp Generative AI (Vision LLMs). Hệ thống không chỉ giải quyết bài toán chấm điểm thủ công mà còn là một công cụ hỗ trợ giáo viên trong toàn bộ chu kỳ giảng dạy: từ soạn giáo án, tạo đề thi, đến phân tích kết quả và kết nối phụ huynh.

#### 1.2. Mục tiêu cốt lõi (Core Goals)
*   **Tiết kiệm thời gian:** Giảm 80-90% gánh nặng hành chính và chấm bài.
*   **Phân tích sâu (Deep Analytics):** Chuyển đổi dữ liệu bài kiểm tra thành các insight giá trị về năng lực học sinh.
*   **Đa dạng hóa:** Hỗ trợ mọi loại hình đề thi (Trắc nghiệm, Tự luận, Điền khuyết) và chữ viết tay.
*   **Tin cậy (Human-in-the-loop):** Đảm bảo giáo viên luôn là người duyệt cuối cùng với sự hỗ trợ của AI.

---

### 2. Đối tượng người dùng (Target Audience)
*   **Giáo viên phổ thông (Cấp 2, 3):** Cần công cụ chấm bài nhanh, soạn giáo án chuẩn 5512.
*   **Trung tâm luyện thi:** Quản lý số lượng học sinh lớn, cần phân tích phổ điểm để tư vấn lộ trình.
*   **Ban giám hiệu:** Theo dõi chất lượng dạy và học toàn trường (tương lai).

---

### 3. Các tính năng cốt lõi (Core Functional Requirements)

#### 3.1. Hệ thống Chấm điểm Thông minh (Smart Grading)
*   **Chấm Trắc nghiệm (MCQ):** Hybrid logic - AI nhận diện đáp án (OCR) và Code xử lý chấm điểm theo Key để đảm bảo độ chính xác 100%.
*   **Chấm Tự luận (Essay):** AI phân tích nội dung, đối chiếu Rubric và chấm điểm theo phong cách cá nhân hóa của giáo viên (Khắt khe/Khích lệ).
*   **Xử lý Batch:** Upload hàng loạt (folder ảnh) và xử lý nền (Background Worker).
*   **Smart Upload:** Tự động cắt, xoay, khử nhiễu ảnh để tối ưu OCR.

#### 3.2. Quản lý Đề thi & Ma trận (Exam & Matrix Management)
*   **Tạo đề thi:** Tự động tạo đề từ tài liệu (PDF/Word), tạo đề song song (Parallel Exams).
*   **Ma trận đề:** Thiết kế ma trận và bản đặc tả đề thi chuẩn Bộ GD&ĐT.
*   **Thư viện đề:** Lưu trữ và quản lý kho đề thi cá nhân.

#### 3.3. Trợ lý Soạn giảng (Teaching Assistant)
*   **Soạn giáo án:** Tạo giáo án Word chuẩn 5512 chỉ từ một chủ đề.
*   **Tạo Slides:** Tự động gợi ý cấu trúc và nội dung slide bài giảng.
*   **Hoạt động lớp học:** Gợi ý các trò chơi, bài tập khởi động (Ice-breakers).

#### 3.4. Phân tích & Báo cáo (Analytics & Reporting)
*   **Phổ điểm:** Biểu đồ histogram phân bố điểm lớp.
*   **Question Matrix:** Phân tích câu hỏi nào học sinh thường sai nhất.
*   **Student Alerts:** Cảnh báo học sinh sa sút hoặc có tiến bộ vượt bậc.
*   **Báo cáo phụ huynh:** Xuất file báo cáo chi tiết từng học sinh hoặc gửi tin nhắn thông báo.

---

### 4. Kiến trúc hệ thống (System Architecture)
#### 4.1. Tech Stack
*   **Frontend:** Next.js, TailwindCSS, Shadcn UI, Lucide Icons.
*   **Backend:** NestJS (Node.js), TypeORM, PostgreSQL.
*   **AI Engine:** Google Gemini 1.5 Flash (Primary), GPT-4o (Secondary).
*   **Storage:** AWS S3 / Supabase Storage (Lưu trữ ảnh bài làm).
*   **Worker:** Cron Jobs / BullMQ cho việc xử lý chấm bài hàng loạt.

#### 4.2. Luồng xử lý AI (AI Pipeline)
1.  **Input:** Giáo viên upload ảnh/PDF.
2.  **S3 Storage:** File được lưu và tạo Signed URL.
3.  **Prompt Engineering:** Kết hợp dữ liệu ảnh + Rubric + Phong cách giáo viên.
4.  **Extraction:** AI trả về JSON chứa: Tên học sinh, Đáp án trích xuất, Nhận xét.
5.  **Review:** Giáo viên duyệt và sửa đổi trên giao diện split-screen.

---

### 5. Giao diện người dùng (UI/UX Design)
*   **Split-screen Grading:** Ảnh bài làm bên trái, kết quả AI bên phải để đối chiếu tức thì.
*   **Activity Timeline:** Nhật ký hoạt động giúp giáo viên theo dõi tiến độ công việc.
*   **Responsive Design:** Tối ưu hóa cho cả máy tính (soạn bài) và mobile (chụp ảnh bài làm).
*   **Aesthetics:** Sử dụng tông màu Modern Indigo/Slate, sạch sẽ và chuyên nghiệp.

---

### 6. Lộ trình phát triển (Roadmap)
*   **Phase 1 (MVP):** Chấm trắc nghiệm & tự luận ngắn, Quản lý lớp học cơ bản.
*   **Phase 2:** Soạn giáo án/slide, Phân tích phổ điểm nâng cao.
*   **Phase 3:** Mobile App chuyên dụng, Hệ thống kết nối phụ huynh tự động.

---
*Document Version: 1.1*
*Author: Senior Developer & BA (AI Assistant)*
