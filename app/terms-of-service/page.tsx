import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { APP_NAME } from "@/constants/branding";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Convertly, the online image to PDF converter with local browser-based processing.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      content={{
        en: {
          eyebrow: "Terms of Service",
          title: "Terms of Service",
          description:
            "These Terms explain the rules for using Convertly and the limits of our responsibility when you use the service.",
          updatedLabel: "Last updated: March 18, 2026",
          body: (
            <>
              <h2>1. Service Description</h2>
              <p>
                {APP_NAME} provides an online image to PDF converter that helps users convert images to PDF online through browser-based processing. The core tool is intended for lawful personal, educational, and business use.
              </p>

              <h2>2. Acceptance of Terms</h2>
              <p>
                By accessing or using this website, you agree to these Terms of Service. If you do not agree, do not use the service.
              </p>

              <h2>3. Permitted Use</h2>
              <p>You agree to use the site responsibly and only for lawful purposes. You must not:</p>
              <ul>
                <li>Use the service in violation of any applicable law or regulation.</li>
                <li>Upload or process content you do not have the right to use.</li>
                <li>Attempt to damage, interfere with, or reverse engineer the service.</li>
                <li>Use the site to process harmful, fraudulent, or infringing materials.</li>
                <li>Use automated methods that place unreasonable load on the website.</li>
              </ul>

              <h2>4. Files and Content Responsibility</h2>
              <p>
                You remain fully responsible for the files and content you choose to process. You represent that you have the rights or permissions needed to use those files.
              </p>
              <p>
                Because files are processed locally in your browser, you should still review your outputs carefully before relying on them for personal, business, or legal use.
              </p>

              <h2>5. No Guarantee of Availability or Accuracy</h2>
              <p>
                We aim to keep the service available and useful, but we do not guarantee that the website will always be available, uninterrupted, secure, or free from bugs.
              </p>
              <p>
                We also do not guarantee that every conversion result will be accurate, complete, properly formatted, or suitable for your intended purpose.
              </p>

              <h2>6. Disclaimer</h2>
              <p>
                The service is provided on an &quot;as is&quot; and &quot;as available&quot; basis, without warranties of any kind, whether express or implied.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of data, profits, goodwill, or business opportunity arising from or related to your use of the website.
              </p>

              <h2>8. Intellectual Property</h2>
              <p>
                The website design, branding, text, logos, and software components associated with {APP_NAME} are protected by applicable intellectual property laws.
              </p>

              <h2>9. Third-Party Services</h2>
              <p>
                The website may include third-party services such as advertising, analytics, or embedded resources. Those services may be governed by their own terms and privacy policies.
              </p>

              <h2>10. Suspension or Changes</h2>
              <p>
                We may modify, suspend, or discontinue any part of the service at any time, with or without notice. We may also update these Terms from time to time.
              </p>

              <h2>11. Governing Law</h2>
              <p>
                These Terms are governed by applicable laws in the jurisdiction where the site operator is established, unless otherwise required by local consumer protection laws.
              </p>

              <h2>12. Contact</h2>
              <p>
                Questions about these Terms can be sent to{" "}
                <a href="mailto:abdulmalik31g@gmail.com">abdulmalik31g@gmail.com</a>.
              </p>
            </>
          ),
        },
        ar: {
          eyebrow: "شروط الخدمة",
          title: "شروط الخدمة",
          description:
            "توضح هذه الشروط القواعد الأساسية لاستخدام Convertly وحدود مسؤوليتنا عند استخدام الموقع.",
          updatedLabel: "آخر تحديث: 18 مارس 2026",
          body: (
            <>
              <h2>1. وصف الخدمة</h2>
              <p>
                يوفر {APP_NAME} أداة عبر الويب تساعد المستخدمين على تحويل الصور إلى PDF أونلاين من خلال المعالجة المحلية داخل المتصفح.
              </p>

              <h2>2. قبول الشروط</h2>
              <p>
                باستخدامك لهذا الموقع، فإنك توافق على هذه الشروط. إذا كنت لا توافق عليها، فيجب عليك عدم استخدام الخدمة.
              </p>

              <h2>3. الاستخدام المسموح</h2>
              <p>أنت توافق على استخدام الموقع بشكل قانوني ومسؤول، ويُمنع عليك:</p>
              <ul>
                <li>استخدام الخدمة بما يخالف أي قانون أو لائحة معمول بها.</li>
                <li>معالجة ملفات لا تملك الحق في استخدامها.</li>
                <li>محاولة تعطيل الخدمة أو التدخل فيها أو عكس هندستها.</li>
                <li>استخدام الموقع لمعالجة محتوى ضار أو احتيالي أو منتهك للحقوق.</li>
                <li>استخدام وسائل آلية تضع حملاً غير معقول على الموقع.</li>
              </ul>

              <h2>4. مسؤولية الملفات والمحتوى</h2>
              <p>
                أنت تتحمل المسؤولية الكاملة عن الملفات والمحتوى الذي تختار معالجته. كما تقر بأنك تملك الحقوق أو الأذونات اللازمة لاستخدام تلك الملفات.
              </p>
              <p>
                وبما أن الملفات تتم معالجتها محليًا داخل المتصفح، فمن المهم مراجعة النتائج النهائية بنفسك قبل الاعتماد عليها.
              </p>

              <h2>5. عدم ضمان التوفر أو الدقة</h2>
              <p>
                نسعى للحفاظ على توفر الخدمة وجودتها، لكننا لا نضمن أن الموقع سيكون متاحًا دائمًا أو بلا انقطاع أو خاليًا من الأخطاء.
              </p>

              <h2>6. إخلاء المسؤولية</h2>
              <p>
                يتم تقديم الخدمة &quot;كما هي&quot; و&quot;حسب التوفر&quot; دون أي ضمانات صريحة أو ضمنية.
              </p>

              <h2>7. تحديد المسؤولية</h2>
              <p>
                إلى أقصى حد يسمح به القانون، لا نتحمل المسؤولية عن أي أضرار غير مباشرة أو عرضية أو تبعية ناتجة عن استخدامك للموقع.
              </p>

              <h2>8. الملكية الفكرية</h2>
              <p>
                تصميم الموقع والعلامة التجارية والنصوص والشعارات والمكونات البرمجية المرتبطة بـ {APP_NAME} محمية بموجب القوانين المعمول بها.
              </p>

              <h2>9. خدمات الجهات الخارجية</h2>
              <p>
                قد يتضمن الموقع خدمات تابعة لجهات خارجية مثل الإعلانات أو التحليلات أو الموارد المدمجة.
              </p>

              <h2>10. التعديل أو الإيقاف</h2>
              <p>
                يجوز لنا تعديل أو تعليق أو إيقاف أي جزء من الخدمة في أي وقت، كما يجوز لنا تحديث هذه الشروط من وقت لآخر.
              </p>

              <h2>11. القانون الواجب التطبيق</h2>
              <p>
                تخضع هذه الشروط للقوانين المعمول بها في الجهة التي يتبع لها مشغل الموقع، ما لم تتطلب قوانين حماية المستهلك المحلية خلاف ذلك.
              </p>

              <h2>12. التواصل</h2>
              <p>
                إذا كانت لديك أسئلة حول هذه الشروط، يمكنك التواصل عبر البريد الإلكتروني:{" "}
                <a href="mailto:abdulmalik31g@gmail.com">abdulmalik31g@gmail.com</a>.
              </p>
            </>
          ),
        },
      }}
    />
  );
}
