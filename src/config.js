export const endpoint = `http://localhost:3000/api/graphql`;
export const cors = {
  async rewrites() {
    return [
      {
        source: '/api/graphql:path*',
        destination: 'http://localhost:3000/:path*',
      },
    ];
  },
};
