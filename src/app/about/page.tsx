'use client';

import Navbar from '@/components/Navbar';

const About = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="space-y-16">
                    {/* Skills Section */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Languages</h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>TypeScript</li>
                                    <li>Python3</li>
                                    <li>Dart</li>
                                    <li>Kotlin</li>
                                    <li>C#</li>
                                    <li>Java</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Frameworks</h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>Next.js</li>
                                    <li>Vue.js</li>
                                    <li>Node.js</li>
                                    <li>Django</li>
                                    <li>Flask</li>
                                    <li>Spring Boot</li>
                                    <li>MERN/MEAN</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Certifications</h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>AutoDesk Inventor</li>
                                    <li>AutoCAD</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Professional Experience</h2>
                        <div className="space-y-12">
                            <div className="border-l-4 border-blue-600 pl-4">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Code Next Curriculum Manager</h3>
                                <p className="text-gray-600 dark:text-gray-300">Google (via C-Suite Coach) • April 2023 - April 2024</p>
                                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                                    <li>Developed and launched comprehensive Python courses, ensuring accessible and engaging learning pathways</li>
                                    <li>Designed lesson plans with diverse learning pathways for consistent user experience</li>
                                    <li>Led cross-team communication and introduced 100+ underrepresented students to engineering</li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-blue-600 pl-4">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">JavaScript Curriculum Developer</h3>
                                <p className="text-gray-600 dark:text-gray-300">Google (Via Adecco) • October 2022 - April 2023</p>
                                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                                    <li>Facilitated migration from React Native to Flutter framework</li>
                                    <li>Developed front-end content for over 8 million users</li>
                                    <li>Wrote JS scripts to parse Abstract Syntax Trees of user input</li>
                                    <li>Led biweekly testing sessions during design system migration</li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-blue-600 pl-4">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Black in Tech Lab Fellow</h3>
                                <p className="text-gray-600 dark:text-gray-300">Bloomberg LP • June 2022 - July 2022</p>
                                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                                    <li>Selected as one of 22 engineers for intensive program</li>
                                    <li>Developed Python-based portfolio manager</li>
                                    <li>Engaged in AI, NLP, and diversity discussions</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Education Section */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Education</h2>
                        <div className="space-y-6">
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">General Assembly</h3>
                                <p className="text-gray-600 dark:text-gray-300">Software Engineering Certification • June 2021</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">New York City College of Technology</h3>
                                <p className="text-gray-600 dark:text-gray-300">Bachelor of Technology, Electrical Engineering • 2014 - 2019</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default About; 