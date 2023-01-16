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
  host: "localhost:5501",
  basePath: "/api/v1",
  securityDefinitions: {},
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/auth/oauth/google/signup": {
      post: {
        summary: "Signup with google",
        tags: ["oAuth"],
        operationId: "Signupwithgoogle",
        deprecated: false,
        produces: ["application/json"],
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: false,
            default: "Bearer {token}",
            type: "string",
          },
          {
            name: "Body",
            in: "body",
            required: true,
            description: "",
            schema: {
              $ref: "#/definitions/SignupwithgoogleRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "",
            headers: {},
          },
        },
      },
    },

    "/file/public": {
      get: {
        summary: "get all",
        tags: ["files public"],
        operationId: "Getgetall3",
        deprecated: false,
        produces: ["application/json"],
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: false,
            default: "Bearer {token}",
            type: "string",
          },
          {
            name: "client_id",
            in: "header",
            required: true,
            type: "string",
            description: "",
          },
          {
            name: "Origin",
            in: "header",
            required: true,
            type: "string",
            description: "",
          },
        ],
        responses: {
          200: {
            description: "",
            headers: {},
          },
        },
      },
      post: {
        summary: "create public file",
        tags: ["files public"],
        operationId: "createpublicfile",
        deprecated: false,
        produces: ["application/json"],
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: false,
            default: "Bearer {token}",
            type: "string",
          },
          {
            name: "client_id",
            in: "header",
            required: true,
            type: "string",
            description: "",
          },
          {
            name: "Origin",
            in: "header",
            required: true,
            type: "string",
            description: "",
          },
          {
            name: "Body",
            in: "body",
            required: true,
            description: "",
            schema: {
              $ref: "#/definitions/createpublicfilerequest",
            },
          },
        ],
        responses: {
          200: {
            description: "",
            headers: {},
          },
        },
      },
    },
  },
  definitions: {
    SignupwithgoogleRequest: {
      title: "SignupwithgoogleRequest",
      example: {
        token: "token",
      },
      type: "object",
      properties: {
        token: {
          type: "string",
        },
      },
      required: ["token"],
    },
  },
  security: [],
  tags: [
    {
      name: "oAuth",
    },
  ],
};
