export function JsonAPIConverter(response) {
    const payload =  response.data
    let result = [];

    if(payload instanceof Array) {
        for(var key in payload) {
            result.push(formatResource(payload[key]))
        }
    } else {
        result.push(formatResource(payload));
    }

    return result;
}

function formatResource(resource) {
    for (var relationship in resource.relationships) {
        resource[relationship] = resource.relationships[relationship].data
    }

    return resource;
}