'use clien'
import * as motion from 'motion/react-client'
import { IoIosSend } from "react-icons/io";

const bg2 = () => {
  return (
    <div >
        <form>
            <input type = 'text' autoFocus >
              </input>
              <div className='sendingbutton'>
              <motion.div animate={{
                scale:[1.2,1,1.2,1.2],
                rotate:[0,-40,0,-30,0],
                ease: 'easeInOut',
              }}
              transition={{
                ase: 'easeInOut',
                repeat: Infinity,
                duration: 3, times: [1, 1, 1]
              }}>
                <IoIosSend size={30} color='white' style={{padding:'5'}}/>
              </motion.div>
              </div>
        </form>
    </div>
  )
}

export default bg2