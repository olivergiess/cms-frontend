export function JsonAPIConverter(response) {
  const payload = response.data.data

  return formatResources(payload)
}

function formatResources (resources) {
  if (resources instanceof Array) {
    const output = []

    for (var key in resources) {
      output.push(formatRelationships(resources[key]))
    }

    return output
  }

  return formatRelationships(resources)
}

function formatRelationships (resource) {
  const relations = resource.relationships

  for (var relation in relations) {
    let data = relations[relation].data

    if (data instanceof Array) {
      resource[relation] = []

      for (var key in data) {
        resource[relation].push(formatResources(data[key]))
      }
    }

    resource[relation] = formatResources(data)
  }

  delete resource.relationships

  return resource
}
