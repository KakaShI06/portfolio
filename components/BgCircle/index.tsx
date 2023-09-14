import { motion } from 'framer-motion'

type Props = {}

const BgCircle = (props: Props) => {
  return (
    <motion.div
      className='relative flex justify-center items-center z-0'
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 1, 3, 2, 1],
        opacity: [0.4, 0.2, 0.6, 0.2, 0.8, 0.2, 1.0],
      }}
      transition={{ duration: 2.5 }}
    >
      <div className='absolute border border-[#000027] rounded-full w-[200px] h-[200px] mt-52 animate-ping' />
      <div className='absolute border border-[#000027] rounded-full w-[300px] h-[300px] mt-52' />
      <div className='absolute border border-[#000027] rounded-full w-[500px] h-[500px] mt-52' />

      <div className='absolute border border-[#004c94] rounded-full w-[600px] h-[600px] mt-52 opacity-30 animate-pulse' />
      <div className='absolute border border-[#000027] rounded-full w-[700px] h-[700px] mt-52' />
    </motion.div>
  )
}

export default BgCircle
