/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/assets/Resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Resume.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
