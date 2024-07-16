import { HeadphonesOutlined, PermIdentity, Search, ShoppingCartOutlined} from '@mui/icons-material';
import { green } from '@mui/material/colors';
export default function SmartCart() {
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
        
        <div><p className='font-black text-xl'>SmartCart</p></div>
        <div className='flex items-center space-x-3'> 
          <Search sx={{ fontSize: 35}}/> 
          <PermIdentity sx={{ fontSize: 35}}/> 
          <ShoppingCartOutlined sx={{ fontSize: 35}}/>
          <p>$0.00</p>
        </div>
    </div>
  )
}
