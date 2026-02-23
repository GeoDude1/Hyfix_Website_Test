/**
 * Node.js server for production: serves the built SPA from dist/ and returns
 * index.html for any path that isn't a static file (e.g. /home, /about,
 * /applications). That way direct URL entry and refresh work.
 */
import express from "express";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const dist = join(__dirname, "dist");
const port = process.env.PORT || 3000;

const app = express();

// Serve static files from dist (JS, CSS, images, etc.)
app.use(express.static(dist, { index: false }));

// SPA fallback: any path that doesn't match a file gets index.html
app.get("*", (req, res) => {
  res.sendFile(join(dist, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
