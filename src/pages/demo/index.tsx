import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button } from 'antd'

const Demo = () => {
  const navigate = useNavigate()
  const { userInfo } = useSelector((state) => ({
    userInfo: state.global.userInfo,
  }))

  console.log('userInfo', userInfo)

  return (
    <div className="text-neutral-sub-title">
      <Button
        onClick={() => {
          navigate('/login')
        }}
      >
        Demo Page Click
      </Button>
    </div>
  )
}

export default Demo
