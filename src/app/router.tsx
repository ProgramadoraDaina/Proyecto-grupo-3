import { createBrowserRouter } from 'react-router';
import { RootLayout } from "@/shared/components/layout/RootLayout";
import { HomePage } from "@/pages/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: HomePage },
        ],
    },
]);


