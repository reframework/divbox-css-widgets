import { SuperButton } from '@src/components/Button'
import { hot } from 'react-hot-loader/root'
import { ErrorBoundary } from 'react-error-boundary'
import { App as AntApp } from 'antd'

export const App = () => {
  return (
    <AntApp>
      <ErrorBoundary fallbackRender={() => 'Whoops'}>
        <SuperButton />
      </ErrorBoundary>
    </AntApp>
  )
}

export default hot(App)
