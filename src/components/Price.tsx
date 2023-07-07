import { Link } from "react-router-dom"
import Button from "./Button"

const Price = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center '>
        <img src="https://img.icons8.com/?size=2x&id=slhcjKMvJYCM&format=png" alt="boy face palm" className="my-5" />
       <p> Sorry, sales are closed for now. Please check back later.</p>
<div className="w-1/3 flex justify-center my-4">
<Button>
    <Link to='/'>Go back home</Link>
</Button>
</div>

    </div>
  )
}

export default Price