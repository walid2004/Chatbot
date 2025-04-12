import * as motion from "motion/react-client"

export default function Keyframes() {
    return (
        <motion.div className="bruh"
            animate={{
                scale: [1, 2, 4, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
                duration: 2,
                ease: "easeOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
            }}
            style={fox}
        />
    )
}

/**
 * ==============   Styles   ================
 */

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#95e5f5",
    borderRadius: 5,
}
const fox = {
    width: 100,
    height: 100,
    backgroundColor: "#95e5f5",
    borderRadius: 5,
}