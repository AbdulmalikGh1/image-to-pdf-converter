import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { APP_DESCRIPTION, APP_NAME } from "@/constants/branding";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Convertly, an image to PDF converter built for speed, simplicity, and privacy-first browser processing.",
};

export default function AboutPage() {
  return (
    <LegalPage
      content={{
        en: {
          eyebrow: "About Us",
          title: "About Convertly",
          description:
            "Convertly is built for people who want a fast, trustworthy way to convert images to PDF online without unnecessary friction.",
          updatedLabel: "Last updated: March 18, 2026",
          body: (
            <>
              <h2>What We Do</h2>
              <p>
                {APP_NAME} is a simple web-based image to PDF converter. It helps users combine JPG and PNG images into a single PDF quickly, with page ordering controls and browser-based conversion.
              </p>

              <h2>Who It&apos;s For</h2>
              <p>
                The tool is designed for students, professionals, freelancers, small teams, and everyday users who need to convert images to PDF online without complicated software.
              </p>

              <h2>What Matters to Us</h2>
              <ul>
                <li>Simplicity: the tool should be easy to use from the first visit.</li>
                <li>Speed: conversions should happen quickly in the browser.</li>
                <li>Privacy: files stay local and are not uploaded to our servers during normal use.</li>
                <li>Clarity: the product should feel reliable, honest, and easy to navigate.</li>
              </ul>

              <h2>Why Local Processing Matters</h2>
              <p>
                Unlike many file tools that require uploads, {APP_NAME} is designed so that file processing happens directly in your browser. That approach can reduce waiting time and helps keep sensitive files on your own device.
              </p>

              <h2>Our Goal</h2>
              <p>{APP_DESCRIPTION}</p>
            </>
          ),
        },
        ar: {
          eyebrow: "من نحن",
          title: "عن Convertly",
          description:
            "تم إنشاء Convertly للأشخاص الذين يريدون طريقة سريعة وموثوقة لتحويل الصور إلى PDF أونلاين بدون تعقيد.",
          updatedLabel: "آخر تحديث: 18 مارس 2026",
          body: (
            <>
              <h2>ماذا نقدم؟</h2>
              <p>
                {APP_NAME} هو أداة ويب بسيطة لتحويل الصور إلى PDF. تساعد المستخدمين على دمج صور JPG وPNG في ملف PDF واحد بسرعة مع إمكانية ترتيب الصفحات قبل التصدير.
              </p>

              <h2>لمن هذه الأداة؟</h2>
              <p>
                الأداة مناسبة للطلاب والموظفين والمستقلين وأصحاب الأعمال الصغيرة وكل من يحتاج إلى تحويل الصور إلى PDF أونلاين دون تثبيت برامج إضافية.
              </p>

              <h2>ما الذي نهتم به؟</h2>
              <ul>
                <li>البساطة: يجب أن تكون الأداة سهلة من أول استخدام.</li>
                <li>السرعة: يجب أن تتم عمليات التحويل بسرعة داخل المتصفح.</li>
                <li>الخصوصية: تبقى الملفات محليًا ولا يتم رفعها إلى خوادمنا أثناء الاستخدام العادي.</li>
                <li>الوضوح: نريد منتجًا موثوقًا وسهل الفهم والتنقل.</li>
              </ul>

              <h2>لماذا تهم المعالجة المحلية؟</h2>
              <p>
                على عكس كثير من أدوات الملفات التي تتطلب رفع المحتوى، صُمم {APP_NAME} بحيث تتم المعالجة مباشرة داخل المتصفح. هذا الأسلوب قد يقلل وقت الانتظار ويساعد في إبقاء الملفات الحساسة على جهازك.
              </p>

              <h2>هدفنا</h2>
              <p>{APP_DESCRIPTION}</p>
            </>
          ),
        },
      }}
    />
  );
}
