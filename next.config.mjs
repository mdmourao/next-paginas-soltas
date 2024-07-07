// next.config.mjs
import { createProxyMiddleware } from 'http-proxy-middleware';

const GIRA_API_URL = 'https://opendata.emel.pt/cycling/gira/station/availability';
const IPMA_API_URL = 'https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1010500.json';

export default {
  async rewrites() {
    return [
      {
        source: '/api/gira/availability',
        destination: GIRA_API_URL,
      },
      {
        source: '/api/ipma/lisboa',
        destination: IPMA_API_URL,
      },
    ];
  },
  webpack(config) {
    config.devServer = {
      proxy: {
        '/api/station/availability': {
          target: GIRA_API_URL,
          changeOrigin: true,
        },
        '/api/ipma/lisboa': {
          target: IPMA_API_URL,
          changeOrigin: true,
        },
      },
    };
    return config;
  },
};

