import { Suspense } from 'react'
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom'
import Main from '~containers/Main'

function Routes() {
  return (
    <Suspense fallback={<span>Loading ...</span>}>
      <ReactRouterRoutes>
        <Route path="" element={<Main />} />
      </ReactRouterRoutes>
    </Suspense>
  )
}

export default Routes
