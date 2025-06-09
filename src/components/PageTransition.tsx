'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

const PageTransition = memo(({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                duration: 0.3
            }}
        >
            {children}
        </motion.div>
    );
});

PageTransition.displayName = 'PageTransition';

export default PageTransition; 