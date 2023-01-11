// Import Cloudinary module and any other necessary modules
const Cloudinary = require('cloudinary').v2;

test('Cloudinary is properly imported and initialized', () => {
    // Check if Cloudinary module is defined
    expect(Cloudinary).toBeDefined();

    // Initialize Cloudinary using your configuration
    Cloudinary.config({
        cloud_name: 'process.env.CLOUDINARY_NAME',
        api_key: 'process.env.CLOUDINARY_KEY',
        api_secret: 'process.env.CLOUDINARY_SECRET'
    });

    //Check if Cloudinary is properly initialized
    expect(Cloudinary.cloud_name).toEqual('process.env.CLOUDINARY_NAME');
});

