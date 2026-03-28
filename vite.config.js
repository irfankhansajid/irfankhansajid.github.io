import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const homepage = "https://irfankhansajid.github.io";

export default defineConfig({
	plugins: [react()],
	base: new URL(homepage).pathname || "/",
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					react: ["react"],
					"react-dom": ["react-dom"],
				},
			},
		},
	},
});
