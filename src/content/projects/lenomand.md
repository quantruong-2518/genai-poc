# Product Requirements Document (PRD): Lenormand AI

## 1. Project Overview
**Lenormand AI** là một ứng dụng web hiện đại kết hợp nghệ thuật bói bài Lenormand truyền thống (thế kỷ 19) với công nghệ trí tuệ nhân tạo (AI) tiên tiến. Mục tiêu của dự án là cung cấp một nền tảng tư vấn tâm linh trực diện, thực tế và có chiều sâu cá nhân hóa.

*   **Tầm nhìn**: Trở thành "Người bạn đồng hành tâm linh" (Spiritual Companion) hàng đầu, giúp người dùng giải mã các sự kiện đời thường thông qua ngôn ngữ của những lá bài.
*   **Giá trị cốt lõi**: Sự thật (Truth), Thực tế (Reality), và Sự kết nối (Connection).

---

## 2. Target Audience (Chân dung người dùng)
1.  **Người tìm kiếm giải pháp (The Seekers)**: Những người đang đối mặt với sự không chắc chắn trong tình cảm, công việc và cần một "góc nhìn thứ hai" nhanh chóng.
2.  **Người đam mê Lenormand (The Enthusiasts)**: Những người muốn học cách giải bài chuyên sâu thông qua cách phối hợp các cặp lá (Pairing) mà AI thực hiện.
3.  **Người dùng thế hệ mới (Gen Z & Millennials)**: Thích trải nghiệm tâm linh hiện đại, hình ảnh đẹp, và ngôn ngữ gần gũi (Slang, English-Vietnamese mix).

---

## 3. Core Features (Tính năng cốt lõi)

### 3.1. Hệ thống Reader Personalities (Linh hồn của App)
Thay vì một câu trả lời AI chung chung, người dùng được tương tác với các "Nhân cách Reader" có cá tính riêng:
*   **Madame Iris**: Cổ điển, quyền uy, tập trung vào định mệnh.
*   **Anh Chiến**: Thẳng thắn, gắt, dội gáo nước lạnh để thức tỉnh.
*   **Chu Pi (Gen Z)**: Vui vẻ, bắt trend, ngôn ngữ hiện đại.
*   **Cô Linh**: Nhẹ nhàng, chữa lành, thấu hiểu trực giác.
*(Và 5 nhân cách khác phù hợp cho từng chủ đề cụ thể)*

### 3.2. Thuật toán AI Pairing (Đọc bài theo cặp)
*   **Logic**: Áp dụng quy tắc Lenormand chuẩn: "Lá bài đứng trước là chủ thể, lá bài sau là tính từ/hành động bổ nghĩa".
*   **Deep Context**: AI không chỉ đọc ý nghĩa lá bài mà còn kết nối chúng với câu hỏi cụ thể của người dùng để đưa ra lời khuyên thực tiễn (Actionable Advice).

### 3.3. Trải nghiệm người dùng (UX/UI)
*   **Interactive Selection**: Giao diện chọn bài trực quan với hiệu ứng lật bài (Card flip) mượt mà bằng Framer Motion.
*   **Responsive Design**: Tối ưu hoàn hảo trên mobile (vốn là thiết bị chính người dùng xem bói).
*   **Multi-Spread**: Hỗ trợ nhiều kiểu trải bài (3 lá, 5 lá, trải bài chéo, v.v.).

---

## 4. Technical Stack
*   **Framework**: Next.js 14 (App Router).
*   **Styling**: Tailwind CSS + Glassmorphism.
*   **State Management**: Zustand (nhẹ nhàng và hiệu quả).
*   **AI Engine**: DeepSeek Chat / GPT-4o Mini (via proxy API).
*   **Animations**: Framer Motion.

---

## 5. Roadmap (Lộ trình phát triển)

### Phase 1: Foundation (Đã hoàn thành)
*   Xây dựng Core Logic và hệ thống 36 lá bài.
*   Triển khai 9 Reader Personalities với Prompt Design chuyên sâu.
*   Tích hợp AI API và hệ thống Parsing JSON kết quả.

### Phase 2: Engagement & Retention (Hiện tại)
*   **Hỏi đáp với Reader**: Cho phép chat follow-up sau khi nhận kết quả.
*   **Card of the Day**: Rút bài hàng ngày để tăng tỷ lệ quay lại.
*   **Atmosphere Mode**: Bổ sung nhạc nền ASMR và hiệu ứng hình ảnh huyền bí.

### Phase 3: Scaling & Social (Tương lai)
*   **Grand Tableau**: Tính năng trải bài nâng cao 36 lá (Bản đồ định mệnh).
*   **Social Share**: Tạo ảnh/video kết quả đẹp mắt để chia sẻ Instagram/TikTok.
*   **User Account**: Lưu lịch sử trải bài lên đám mây (Supabase/Firebase).

---

## 6. Success Metrics (Chỉ số đo lường)
*   **Retention Rate**: Tỷ lệ người dùng quay lại rút bài hàng ngày.
*   **Conversation Length**: Số lượng câu hỏi người dùng đặt thêm cho AI Reader.
*   **Conversion**: Tỷ lệ người dùng chia sẻ kết quả lên mạng xã hội.
