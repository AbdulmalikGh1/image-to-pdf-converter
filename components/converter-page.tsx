"use client";

import { PAGE_SIZES } from "@/constants/converter";
import { ConversionStatusPanel } from "@/components/conversion-status-panel";
import { Controls } from "@/components/controls";
import { CreatorCredit } from "@/components/creator-credit";
import { ErrorAlert } from "@/components/error-alert";
import { Highlights } from "@/components/highlights";
import { HistoryPanel } from "@/components/history-panel";
import { PageHeader } from "@/components/page-header";
import { PreviewList } from "@/components/preview-list";
import { SiteFooter } from "@/components/site-footer";
import { TopToolbar } from "@/components/top-toolbar";
import { Uploader } from "@/components/uploader";
import { useAuth } from "@/hooks/use-auth";
import { useConverter } from "@/hooks/use-converter";
import { useHistory } from "@/hooks/use-history";
import { useLocale } from "@/hooks/use-locale";
import { useTheme } from "@/hooks/use-theme";

export function ConverterPage() {
  const { theme, toggleTheme } = useTheme();
  const { locale, toggleLocale } = useLocale();
  const { session, isAuthenticated, signIn, continueAsGuest, signOut } = useAuth();
  const {
    images,
    pageSize,
    isPreparingFiles,
    isConverting,
    error,
    pdfUrl,
    lastConversion,
    stats,
    hasImages,
    setPageSize,
    addFiles,
    removeImage,
    reorderImages,
    clearAll,
    convert,
  } = useConverter();
  const historyScope = isAuthenticated ? session.email || session.name : "guest";
  const {
    history,
    isReady,
    summary,
    addHistoryItem,
    clearHistory,
    downloadHistoryItem,
  } = useHistory(historyScope);

  return (
    <main id="main-content" className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <TopToolbar
          theme={theme}
          locale={locale}
          session={session}
          isAuthenticated={isAuthenticated}
          onThemeToggle={toggleTheme}
          onLocaleToggle={toggleLocale}
          onSignIn={signIn}
          onContinueAsGuest={continueAsGuest}
          onSignOut={signOut}
        />

        <PageHeader
          locale={locale}
          pdfUrl={pdfUrl}
          downloadName={lastConversion?.outputFileName}
        />

        <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-6">
            <Uploader
              locale={locale}
              onFilesAdded={addFiles}
              disabled={isConverting}
              isPreparing={isPreparingFiles}
            />
            <PreviewList
              locale={locale}
              images={images}
              onMove={reorderImages}
              onRemove={removeImage}
            />
          </div>

          <div className="flex flex-col gap-6">
            <aside className="glass-card rounded-[28px] p-6 sm:p-7" aria-labelledby="controls-heading">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted)]">
                    {locale === "ar" ? "أدوات التحويل" : "Conversion Controls"}
                  </p>
                  <h2 id="controls-heading" className="display-font mt-2 text-2xl font-semibold">
                    {locale === "ar" ? "إعداد الإخراج" : "Prepare output"}
                  </h2>
                </div>
                <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--surface)] px-4 py-3 text-right">
                  <p className="text-sm font-semibold">
                    {stats.count} {stats.count === 1 ? (locale === "ar" ? "صورة" : "image") : locale === "ar" ? "صور" : "images"}
                  </p>
                  <p className="text-xs text-[var(--muted)]">{stats.sizeLabel}</p>
                </div>
              </div>

              <Controls
                locale={locale}
                isConverting={isConverting}
                hasImages={hasImages}
                pageSize={pageSize}
                pageSizes={PAGE_SIZES}
                onPageSizeChange={setPageSize}
                onConvert={() => convert({ onComplete: addHistoryItem })}
                onClear={clearAll}
                hasPdf={Boolean(pdfUrl)}
              />

              <ConversionStatusPanel
                locale={locale}
                isConverting={isConverting}
                pdfUrl={pdfUrl}
                error={error}
                lastConversion={lastConversion}
                onConvert={() => convert({ onComplete: addHistoryItem })}
                onClear={clearAll}
              />

              {error ? <ErrorAlert message={error} /> : null}

              <div className="mt-6 rounded-[24px] border border-[var(--card-border)] bg-[var(--surface)] p-4">
                <p className="text-sm font-medium">{locale === "ar" ? "الخطوات" : "Workflow"}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {locale === "ar" ? "1. ارفع الصور." : "1. Upload images."}
                  <br />
                  {locale === "ar" ? "2. عدّل ترتيب الصفحات." : "2. Refine the page order."}
                  <br />
                  {locale === "ar" ? "3. أنشئ الملف ثم نزّله." : "3. Generate and download the combined PDF."}
                </p>
              </div>
            </aside>

            <HistoryPanel
              locale={locale}
              history={history}
              isReady={isReady}
              totalPdfs={summary.totalPdfs}
              totalImages={summary.totalImages}
              totalPdfSizeLabel={summary.totalPdfSizeLabel}
              onClearHistory={clearHistory}
              onDownloadHistoryItem={downloadHistoryItem}
              onApplyPageSize={setPageSize}
            />
          </div>
        </section>

        <section>
          <Highlights locale={locale} />
        </section>

        <CreatorCredit />

        <div aria-live="polite" className="sr-only">
          {isPreparingFiles
            ? locale === "ar"
              ? "جارٍ تجهيز معاينات الصور."
              : "Preparing image previews."
            : isConverting
            ? locale === "ar"
              ? "تحويل ملف PDF جارٍ الآن."
              : "PDF conversion in progress."
            : pdfUrl
              ? locale === "ar"
                ? "ملف PDF جاهز للتنزيل."
                : "PDF ready for download."
              : locale === "ar"
                ? "في انتظار رفع الملفات."
                : "Waiting for upload."}
        </div>

        <SiteFooter locale={locale} />
      </div>
    </main>
  );
}
