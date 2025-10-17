// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Let Next process TS/JSX and MD/MDX files
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'md', 'mdx'],

  // Use the Rust-based MDX compiler (fast + built-in)
  experimental: { mdxRs: true },

  // Export a fully static site to /out (works great on Netlify)
  output: 'export',

  // Required if you ever use <Image> during static export
  images: { unoptimized: true },
};

export default nextConfig;
