
async function fetchLastMeasure() {
  const resp = await kuzzle.document.search(
    'iot',
    'measures',
    { sort: { '_kuzzle_info.createdAt': 'desc' } }, {
      size: 1
    })

  console.log(resp)
  this.dataz = resp.hits[0]._id
}

async function subscribeToMeasures() {
  await kuzzle.realtime.subscribe('iot', 'measures', {}, (n) => {
    const notif = <DocumentNotification>n
    this.dataz = `temperature: ${notif.result._source.temperature.degree}`
  })
}


