import { Backend, KuzzleRequest } from 'kuzzle'

const app = new Backend('iot-world-finished')

const collections = {
  iot: {
    measures: {
      properties: {
        type: { type: 'keyword' },

        device: { type: 'keyword' },

        temperature: {
          degree: { type: 'keyword' },
          timestamp: { type: 'date' }
        }
      }
    }
  }
};

app._support.mappings = collections;

app.controller.register('payloads', {
  actions: {
    temperature: {
      handler: async (request: KuzzleRequest) => {
        const deviceEUI = request.getBodyString('deviceEUI');
        const degree = request.getBodyNumber('degree');

        const measure = await app.sdk.document.create('iot', 'measures', {
          type: 'temperature',
          device: deviceEUI,
          temperature: {
            degree,
            timestamp: Date.now()
          }
        });

        return measure;
      },
      http: [{ verb: 'post', path: 'payloads/temperature' }],
    }
  }
});

app.start()
  .then(() => {
    app.log.info('Application started');
  })
  .catch(console.error)
