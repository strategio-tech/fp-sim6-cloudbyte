test('cloudinary can upload', async () => {
  const cloudinary = require('cloudinary');
  cloudinary.config({
    cloud_name: 'YOUR_CLOUD_NAME',
    api_key: 'YOUR_API_KEY',
    api_secret: 'YOUR_API_SECRET'
  });
  const result = await cloudinary.v2.uploader.upload('image.png', { public_id: 'image_id' });
  expect(result).toHaveProperty('public_id');
});