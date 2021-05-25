import { Backend } from 'kuzzle'

const app = new Backend('iot-world-finished')

app.start()
  .then(() => {
    app.log.info('Application started')
  })
  .catch(console.error)
