let backendHost

const hostname = window && window.location && window.location.hostname

if (hostname === 'andersj.io') {
  backendHost = 'http://andersj.io'
} else {
  backendHost = 'http://localhost:3000'
}

export const HOST = backendHost
