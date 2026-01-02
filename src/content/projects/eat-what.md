# Product Requirements Document (PRD)

## 🎯 Tên Dự Án
**WhatEat - AI-Powered Nutrition & Health Tracking Platform**

Nền tảng tư vấn dinh dưỡng thông minh với AI, giúp người dùng theo dõi sức khỏe toàn diện, phân tích bữa ăn tự động, và xây dựng thói quen ăn uống khoa học.

---

## 💡 Giải Quyết Vấn Đề Gì

### Vấn đề hiện tại
- **Khó khăn trong việc theo dõi dinh dưỡng**: Người dùng không biết bữa ăn của mình có bao nhiêu calo, đạm, béo, carb
- **Mất thời gian tra cứu**: Phải tìm kiếm thông tin dinh dưỡng từ nhiều nguồn khác nhau, không chính xác
- **Thiếu động lực duy trì**: Không có hệ thống gamification để khuyến khích thói quen tốt
- **Quản lý sức khỏe phân tán**: Dữ liệu cân nặng, huyết áp, đường huyết... lưu nhiều nơi khác nhau
- **Lập kế hoạch ăn uống khó khăn**: Không biết nên ăn gì để đạt mục tiêu sức khỏe

### Giải pháp của WhatEat

#### 1️⃣ **Phân Tích Bữa Ăn Thông Minh với AI**
- Chụp ảnh món ăn → AI nhận diện và tính toán dinh dưỡng tự động
- Nhập text mô tả → AI phân tích chi tiết thành phần và calories
- Quét OCR bao bì → Trích xuất thông tin dinh dưỡng từ nhãn sản phẩm
- Hỗ trợ bữa ăn gia đình với phần ăn riêng cho từng người

#### 2️⃣ **Theo Dõi Sức Khỏe Toàn Diện**
- **Chỉ số cơ thể**: Cân nặng, BMI, số đo vòng
- **Chỉ số y tế**: Huyết áp, đường huyết, cholesterol
- **Kết quả xét nghiệm**: Lưu trữ và phân tích lab results
- **Giấc ngủ**: Tracking chất lượng giấc ngủ, naps
- **Vận động**: Log hoạt động thể chất

#### 3️⃣ **Gamification - Động Lực Bền Vững**
- **Achievements**: Hệ thống thành tựu đa dạng
- **Daily Quests**: Nhiệm vụ hàng ngày để xây dựng thói quen
- **Streaks**: Theo dõi chuỗi ngày kiên trì
- **Leaderboard**: Bảng xếp hạng cộng đồng
- **Leveling System**: Kiếm XP và thăng cấp

#### 4️⃣ **AI Personal Assistant - "Neangi"**
- Trợ lý AI cá nhân hóa 24/7
- Tư vấn dinh dưỡng dựa trên dữ liệu cá nhân
- Gợi ý món ăn phù hợp với mục tiêu sức khỏe
- Nhắc nhở và động viên proactive

#### 5️⃣ **Meal Planning & Pantry Management**
- AI tự động tạo thực đơn phù hợp với mục tiêu
- Quản lý tủ lạnh/pantry với AI suggestions
- Gợi ý món ăn từ nguyên liệu có sẵn
- Tạo grocery list tự động

#### 6️⃣ **Tính Năng Xã Hội**
- Chia sẻ bữa ăn với bạn bè
- Social feed với posts về meals, workouts, sleep
- Hệ thống kết bạn và tương tác
- Meal sharing requests

---

## 🛠️ Công Nghệ Đang Sử Dụng

### Frontend Stack
```
Framework:        Next.js 15.5.4 (App Router)
Language:         TypeScript 5 (strict mode)
UI Library:       React 19.1.0
Styling:          Tailwind CSS 4
State:            Context API (Auth, Profile, Nutrition)
UI Components:    Headless UI, Framer Motion
Charts:           Recharts
i18n:             i18next, next-i18next (Vietnamese/English)
HTTP Client:      Axios (với token refresh & caching)
Icons:            Lucide React
Date:             date-fns, dayjs
Others:           html2canvas, jspdf, react-markdown
```

### Backend Stack
```
Framework:        NestJS 11.x
Language:         TypeScript 5
Runtime:          Node.js 22+ (supports Bun/Deno)
Architecture:     CQRS, Modular Design
Database:         PostgreSQL + TypeORM
Caching:          Redis
Queue:            BullMQ (async processing)
Authentication:   JWT (RS256 asymmetric)
Security:         Passport.js, bcrypt, helmet
API Docs:         Swagger/OpenAPI
```

### AI & ML Integration
```
OpenAI:           GPT-4, GPT-3.5-turbo, text-embedding-3-small
                  - Meal analysis & nutrition calculation
                  - Meal plan generation
                  - Semantic search (1536-dim embeddings)

Google Gemini:    Vision API for food recognition
DeepSeek:         Alternative cost-effective AI provider
Google Vision:    OCR for lab results & package scanning
```

### Infrastructure & Services
```
Cloud Storage:    AWS S3 (image uploads, pre-signed URLs)
Push Notifications: Firebase Cloud Messaging (FCM)
File Generation:  PDFKit
Monitoring:       Morgan (HTTP logging)
Containerization: Docker support
```

### Database Architecture
```
Entities:         68 entities across domains
Migrations:       79 migrations (schema evolution)
Naming:           snake_case strategy
Features:         JSONB columns, soft deletes, full-text search
```

