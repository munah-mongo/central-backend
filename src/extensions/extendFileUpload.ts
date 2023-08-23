const plaiceholder = require("plaiceholder");
const _ = require("lodash");

module.exports = {
  generatePlaceholder(strapi) {
    strapi.contentType("plugin::upload.file").attributes.placeholder = {
      type: "text",
    };

    strapi.plugin("upload").services.upload.uploadFileAndPersist =
      async function (fileData, { user }: any = {}) {
        const config = strapi.config.get("plugin.upload");

        const {
          getDimensions,
          generateThumbnail,
          generateResponsiveFormats,
          isSupportedImage,
        } = strapi.plugin("upload").service("image-manipulation");

        await strapi.plugin("upload").service("provider").upload(fileData);

        if (await isSupportedImage(fileData)) {
          const thumbnailFile = await generateThumbnail(fileData);

          if (thumbnailFile) {
            await strapi
              .plugin("upload")
              .service("provider")
              .upload(thumbnailFile);

            try {
              await plaiceholder
                .getPlaiceholder(thumbnailFile.url)
                .then(({ base64 }) => {
                  fileData.placeholder = base64;
                });
            } catch (e) {
              fileData.placeholder = "";
            }

            delete thumbnailFile.buffer;
            _.set(fileData, "formats.thumbnail", thumbnailFile);
          }

          const formats = await generateResponsiveFormats(fileData);

          if (Array.isArray(formats) && formats.length > 0) {
            for (const format of formats) {
              if (!format) {
                continue;
              }

              const { key, file } = format;

              strapi.plugin("upload").service("provider").upload(file);

              _.set(fileData, ["formats", key], file);
            }
          }

          const { width, height } = await getDimensions(fileData);

          _.assign(fileData, {
            provider: config.provider,
            width,
            height,
          });
        }

        return this.add(fileData, { user });
      };
  },
};
