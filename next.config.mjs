/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? "/agro-dev" : "",
  assetPrefix: isGithubPages ? "/agro-dev/" : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/agro-dev" : ""
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
