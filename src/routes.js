import CreatePublication from "./views/CreatePublication";
import PublicationsList from "./views/PublicationsList";

const routes = [
    { path: "/publications", showInNav: true, title: 'Publications', component: PublicationsList },
    { path: "/create-publication", showInNav: true, title: 'Create New', component: CreatePublication },
    { redirect: true, redirectTo: "/create-publication" },
    //{ path: "/", private: true, name: "Home", component: Dashboard }
];

export default routes;