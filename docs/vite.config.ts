//vite.config.ts
import { defineConfig } from "vite";
import { SearchPlugin } from "vitepress-plugin-search";

// flex search options
const flexSearchOptions = {
  tokenize: 'full',
}

// search plugin options
var options = {
  previewLength: 62,
  buttonLabel: "Search",
  placeholder: "Search docs",
  ...flexSearchOptions,
};

export default defineConfig({
  plugins: [SearchPlugin(options)],
});