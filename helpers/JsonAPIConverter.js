export function JsonAPIConverter (response) {
  const payload = response.data.data

  return formatResources(payload)
}

function formatResources (resources) {
  if (Array.isArray(resources)) {
    const output = []

    for (const key in resources) {
      output.push(formatRelationships(resources[key]))
    }

    return output
  }

  return formatRelationships(resources)
}

function formatRelationships (resource) {
  const relations = resource.relationships

  for (const relation in relations) {
    const data = relations[relation].data

    if (Array.isArray(data)) {
      resource[relation] = []

      for (const key in data) {
        resource[relation].push(formatResources(data[key]))
      }
    }

    resource[relation] = formatResources(data)
  }

  delete resource.relationships

  return resource
}
