import axios from "axios";
import request from "./request";

declare const process: {
  env: {
    CLOUDINARY_UPLOAD_PRESET: string;
    CLOUDINARY_CLOUD_NAME: string;
  };
};

const UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET;
const UPLOAD_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;

export default async function uploadImage(file: File) {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("folder", "hamsters");

  const res = await request(
    `https://api.cloudinary.com/v1_1/${UPLOAD_CLOUD_NAME}/image/upload`,
    {
      method: 'POST',
      data: formData
    }
  );
  return res;
}
