
async function fetchLastMeasure() {
  const resp = await kuzzle.document.search(
    'iot',
    'measures',
    { sort: { '_kuzzle_info.createdAt': 'desc' } }, {
      size: 1
    })

  this.dataz = resp.hits[0]._id
}

async function subscribeToMeasures() {
  await kuzzle.realtime.subscribe('iot', 'measures', {}, (n) => {
    const notif = <DocumentNotification>n
    this.dataz = `temperature: ${notif.result._source.temperature.degree}`
  })
}

async function fetchLastPosition() {
  const resp = await kuzzle.document.search(
    'iot',
    'measures',
    {
      query: {
        equals: {
          type: 'position'
        }
      },
      sort: { '_kuzzle_info.createdAt': 'desc' } }, {
      size: 1, lang: 'koncorde'
    })

  this.marker = resp.hits[0]._source.position.pos
}

async function subscribeToPositions() {
  await kuzzle.realtime.subscribe('iot', 'measures', {
    equals: {
      type: 'position'
    }
  }, (n) => {
    const doc = n as DocumentNotification
    this.marker = doc.result._source.position.pos
  })
}
