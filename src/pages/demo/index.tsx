import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import history from '@/router/history'

const Demo = () => {
  const location = useLocation()
  const { userInfo } = useSelector((state) => ({
    userInfo: state.global.userInfo,
  }))

  console.log('userInfo', userInfo)

  console.log('query', location)

  return (
    <div className="text-neutral-sub-title">
      Demo Page
      <button
        onClick={() => {
          history.push({
            pathname: '/login',
            query: {
              test1: 1,
              test2: 2,
            },
          })
        }}
      >
        click
      </button>
    </div>
  )
}

export default Demo
