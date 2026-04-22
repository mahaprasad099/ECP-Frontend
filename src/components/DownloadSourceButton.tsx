import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

// Bundle all project source files at build time as raw strings.
// Vite resolves these globs statically — only files matched here are included.
const sourceModules = import.meta.glob(
  [
    "/src/**/*",
    "/public/**/*",
    "/index.html",
    "/package.json",
    "/tsconfig*.json",
    "/vite.config.ts",
    "/vitest.config.ts",
    "/tailwind.config.ts",
    "/postcss.config.js",
    "/eslint.config.js",
    "/components.json",
    "/README.md",
  ],
  { query: "?raw", import: "default", eager: false },
) as Record<string, () => Promise<string>>;

const DownloadSourceButton = () => {
  const [busy, setBusy] = useState(false);

  const handleDownload = async () => {
    setBusy(true);
    try {
      const { default: JSZip } = await import("jszip");
      const zip = new JSZip();

      const entries = Object.entries(sourceModules);
      await Promise.all(
        entries.map(async ([path, loader]) => {
          try {
            const content = await loader();
            // Strip leading slash for clean archive paths
            zip.file(path.replace(/^\//, ""), content);
          } catch {
            // Skip binary/unreadable files silently
          }
        }),
      );

      const blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "project-source.zip";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);

      toast({ title: "Download started", description: `Bundled ${entries.length} files.` });
    } catch (err) {
      console.error(err);
      toast({
        title: "Download failed",
        description: err instanceof Error ? err.message : "Unknown error",
        variant: "destructive",
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={busy}
      variant="outline"
      size="sm"
      className="fixed bottom-4 right-4 z-[60] gap-2 shadow-lg bg-background/95 backdrop-blur"
    >
      {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
      {busy ? "Packaging…" : "Download Source"}
    </Button>
  );
};

export default DownloadSourceButton;
