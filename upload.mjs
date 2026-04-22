import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
  cloud_name: 'tlh01', 
  api_key: '862894682325959', 
  api_secret: 'zxoLRFhRX67qR-PbkiGcmLnxl6U' 
});

const images = {
  hero: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80',
  employers: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80',
  about: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80',
  whyChooseUs: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
  logo: 'https://res.cloudinary.com/dx4o5vgvu/image/upload/q_auto/f_auto/v1776471058/Round_Logo_nczoh2.png'
};

async function upload() {
  for (const [key, url] of Object.entries(images)) {
    try {
      const res = await cloudinary.uploader.upload(url, { public_id: `tlh_global_${key}` });
      console.log(`${key}: ${res.secure_url}`);
    } catch (e) {
      console.error(`Error uploading ${key}:`, e.message);
    }
  }
}

upload();
