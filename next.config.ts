const nextConfig = {
  output: 'export',  // Для статического экспорта
  images: {
    unoptimized: true,
  },
  basePath: '/my-kindergarten',  // Путь для деплоя на GitHub Pages
};

module.exports = nextConfig;
