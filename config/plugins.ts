module.exports = ({ env }) => {
  return {
    
    "strapi-blurhash": {
      enabled: true,
      config: {
        regenerateOnUpdate: true,
      },
    },

    placeholder: {
      enabled: true,
      config: {
        size: 10,
      },
    },



    // chartbrew: true,
    // "cookie-manager": {
    //   enabled: true,
    //   config: {
    //     localization: true,
    //   },
    // },

    // //   lllll
    // "encryptable-field": {
    //   enabled: true,
    // },
    // "file-system": {
    //   enabled: true,
    // },
    // // llll

    // "strapi-plugin-fluentc": {
    //   enabled: true,
    //   config: {
    //     apiKey: "key",
    //     translatedFieldTypes: [
    //       "string",
    //       "text",
    //       "richtext",
    //       "component",
    //       "dynamiczone",
    //     ],
    //     translateRelations: true,
    //     glossaryId: "customGlossary",
    //   },
    // },
    // "google-auth": {
    //   enabled: true,
    // },

    // // llll




    "location-field": {
      enabled: true,
      config: {
        fields: ["photo", "rating"], // optional
        // You need to enable "Autocomplete API" and "Places API" in your Google Cloud Console
        googleMapsApiKey: env("GOOGLE_MAPS_API_KEY"),
        // See https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest
        autocompletionRequestOptions: {},
      },
    },
    "location-plugin": {
      enabled: true,
    },
    "entity-notes": {
      enabled: true,
    },
    "random-sort": {
      enabled: true,
    },




    // "request-id": {
    //   enabled: true,
    //   config: {
    //     correlationIdHeader: "X-Amzn-Trace-Id", // default: "X-Correlation-Id".
    //   },
    // },



    seo: {
      enabled: true,
    },
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          article: {
            field: "slug",
            references: "title",
          },
        },
      },
    },





    // translate: {
    //   enabled: true,
    //   config: {
    //     // Add the name of your provider here (for example 'deepl' for strapi-provider-translate-deepl or the full package name)
    //     provider: "libretranslate",
    //     providerOptions: {
    //       // your API key - required and wil cause errors if not provided
    //       apiKey: "key",
    //       // api url - required
    //       apiUrl: "https://your.libretranslate.instance",
    //       // maximum number of requests per minute - optional, default is `undefined` => no limit
    //       apiMaxRPM: 60,
    //       // maximum number of chars per request - optional, default is `undefined` => no limit
    //       apiMaxChars: 1234,
    //       // maximum number of texts per request
    //       apiMaxTexts: 55,
    //       // manually overwrite the Strapi Locale to LibreTranslate Locale mapping.
    //       // default is the string before the `-` character for every locale
    //       localeMap: {
    //         "en-US": "de",
    //         // Your provider might define some custom options like an apiKey
    //       },
    //     },
    //     // Which field types are translated (default string, text, richtext, components and dynamiczones)
    //     // Either string or object with type and format
    //     // Possible formats: plain, markdown, html (default plain)
    //     translatedFieldTypes: [
    //       "string",
    //       { type: "text", format: "plain" },
    //       { type: "richtext", format: "markdown" },
    //       "component",
    //       "dynamiczone",
    //     ],
    //     // If relations should be translated (default true)
    //     translateRelations: true,
    //   },
    // },
    // "google-maps": {
    //   enabled: true,
    //   //resolve: "./plugins/strapi-google-maps",
    // },
    // "vercel-deploy": {
    //   enabled: true,
    // },

    // //llll
  };
};
