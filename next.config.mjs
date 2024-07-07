// next.config.mjs
import { createProxyMiddleware } from 'http-proxy-middleware';

const API_URL = 'https://opendata.emel.pt/cycling/gira/station/availability';

export default {
  async rewrites() {
    return [
      {
        source: '/api/gira/availability',
        destination: `https://opendata.emel.pt/cycling/gira/station/availability`,
      },
    ];
  },
  webpack(config) {
    config.devServer = {
      proxy: {
        '/api/station/availability': {
          target: API_URL,
          changeOrigin: true,
        },
      },
    };
    return config;
  },
};

