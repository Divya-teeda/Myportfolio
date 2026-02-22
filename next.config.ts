import type { NextConfig } from "next";

const repoName = 'Myportfolio';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
