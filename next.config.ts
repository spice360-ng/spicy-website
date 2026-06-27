import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    
};

module.exports = {
    allowedDevOrigins: [
        '172.20.10.*',
        '192.168.0.*',
    ]
}

export default nextConfig;
