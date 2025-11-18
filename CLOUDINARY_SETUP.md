# Cloudinary Setup Guide

## Your Cloudinary Details
- **Cloud Name**: dett31xav
- **API Key**: 974985169472495

## Step-by-Step Image Upload

### 1. Go to Cloudinary Media Library
Visit: https://console.cloudinary.com/console/c-dett31xav/media_library

### 2. Upload Images with Correct Names

⚠️ **IMPORTANT**: When uploading, remove spaces and special characters from filenames!

#### Root Level Images (Upload to root folder)
Upload these images with these exact Public IDs:
- `background.png` → **background**
- `bbf1.png` → **bbf1**
- `bbf2.png` → **bbf2**
- `blue.png` → **blue**
- `blue2.png` → **blue2**

#### Celebrity Images (Create folder: celebs/)
1. Click "Create Folder" → Name it "celebs"
2. Upload all celebrity images with these Public IDs:
   - `Celebrity 1.png` → **celebs/Celebrity_1**
   - `Celebrity 2.png` → **celebs/Celebrity_2**
   - `Celebrity 3.png` → **celebs/Celebrity_3**
   - ... continue for all 12 celebrities
   - `Celebrity 12.png` → **celebs/Celebrity_12**

#### Event Variant Images (Create folder: Varients/)
1. Click "Create Folder" → Name it "Varients"
2. Upload all variant images with these Public IDs:
   - `Varient (1).png` → **Varients/Varient_1**
   - `Varient (2).png` → **Varients/Varient_2**
   - `Varient (3).png` → **Varients/Varient_3**
   - ... continue for all 23 variants
   - `Varient (23).png` → **Varients/Varient_23**

### 3. How to Set Public ID During Upload

When uploading in Cloudinary:
1. Click the "Upload" button
2. Select your file
3. Before completing upload, click "More options"
4. In the "Public ID" field, enter the exact name (e.g., "background", "celebs/Celebrity_1")
5. Click "Upload"

### 4. Verify Upload

After uploading, check that the URL structure matches:
- `https://res.cloudinary.com/dett31xav/image/upload/background`
- `https://res.cloudinary.com/dett31xav/image/upload/celebs/Celebrity_1`
- `https://res.cloudinary.com/dett31xav/image/upload/Varients/Varient_1`

### 5. Test Your Website

After uploading all images:
```bash
npm run dev
```

Visit http://localhost:5173 and verify all images load quickly!

## Benefits You'll Get

✅ **Automatic Image Optimization**: Cloudinary converts images to WebP format automatically
✅ **CDN Delivery**: Images served from nearest CDN location
✅ **Lazy Loading**: Built-in with `@cloudinary/react`
✅ **Responsive Images**: Auto-adjusts quality based on device
✅ **Fast Loading**: 50-80% faster than regular hosting

## Troubleshooting

If images don't load:
1. Check Public ID exactly matches the code
2. Ensure folders are created (celebs/, Varients/)
3. Check Cloud Name is "dett31xav" in `src/config/cloudinary.ts`
4. Open browser console for any errors

## Alternative: Bulk Upload via CLI

If you have many images, use Cloudinary CLI:

```bash
npm install -g cloudinary-cli
cloudinary config set cloud_name dett31xav
cloudinary config set api_key 974985169472495
cloudinary config set api_secret kI1X_yPXi0F0s6ehGaWYfzlpp_U

# Upload all images at once
cloudinary uploader upload_dir public/ --folder root --use_filename
```

---

**Need Help?** Check Cloudinary docs: https://cloudinary.com/documentation
