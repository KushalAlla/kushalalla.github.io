import { motion } from "framer-motion";
import Snowpic from "../assets/Snowpic.jpg";

const Education = () => {
  return (
    <motion.section
      id="education"
      className="min-h-[80vh] py-10 scroll-mt-20 flex items-center justify-center snap-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
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
        <div className="flex-1 text-left">
          <motion.h2
            className="text-3xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Education
          </motion.h2>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white">
              M.S. in Cybersecurity & Networks
            </h3>
            <p className="text-stone-400">University of New Haven, 2024</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white">
              Bachelor's in Computer Science
            </h3>
            <p className="text-stone-400">NIIT University, 2021</p>
          </motion.div>
        </div>

        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img
            src={Snowpic}
            alt="Kushal Reddy"
            className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-lg border-4 border-white shadow-md"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
