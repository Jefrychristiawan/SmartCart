import { HeadphonesOutlined, PermIdentity, Search, ShoppingCartOutlined} from '@mui/icons-material';
import { green } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext"
export default function SmartCart() {
  const { user } = useAuthContext()
  return (
    <div className='flex justify-between px-12 py-6 items-center'>
        {/* <div><HeadphonesIcon /></div> */}
        <div className='flex items-center'>
          <HeadphonesOutlined color="success" sx={{ fontSize: 35,color:green[600] }}/>
          <div className="flex flex-col">
            <p className='text-gray-500 font-bold'>CALL US</p>
            <p className='font-bold'>+62 1234 5679</p>
          </div>
        </div>
        
        <div><p className='font-black text-3xl'>SmartCart</p></div>
        <div className='flex items-center space-x-3'> 
          <Search sx={{ fontSize: 35}}/>
          <ShoppingCartOutlined sx={{ fontSize: 35}}/> 
          {!user && <Link to="/login">Login</Link>}
          {!user && <Link to="/register">Register</Link>}
          {user && <Link to="/profile"><PermIdentity sx={{ fontSize: 35}}/> </Link>}
          
          {user && <p>{user.balance}</p>}
        </div>
    </div>
  )
}
