'use clien'
import * as motion from 'motion/react-client'
import '../../styles/chat.css'
import { IoIosSend } from "react-icons/io";

const bg2 = () => {
  return (
        <form>
            <input className='bar' type = 'text' autoFocus ></input>
              <div className='phew'>
              <motion.div animate={{
                scale:[1.2,1,1.2,1.2],
                rotate:[0,-30,0,-30,0],
                ease: 'easeInOut',
              }}
              transition={{
                ase: 'easeInOut',
                repeat: Infinity,
                duration: 10, times: [1, 1, 1]
              }}>
                <IoIosSend size={30} color='white' style={{padding:'5'}}/>
              </motion.div>
              </div>
        </form>
  )
}

export default bg2