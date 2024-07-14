import Test2_Vanilla from "@/components/test2/vanilla";
import Test2_React from "@/components/test2/react";
import Accordions from "@/components/accordion";
import TabMenus from "@/components/tabMenu";

const routePaths = ['/', '/test', '/test/vanilla', '/test/react', '/accordion', '/tabMenu'] as const;

export type ROUTE_PATH = typeof routePaths[number];

type BaseRoute = {
    key: ROUTE_PATH;
    link: ROUTE_PATH;
    name: string;
}
export type ParentRoute = BaseRoute & {
    children: ROUTE_PATH[];
}
export type ChildRoute = BaseRoute & {
    children: ((props: unknown) => JSX.Element) | null;
}
export type ROUTE = ParentRoute | ChildRoute;

export const routes: Record<ROUTE_PATH, ROUTE> = {
    '/': {
        key: '/',
        link: '/',
        name: 'root',
        children: ['/test', '/accordion', '/tabMenu'],
    },
    '/test': {
        key: '/test',
        link: '/test/vanilla',
        name: '테스트',
        children: ['/test/vanilla', '/test/react'],
    },
    '/test/vanilla': {
        key: '/test/vanilla',
        link: '/test/vanilla',
        name: 'Vanilla',
        children: Test2_Vanilla,
    },
    '/test/react': {
        key: '/test/react',
        link: '/test/react',
        name: 'React',
        children: Test2_React,
    },
    '/accordion': {
        key: '/accordion',
        link: '/accordion',
        name: '1. 아코디언',
        children: Accordions,
    },
    '/tabMenu': {
        key: '/tabMenu',
        link: '/tabMenu',
        name: '2. 탭메뉴',
        children: TabMenus,
    },
}

export const isParentRoute = (route: ROUTE): route is ParentRoute => Array.isArray(route.children);

export const gnbRootList = (routes['/'] as ParentRoute).children.map(r => routes[r]);




