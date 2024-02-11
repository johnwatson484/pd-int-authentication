export default [{
  method: 'GET',
  path: '/auth/.well-known/openid-configuration',
  options: {
    tags: ['api'],
    description: 'Get OpenID Configuration'
  },
  handler: (request, h) => {
    return h.response('OpenID Configuration')
  }
}, {
  method: 'GET',
  path: '/auth/oauth/authorize',
  options: {
    tags: ['api'],
    description: 'Initiate OAuth 2.0 authorization flow'
  },
  handler: (request, h) => {
    return h.response('OAuth 2.0 authorization flow')
  }
}, {
  method: 'POST',
  path: '/auth/oauth/authorize',
  options: {
    tags: ['api'],
    description: 'Handle OAuth 2.0 authorization flow'
  },
  handler: (request, h) => {
    return h.response('Handled OAuth 2.0 authorization flow')
  }
}, {
  method: 'POST',
  path: '/auth/oauth/token',
  options: {
    tags: ['api'],
    description: 'Get an access token'
  },
  handler: (request, h) => {
    return h.response('Access token')
  }
}, {
  method: 'GET',
  path: '/auth/discovery/keys',
  options: {
    tags: ['api'],
    description: 'Retrieve JSON Web Key Set'
  },
  handler: (request, h) => {
    return h.response('JWK Set')
  }
}, {
  method: 'POST',
  path: '/auth/signout',
  options: {
    tags: ['api'],
    description: 'End the session and sign out the user'
  },
  handler: (request, h) => {
    return h.response('Session ended')
  }
}]
