import { webpack } from "next/dist/compiled/webpack/webpack";

module.exports ={
  reactStrictMode: true,
  webpack(config: webpack.Configuration){
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/',
    })
    return config;
  }
}
