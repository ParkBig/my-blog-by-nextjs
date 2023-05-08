const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  // if (phase === PHASE_DEVELOPMENT_SERVER) {
  //   return {
  //     reactStrictMode: true,
  //     env: {
  //       mongodb_userName: "ParkBigKing",
  //       mongodb_password: "anjfqhk",
  //       mongodb_cluster_name: "cluster0",
  //       mongodb_database: "my-site"
  //     }
  //   }
  // }

  return {
    reactStrictMode: true,
    env: {
      mongodb_userName: "ParkBigKing",
      mongodb_password: "anjfqhk",
      mongodb_cluster_name: "cluster0",
      mongodb_database: "my-site"
    }
  }
}

module.exports = nextConfig
