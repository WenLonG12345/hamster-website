// const cloudinary = require("cloudinary").v2;

declare const window: any;

export default function showUploadWidget(tags: string[] = []) {
  window.cloudinary.openUploadWidget(
    {
      cloudName: "teo1996",
      uploadPreset: "xglfjbxj",
      sources: ["local", "camera", "instagram", "facebook"],
      showAdvancedOptions: false,
      maxFiles: 20,
      tags,
      folder: 'hamsters',
      cropping: false,
      multiple: true,
      defaultSource: "local",
      styles: {
        palette: {
          window: "#ffffff",
          sourceBg: "#f4f4f5",
          windowBorder: "#90a0b3",
          tabIcon: "#000000",
          inactiveTabIcon: "#555a5f",
          menuIcons: "#555a5f",
          link: "#0433ff",
          action: "#339933",
          inProgress: "#0433ff",
          complete: "#339933",
          error: "#cc0000",
          textDark: "#000000",
          textLight: "#fcfffd",
        },
        fonts: {
          default: null,
          "'Poppins', sans-serif": {
            url: "https://fonts.googleapis.com/css?family=Poppins",
            active: true,
          },
        },
      },
    },
    (err: Error, info: any) => {
      if (!err) {
        console.log("Upload Widget event - ", info);
      }
    }
  );
}
