import authentication from '../routes/authentication.js'

const routes = [].concat(
  authentication
)

const plugin = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}

export default plugin
