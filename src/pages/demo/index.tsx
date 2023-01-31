import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Demo = () => {
  const navigate = useNavigate()
  const { userInfo } = useSelector((state) => ({
    userInfo: state.global.userInfo,
  }))

  console.log('userInfo', userInfo)

  return (
    <div className="text-neutral-sub-title">
      <button
        onClick={() => {
          navigate('/login')
        }}
      >
        Demo Page Click
      </button>
    </div>
  )
}

export default Demo
