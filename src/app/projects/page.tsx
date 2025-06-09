'use client';

import Navbar from '@/components/Navbar';
import PageTransition from '@/components/PageTransition';
import Link from 'next/link';

const Projects = () => {
    return (
        <PageTransition>
            <main className="min-h-screen bg-white dark:bg-gray-900">
                <Navbar />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Projects</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Portfolio Project */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Portfolio Website</h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    A modern, responsive portfolio website built with React, Next.js, and TypeScript to showcase
                                    professional experience and projects.
                                </p>
                                <div className="mb-4">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Technologies Used:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                                            React
                                        </span>
                                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                                            Next.js
                                        </span>
                                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                                            TypeScript
                                        </span>
                                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                                            Tailwind CSS
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Link
                                        href="https://github.com/pmiller5254/my-portfolio"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        View Source →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* SpeedRacer Project */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">SpeedRacer</h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    A full-stack application with Python-integrated front end and middleware, seamlessly
                                    integrated with a PostgreSQL/Django backend.
                                </p>
                                <div className="mb-4">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Key Features:</h3>
                                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                                        <li>User authentication and account creation</li>
                                        <li>PostgreSQL database integration</li>
                                        <li>Django backend implementation</li>
                                        <li>Responsive front-end design</li>
                                    </ul>
                                </div>
                                <div className="mb-4">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Technologies Used:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                                            Python
                                        </span>
                                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                                            Django
                                        </span>
                                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                                            PostgreSQL
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </PageTransition>
    );
};

export default Projects; 