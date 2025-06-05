'use client';

import Link from 'next/link';

const Hero = () => {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Prince Miller</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        A Software Engineer with experience at Google and Bloomberg, specializing in curriculum development,
                        front-end engineering, and creating accessible digital experiences. Currently focused on building
                        innovative solutions with React, TypeScript, and Python.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/projects"
                            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                        >
                            Contact Me <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero; 