import type { Route } from './+types/route';
import { StudioLoader } from './StudioLoader';

export async function loader({ context }: LoaderFunctionArgs) {
    return {
        a: 'tango charlie 1529'
    };
}

export default function Tango({ loaderData }: Route.ComponentProps) {
    return (
        <div>
            <StudioLoader />
        </div>
    );
}
