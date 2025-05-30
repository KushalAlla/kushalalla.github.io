import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const Experience = () => {
    return (
        <motion.section
            id="experience"
            className="min-h-screen py-24 scroll-mt-20 snap-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h2
                className="text-3xl font-bold mb-6 text-white"
                variants={itemVariants}
            >
                Experience
            </motion.h2>

            <div className="space-y-12">
                {/* Job 1 */}
                <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-white">
                        Software Engineer — NIIT Limited
                    </h3>
                    <p className="text-stone-400">Aug 2021 – Aug 2022</p>
                    <ul className="list-disc list-inside text-stone-400 mt-2 space-y-1">
                        <li>Designed and developed scalable full-stack web applications using ReactJS, NodeJS, ASP.NET, and SQL within a 3-layer architecture, contributing to platform stability as part of an 8-member team.</li>
                        <li>Created reusable React components for client-side modules, streamlining frontend efficiency by 20% and standardizing UI components to reduce code redundancy.</li>
                        <li>Deployed applications via IIS and optimized server configurations, resulting in 15% faster load times and seamless environment transitions.</li>
                        <li>Automated a few manual tasks with Windows Services, ASP.NET framework, and APIs, utilizing log files for cross-verification, reducing manual labor by 6 hours weekly and enhancing operational efficiency by 15%.</li>
                        <li>Maintained codebase using TFS for version control, ensuring team collaboration and reducing integration conflicts across development cycles.</li>
                        <li>Conducted automated API testing with Postman, improving endpoint reliability and reducing post-deployment bugs by 20%.</li>
                        <li>Partnered with cross-functional teams to deliver 10+ features on time, ensuring code quality via peer reviews and performance benchmarks.</li>
                    </ul>
                </motion.div>

                {/* Job 2 */}
                <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-white">
                        Software Developer Intern — Crimson Angle Pvt Ltd
                    </h3>
                    <p className="text-stone-400">Dec 2019 – Mar 2020</p>
                    <ul className="list-disc list-inside text-stone-400 mt-2 space-y-1">
                        <li>Developed frontend and backend modules using HTML, CSS, JS, Python, and MySQL, delivering 2 new features and improving platform functionality by 25%.</li>
                        <li>Conducted unit and integration testing with Jest and Mocha, resolving over 30% of UI and backend issues prior to release.</li>
                        <li>Versioned source code using GitHub and Git for team-based collaboration and rollback support.</li>
                    </ul>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Experience;
