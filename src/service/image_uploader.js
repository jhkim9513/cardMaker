class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "jw3c1bvg");
    const result = await fetch(
      // 참고사이트 https://cloudinary.com/documentation/upload_images#uploading_with_a_direct_call_to_the_rest_api

      // https://api.cloudinary.com/v1_1/<cloud name>/<resource_type>/upload
      "https://api.cloudinary.com/v1_1/drtnxojxe/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
