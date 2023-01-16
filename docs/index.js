module.exports = {
  swagger: "2.0",
  info: {
    description:
      "Africastalking Nodejs USSD implementation, using africastalking version 0.5.4 by Aknjoroge",
    version: "3.1.0",
    title: "Africastalking Nodejs USSD",
    contact: {
      email: "alex@techkey.co.ke",
    },
    termsOfService: "https://techkey.co.ke/policies/",
  },
  host: "https://africastalking-nodejs-ussd.cyclic.app",
  basePath: "/api/v1",
  securityDefinitions: {},
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/api/v1/menu": {
      get: {
        summary: "Load USSD Menu",
        tags: ["Welcome"],
        operationId: "loadussd",
        deprecated: false,
        produces: ["application/json"],

        parameters: [
          {
            name: "Body",
            in: "body",
            required: true,
            description: "",
            schema: {
              $ref: "#/definitions/getMenuBody",
            },
          },
        ],
        responses: {
          200: {
            description: "",
            headers: {},
            schema: {
              $ref: "#/definitions/getMenuResponse",
            },
          },
        },
      },
      post: {
        summary: "Navigate the USSD Menu",

        tags: ["Register"],
        operationId: "navigateussd",
        deprecated: false,
        produces: ["application/json"],

        parameters: [
          {
            name: "Body",
            in: "body",
            required: true,
            description:
              "To navigate the USSD use a body property called `text`, Text values are divided by a * similar to how a mobile device works after dialing *144#",
            schema: {
              $ref: "#/definitions/navigationBody",
            },
          },
        ],
        responses: {
          200: {
            description: "",
            headers: {},
            schema: {
              $ref: "#/definitions/navigationesponse",
            },
          },
        },
      },
    },
    "/api/v1/account": {
      post: {
        summary: "My Account USSD Menu",

        tags: ["My Account"],
        operationId: "navigateussd",
        deprecated: false,
        produces: ["application/json"],

        parameters: [
          {
            name: "Body",
            in: "body",
            required: true,
            description: "Main menu presented only to registered users",
            schema: {
              $ref: "#/definitions/myaccountBody",
            },
          },
        ],
        responses: {
          200: {
            description: "",
            headers: {},
            schema: {
              $ref: "#/definitions/myaccountresponse",
            },
          },
        },
      },
    },
  },
  definitions: {
    getMenuBody: {
      title: "getMenuBody",
      example: {
        phoneNumber: "070000000",
      },
      type: "object",
      properties: {
        phoneNumber: {
          type: "string",
        },
      },
      required: ["token"],
    },
    getMenuResponse: {
      title: "getMenuResponse",
      example: `CON TechKey Cybernetics USSD Service. Please register to continue 1. Register 2. Exit TechKey Cybernetics`,
      type: "object",
      properties: {},
    },
    navigationBody: {
      title: "navigationBody",
      example: {
        phoneNumber: "070000000",
        text: "1*1*Alexander",
      },
      type: "object",
      properties: {
        phoneNumber: {
          type: "string",
        },
        text: {
          type: "string",
        },
      },
      required: ["token"],
    },
    navigationesponse: {
      title: "navigationesponse",
      example: `CON Enter your Id number`,
      type: "object",
      properties: {},
    },
    myaccountBody: {
      title: "myaccountBody",
      example: {
        phoneNumber: "070000000",
      },
      type: "object",
      properties: {
        phoneNumber: {
          type: "string",
        },
        text: {
          type: "string",
        },
      },
      required: ["token"],
    },
    myaccountresponse: {
      title: "myaccountresponse",
      example: `CON Hallo Alex. Welcome To Techkey Cybernetics USSD Application Select A Service Below 1. My Account 2. Send money 3. My Projects 4. Development Services 5. Client Assistance TechKey Cybernetics`,
      type: "object",
      properties: {},
    },
  },
  security: [],
  tags: [
    {
      // name: "Navigation",
    },
  ],
};
