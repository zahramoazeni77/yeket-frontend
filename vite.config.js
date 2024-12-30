import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // مسیر دایرکتوری خروجی
    emptyOutDir: true, // پاک‌سازی دایرکتوری خروجی قبل از ساخت
    assetsDir: "assets1", // مسیر ذخیره‌سازی فایل‌های استاتیک
  },
});
