import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const homepage = "https://irfankhansajid.github.io";

export default defineConfig({
	plugins: [react()],
	base: new URL(homepage).pathname || "/",
	build: {
		minify: "esbuild",
		cssMinify: true,
		reportCompressedSize: true,
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["react", "react-dom"],
				},
			},
		},
	},
});
