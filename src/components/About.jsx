import React from 'react';

const About = () => {
    const skills = [
        "JavaScript (ES6+)", "React", "Tailwind CSS", "Java",
        "HTML5", "CSS3", "Git", "Responsive Design",
        "C", "C++", "Python", "Figma","Sql", "Mongodb"
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
                <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-blue-600/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-purple-600/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
                        About <span className="text-gradient">Me</span>
                    </h2>

                    <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/5 relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>

                        <p className="text-gray-300 text-lg leading-relaxed mb-10 font-light">
                            I am a passionate web developer with a keen eye for design and a drive for creating seamless digital experiences.
                            With a strong foundation in modern web technologies, I specialize in building responsive, user-friendly applications
                            that solve real-world problems. I enjoy turning complex ideas into elegant, efficient code.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                            Technical Skills
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-white/5 text-blue-300 rounded-lg text-sm font-medium border border-white/5 hover:bg-white/10 hover:border-blue-500/30 hover:text-blue-200 transition-all cursor-default hover:-translate-y-0.5"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
