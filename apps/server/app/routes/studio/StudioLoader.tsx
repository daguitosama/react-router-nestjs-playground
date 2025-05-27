import { lazy, useMemo } from 'react';

export function StudioLoader() {
    const Studio = useMemo(() => lazy(() => import('./Studio.js')), []);
    return (
        <div>
            <Studio />
        </div>
    );
}
