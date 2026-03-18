import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { APP_NAME } from "@/constants/branding";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Convertly, the image to PDF converter that processes files locally in the browser.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      content={{
        en: {
          eyebrow: "Privacy Policy",
          title: "Privacy Policy",
          description:
            "This policy explains what information Convertly handles, how the site works, and how advertising-related technologies may be used if ads are enabled.",
          updatedLabel: "Last updated: March 18, 2026",
          body: (
            <>
              <h2>1. Overview</h2>
              <p>
                {APP_NAME} is an image to PDF converter designed to process files locally in your browser. We built the service to be simple, fast, and privacy-conscious.
              </p>
              <p>
                This Privacy Policy applies to our website and explains how information is handled when you use our tools, browse our pages, or interact with advertising and analytics technologies that may be present on the site.
              </p>

              <h2>2. Files You Convert</h2>
              <p>
                Files selected for conversion are processed locally in your browser. Your images are not uploaded to our servers and are not stored on our servers as part of the normal conversion process.
              </p>
              <p>
                Generated PDFs may also be created locally in your browser. If you choose to use features such as conversion history, related PDF data may be stored only in your browser&apos;s local storage or IndexedDB on your own device so you can re-download previous results. We do not receive those files on our servers.
              </p>

              <h2>3. Information We May Handle</h2>
              <p>
                We do not require you to create an account on our servers to use the core image to PDF converter. We also do not intentionally collect personal data through the conversion tool itself.
              </p>
              <p>Depending on how you use the site, limited information may still be handled:</p>
              <ul>
                <li>Basic technical data such as browser type, device type, and IP address.</li>
                <li>Locally stored preferences such as theme selection or local workspace name.</li>
                <li>Information you voluntarily provide if you contact us by email.</li>
              </ul>

              <h2>4. Cookies and Similar Technologies</h2>
              <p>
                Our site may use cookies or similar technologies for essential site functions, remembering preferences, measuring site performance, and supporting advertising.
              </p>
              <p>
                If Google AdSense or similar advertising services are enabled, third parties may place and read cookies on your browser, or use web beacons, IP addresses, and similar identifiers to help deliver, measure, and personalize ads where permitted by law.
              </p>
              <p>
                For more information about how Google may use data when ads are served, users can review Google&apos;s information at{" "}
                <a href="https://policies.google.com/technologies/partner-sites">
                  How Google uses information from sites or apps that use its services
                </a>
                .
              </p>

              <h2>5. Advertising and Third-Party Services</h2>
              <p>
                We may use Google AdSense or other third-party advertising partners to support the website. These services may use cookies, device identifiers, and similar technologies to provide ads, prevent fraud, and measure ad performance.
              </p>
              <p>
                We do not sell your uploaded files. We also do not upload your conversion files to advertising partners.
              </p>

              <h2>6. Consent</h2>
              <p>
                Where required by applicable law, we will request consent before using non-essential cookies or enabling personalized advertising. Users may also be able to manage cookie preferences through their browser settings or a consent banner shown on the site.
              </p>

              <h2>7. Contact Messages</h2>
              <p>
                If you contact us directly, we may keep your message and contact details for the purpose of responding to your request, providing support, or handling legal and compliance matters.
              </p>

              <h2>8. Data Protection and Security</h2>
              <p>
                We take reasonable steps to protect the website and any limited information we receive. Because the core conversion process runs locally in your browser, the privacy risk associated with file uploads is reduced compared with tools that transmit files to remote servers.
              </p>
              <p>
                No website or online service can guarantee absolute security, so we cannot promise that the service will always be completely secure or error-free.
              </p>

              <h2>9. Your Choices</h2>
              <ul>
                <li>You can stop using the service at any time.</li>
                <li>You can clear locally stored history and preferences from within the app.</li>
                <li>You can block or delete cookies through your browser settings.</li>
                <li>You can contact us if you have privacy-related questions.</li>
              </ul>

              <h2>10. Children&apos;s Privacy</h2>
              <p>
                This website is not directed to children under 13, and we do not knowingly collect personal information from children through the site.
              </p>

              <h2>11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in the site, legal requirements, or advertising practices. When we do, we will update the &quot;Last updated&quot; date on this page.
              </p>

              <h2>12. Contact</h2>
              <p>
                For privacy questions, contact us at{" "}
                <a href="mailto:abdulmalik31g@gmail.com">abdulmalik31g@gmail.com</a>.
              </p>
            </>
          ),
        },
        ar: {
          eyebrow: "سياسة الخصوصية",
          title: "سياسة الخصوصية",
          description:
            "توضح هذه الصفحة كيف يتعامل Convertly مع المعلومات، وكيف تعمل الأداة، وكيف يمكن استخدام تقنيات الإعلانات مثل Google AdSense عند تفعيلها.",
          updatedLabel: "آخر تحديث: 18 مارس 2026",
          body: (
            <>
              <h2>1. نظرة عامة</h2>
              <p>
                {APP_NAME} هو محول صور إلى PDF صُمم لمعالجة الملفات محليًا داخل متصفحك. تم بناء الأداة لتكون بسيطة وسريعة وتحترم خصوصية المستخدم.
              </p>
              <p>
                تنطبق هذه السياسة على موقعنا وتشرح كيف يتم التعامل مع المعلومات عند استخدام الأدوات أو تصفح الصفحات أو التفاعل مع الإعلانات أو الخدمات التابعة لجهات خارجية.
              </p>

              <h2>2. الملفات التي تقوم بتحويلها</h2>
              <p>
                الملفات التي تختارها للتحويل تتم معالجتها محليًا داخل متصفحك. لا يتم رفع الصور إلى خوادمنا ولا يتم تخزينها على أي خادم تابع لنا أثناء عملية التحويل العادية.
              </p>
              <p>
                قد يتم أيضًا إنشاء ملفات PDF الناتجة محليًا داخل المتصفح. وإذا استخدمت ميزات مثل سجل التحويل، فقد يتم حفظ بعض البيانات المرتبطة بالملف داخل التخزين المحلي للمتصفح أو IndexedDB على جهازك فقط.
              </p>

              <h2>3. المعلومات التي قد نتعامل معها</h2>
              <p>
                لا نطلب منك إنشاء حساب على خوادمنا لاستخدام أداة تحويل الصور إلى PDF، كما أننا لا نجمع عمدًا بيانات شخصية من خلال أداة التحويل نفسها.
              </p>
              <p>بحسب طريقة استخدامك للموقع، قد يتم التعامل مع معلومات محدودة مثل:</p>
              <ul>
                <li>بيانات تقنية أساسية مثل نوع المتصفح، نوع الجهاز، وعنوان IP.</li>
                <li>التفضيلات المحلية المحفوظة داخل المتصفح مثل المظهر أو اسم مساحة العمل المحلية.</li>
                <li>المعلومات التي ترسلها طوعًا عند التواصل معنا عبر البريد الإلكتروني.</li>
              </ul>

              <h2>4. ملفات تعريف الارتباط والتقنيات المشابهة</h2>
              <p>
                قد يستخدم الموقع ملفات تعريف الارتباط أو تقنيات مشابهة لدعم وظائف الموقع الأساسية، وتذكر التفضيلات، وقياس الأداء، ودعم الإعلانات.
              </p>
              <p>
                إذا تم تفعيل Google AdSense أو خدمات إعلانية مشابهة، فقد تقوم جهات خارجية بقراءة ملفات تعريف الارتباط أو استخدام معرفات أخرى للمساعدة في عرض الإعلانات وقياسها وتخصيصها.
              </p>
              <p>
                يمكن معرفة المزيد عن استخدام Google للبيانات من خلال الصفحة التالية:{" "}
                <a href="https://policies.google.com/technologies/partner-sites">
                  كيف تستخدم Google المعلومات من المواقع أو التطبيقات التي تستخدم خدماتها
                </a>
                .
              </p>

              <h2>5. الإعلانات والخدمات التابعة لجهات خارجية</h2>
              <p>
                قد نستخدم Google AdSense أو شركاء إعلان آخرين لدعم الموقع. قد تستخدم هذه الخدمات ملفات تعريف الارتباط أو معرفات الأجهزة أو تقنيات مشابهة لتقديم الإعلانات ومنع الاحتيال وقياس أداء الإعلانات.
              </p>
              <p>نحن لا نبيع ملفاتك، كما أننا لا نرفع ملفات التحويل الخاصة بك إلى شركاء الإعلانات.</p>

              <h2>6. موافقة المستخدم</h2>
              <p>
                عندما يتطلب القانون ذلك، سنطلب موافقة المستخدم قبل استخدام ملفات تعريف الارتباط غير الضرورية أو قبل تفعيل الإعلانات المخصصة.
              </p>

              <h2>7. الرسائل التي ترسلها لنا</h2>
              <p>
                إذا قمت بالتواصل معنا مباشرة، فقد نحتفظ برسالتك وبيانات التواصل الخاصة بك لغرض الرد على طلبك أو تقديم الدعم أو الالتزام بالمتطلبات القانونية.
              </p>

              <h2>8. حماية البيانات</h2>
              <p>
                نتخذ خطوات معقولة لحماية الموقع وأي معلومات محدودة قد نتلقاها. وبما أن عملية التحويل الأساسية تتم محليًا داخل المتصفح، فإن مخاطر الخصوصية المرتبطة برفع الملفات تكون أقل مقارنة بالأدوات التي ترسل الملفات إلى خوادم بعيدة.
              </p>
              <p>
                ومع ذلك، لا يوجد موقع أو خدمة على الإنترنت يمكنه تقديم ضمان مطلق للأمان أو العمل بلا أخطاء.
              </p>

              <h2>9. اختياراتك</h2>
              <ul>
                <li>يمكنك التوقف عن استخدام الخدمة في أي وقت.</li>
                <li>يمكنك مسح السجل المحلي والتفضيلات المحفوظة من داخل التطبيق.</li>
                <li>يمكنك حظر ملفات تعريف الارتباط أو حذفها من خلال إعدادات المتصفح.</li>
                <li>يمكنك التواصل معنا إذا كانت لديك أسئلة متعلقة بالخصوصية.</li>
              </ul>

              <h2>10. خصوصية الأطفال</h2>
              <p>
                هذا الموقع غير موجه للأطفال دون سن 13 عامًا، ولا نجمع عمدًا معلومات شخصية من الأطفال من خلال الموقع.
              </p>

              <h2>11. التغييرات على هذه السياسة</h2>
              <p>
                قد نقوم بتحديث سياسة الخصوصية من وقت لآخر بما يعكس تغييرات الموقع أو المتطلبات القانونية أو ممارسات الإعلانات.
              </p>

              <h2>12. التواصل</h2>
              <p>
                إذا كانت لديك أسئلة تتعلق بالخصوصية، يمكنك التواصل عبر البريد الإلكتروني:{" "}
                <a href="mailto:abdulmalik31g@gmail.com">abdulmalik31g@gmail.com</a>.
              </p>
            </>
          ),
        },
      }}
    />
  );
}