### Key Technical Features
- **Semantic Caching**: Giảm 60-70% AI API calls bằng embedding similarity
- **BFF Pattern**: Backend for Frontend cho dashboard optimization
- **Queue-Based Processing**: Async meal analysis với retry logic
- **Event-Driven**: Achievement & quest tracking via event listeners
- **Hybrid Search**: Keyword (40%) + Semantic (60%) search
- **Multi-Language**: Vietnamese & English support
- **Token Refresh**: Automatic JWT refresh với mutex preventing race conditions

---

## 🚀 Phát Triển Nâng Cao Tiếp Theo

### Phase 1: Core Enhancement (Q1-Q2 2026)

#### 1. **Mobile App Development**
- React Native hoặc Flutter app
- Offline-first architecture
- Camera integration tối ưu hơn
- Push notifications native
- Wearable device integration (Apple Watch, Fitbit)

#### 2. **AI Model Improvements**
- **Fine-tune custom models**: Train model riêng trên Vietnamese dishes
- **Multi-modal AI**: Kết hợp text + image + context trong 1 request
- **Portion estimation**: AI ước lượng khối lượng từ ảnh
- **Food detection accuracy**: Nâng độ chính xác nhận diện món Việt lên 95%+

#### 3. **Advanced Health Analytics**
- **Predictive analytics**: Dự đoán xu hướng sức khỏe
- **Correlation insights**: Phân tích mối liên hệ meal-health metrics
- **Personalized recommendations**: ML-based suggestions
- **Health risk assessment**: Cảnh báo sớm rủi ro sức khỏe

### Phase 2: Social & Community (Q3 2026)

#### 4. **Enhanced Social Features**
- **Community groups**: Nhóm theo mục tiêu (giảm cân, tăng cơ...)
- **Challenges**: Thử thách cộng đồng có thời hạn
- **Expert connection**: Kết nối với chuyên gia dinh dưỡng
- **Recipe sharing**: Chia sẻ công thức nấu ăn
- **Live streaming**: Livestream nấu ăn, workout

#### 5. **Marketplace Integration**
- **Food delivery**: Tích hợp đặt đồ ăn từ meal plans
- **Grocery delivery**: Order nguyên liệu từ pantry suggestions
- **Supplement store**: Mua thực phẩm chức năng
- **Coach booking**: Đặt lịch tư vấn với chuyên gia

### Phase 3: Enterprise & B2B (Q4 2026)

#### 6. **Enterprise Solutions**
- **Corporate wellness**: Gói cho doanh nghiệp
- **Gym/Fitness center integration**: White-label solution
- **Hospital/Clinic version**: HIPAA-compliant medical version
- **School nutrition**: Giải pháp cho trường học
- **Insurance partnership**: Tích hợp với bảo hiểm sức khỏe

#### 7. **Advanced Integrations**
- **Continuous Glucose Monitor (CGM)**: Real-time glucose tracking
- **Smart scales**: Auto-sync Bluetooth scales
- **Food delivery APIs**: Grab, ShopeeFood, GoFood integration
- **Telemedicine**: Video consultation với bác sĩ
- **Lab partners**: Direct lab result import

### Phase 4: AI & Automation (2027)

#### 8. **Next-Gen AI Features**
- **Voice-first interface**: Hands-free meal logging
- **AR meal scanning**: Augmented reality food recognition
- **Proactive health coaching**: AI chủ động can thiệp
- **Genetic-based nutrition**: DNA test integration cho nutrition cá nhân hóa
- **Mental health integration**: Mood tracking + nutrition correlation

#### 9. **Platform Expansion**
- **Smart home integration**: Alexa, Google Home voice commands
- **Smartwatch app**: Standalone watch app
- **Desktop app**: Electron-based desktop client
- **Browser extension**: Quick meal logging từ web

### Phase 5: Data & Research (Ongoing)

#### 10. **Research & Development**
- **Anonymized data research**: Nghiên cứu xu hướng dinh dưỡng VN
- **Academic partnerships**: Hợp tác với trường đại học
- **Open dataset**: Public dataset về món ăn Việt Nam
- **White papers**: Publish research findings
- **API for researchers**: Developer API cho nghiên cứu khoa học

---

## 📊 Success Metrics

### User Engagement
- **DAU/MAU ratio**: >40%
- **Average session duration**: >5 minutes
- **Meal logs per user/week**: >15
- **7-day retention**: >60%
- **30-day retention**: >40%

### Technical Performance
- **API response time**: <200ms (p95)
- **AI analysis time**: <3 seconds
- **App load time**: <2 seconds
- **Uptime**: 99.9%
- **Semantic cache hit rate**: >60%

### Business Goals
- **User growth**: 20% MoM
- **Premium conversion**: >5%
- **NPS score**: >50
- **Churn rate**: <5% monthly

---

## 🎯 Target Users

### Primary
- **Health-conscious individuals** (25-45 tuổi)
- **Fitness enthusiasts** muốn track macro
- **Người đang giảm cân/tăng cân**
- **Bệnh nhân tiểu đường** cần quản lý dinh dưỡng

### Secondary
- **Gia đình** muốn ăn uống lành mạnh
- **Vận động viên** chuyên nghiệp
- **Người bận rộn** cần meal planning nhanh
- **Người cao tuổi** theo dõi sức khỏe

---

**Document Version**: 1.0
**Last Updated**: January 2, 2026
**Owner**: WhatEat Product Team
