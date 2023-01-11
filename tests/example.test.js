const cloudinaryConfig = require('./cloudinary.config');

test('cloudinary is properly imported and initialized', () => {
    const cloudinary = require('cloudinary');
    expect(cloudinary.v2).toBeDefined();
  });