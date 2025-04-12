'use clien'
import * as motion from 'motion/react-client'
import { IoIosSend } from "react-icons/io";

const bg2 = () => {
  return (
    <div >
        <form>
            <input type = 'text' autoFocus style={{display:'flex', 
              justifyContent:'flex-end'}}>
              </input>
              <motion.div style={{
                height:'40px',
                width:'40px',
                backgroundColor:'#1edefe',
                zIndex:'4',
                cursor:'pointer',
                borderRadius:50
              }}>
                <IoIosSend size={30} color='white' style={{padding:'5'}}/>
              </motion.div>
        </form>
    </div>
  )
}

export default bg2