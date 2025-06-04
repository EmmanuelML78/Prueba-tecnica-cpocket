// import { SwaggerDocument } from 'swagger-ui-express';

const swaggerDocument: any = {
  openapi: '3.0.0',
  info: {
    title: 'Chatbot API',
    version: '1.0.0',
    description: 'API REST para mensajes con IA',
  },
  paths: {
    '/api/messages': {
      get: {
        summary: 'Obtener historial de mensajes',
        responses: {
          '200': {
            description: 'Listado de mensajes',
          },
        },
      },
      post: {
        summary: 'Enviar mensaje y obtener respuesta de IA',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  content: { type: 'string' }
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Respuesta del chatbot',
          },
        },
      },
    },
  },
};

export default swaggerDocument;
