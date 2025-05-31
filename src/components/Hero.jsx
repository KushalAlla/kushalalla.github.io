import { motion } from "framer-motion";
import myPhoto from "../assets/myPhoto.jpg";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="min-h-[80vh] py-10 scroll-mt-20 flex items-center justify-center snap-start"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <div className="max-w-screen-lg w-full px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        {/* Left side: Text */}
        <div className="flex-1 text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm Kushal Kumar Reddy Alla
          </motion.h1>

          <motion.p
            className="text-stone-400 max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full-stack Developer and master's graduate experienced in building
            scalable applications with ReactJS, ASP.NET, and NodeJS. Enhanced
            frontend efficiency by 20% and improved load times, fixed routing
            bugs through optimized server configurations. Aiming to leverage
            skills in agile development to deliver innovative solutions as a
            Full Stack Engineer.
          </motion.p>
        </div>

        {/* Right side: Profile Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src={myPhoto}
            alt="Kushal Reddy"
            className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-lg border-4 border-white shadow-md"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
