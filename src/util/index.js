import axios from "axios";

export const retrieveImage = async () => {
  let image = await axios.get("https://api.unsplash.com/photos/random?collections=3403106,3174571&content_filter=high",{
    headers: {
      Authorization:"Client-ID HZUbRLoQXpv28VMYdx1AyHymycZBsJJ9g2rQODcHBDA",
    }
  });
  console.log(image.data)
  // const totalImage = image.data.length;
  // const min = Math.ceil(0);
  // const max = Math.floor(totalImage);
  // const n = Math.floor(Math.random() * (max - min + 1)) + min;
  // image = image.data[n];
  return image.data;
};
