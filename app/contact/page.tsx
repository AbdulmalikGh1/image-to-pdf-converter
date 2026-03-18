import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Convertly for support, feedback, business questions, or issues related to the image to PDF converter.",
};

export default function ContactPage() {
  return (
    <LegalPage
      content={{
        en: {
          eyebrow: "Contact",
          title: "Contact Us",
          description:
            "Need help with the image to PDF converter, want to report an issue, or have feedback? We’d be glad to hear from you.",
          updatedLabel: "Last updated: March 18, 2026",
          body: (
            <>
              <h2>General Support</h2>
              <p>
                For general questions, support issues, feedback, or business enquiries, email us at{" "}
                <a href="mailto:abdulmalik31g@gmail.com">abdulmalik31g@gmail.com</a>.
              </p>

              <h2>What to Include</h2>
              <p>To help us respond faster, please include:</p>
              <ul>
                <li>A short description of the issue or question.</li>
                <li>The device and browser you were using.</li>
                <li>Steps to reproduce the issue, if applicable.</li>
                <li>Screenshots or error details, if helpful.</li>
              </ul>

              <h2>Feedback</h2>
              <p>
                We welcome product suggestions and usability feedback. Thoughtful user feedback helps us improve the experience and keep the tool simple and reliable.
              </p>

              <h2>Response Time</h2>
              <p>
                We aim to review messages as quickly as possible, but response times may vary depending on message volume and the nature of the request.
              </p>
            </>
          ),
        },
        ar: {
          eyebrow: "اتصل بنا",
          title: "اتصل بنا",
          description:
            "إذا كنت بحاجة إلى مساعدة، أو ترغب في الإبلاغ عن مشكلة، أو لديك ملاحظات حول الأداة، يسعدنا تواصلك معنا.",
          updatedLabel: "آخر تحديث: 18 مارس 2026",
          body: (
            <>
              <h2>الدعم العام</h2>
              <p>
                للاستفسارات العامة أو المشاكل التقنية أو الملاحظات أو الاستفسارات المهنية، يمكنك التواصل معنا عبر البريد الإلكتروني:{" "}
                <a href="mailto:abdulmalik31g@gmail.com">abdulmalik31g@gmail.com</a>.
              </p>

              <h2>ماذا يُفضل أن تتضمن رسالتك؟</h2>
              <p>حتى نتمكن من مساعدتك بشكل أسرع، يُفضل تضمين ما يلي:</p>
              <ul>
                <li>وصف مختصر للمشكلة أو السؤال.</li>
                <li>نوع الجهاز والمتصفح الذي كنت تستخدمه.</li>
                <li>الخطوات التي أدت إلى المشكلة إن وجدت.</li>
                <li>لقطات شاشة أو تفاصيل الخطأ إذا كانت مفيدة.</li>
              </ul>

              <h2>الملاحظات والاقتراحات</h2>
              <p>
                نرحب بالأفكار والملاحظات المتعلقة بتجربة الاستخدام. ملاحظات المستخدمين تساعدنا على تحسين الأداة والحفاظ على بساطتها وموثوقيتها.
              </p>

              <h2>وقت الرد</h2>
              <p>
                نحاول مراجعة الرسائل في أقرب وقت ممكن، لكن وقت الرد قد يختلف حسب عدد الرسائل وطبيعة الطلب.
              </p>
            </>
          ),
        },
      }}
    />
  );
}
