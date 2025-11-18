import { Cloudinary } from '@cloudinary/url-gen';

export const cld = new Cloudinary({
  cloud: {
    cloudName: 'dett31xav'
  }
});

// Helper function to get optimized image
export const getOptimizedImage = (publicId: string) => {
  return cld
    .image(publicId)
    .format('auto')
    .quality('auto');
};
