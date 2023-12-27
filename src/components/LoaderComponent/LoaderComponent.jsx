import { helix } from 'ldrs'

import React from 'react'

const LoaderComponent = () => {
    helix.register()
  return <l-helix size="45" speed="2.5" color="black"></l-helix>
}

export default LoaderComponent