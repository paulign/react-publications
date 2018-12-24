import CreatePublication from "./views/CreatePublication";
import PublicationsList from "./views/PublicationsList";
import PublicationDetails from "./views/PublicationDetails";

const routes = [
    { path: "/publications", showInNav: true, exact: true, title: 'Publications', component: PublicationsList },
    { path: "/publications/:id", title: 'Publication Details', component: PublicationDetails },
    { path: "/create-publication", showInNav: true, title: 'Create New', component: CreatePublication },
    { redirect: true, redirectTo: "/create-publication" },
    //{ path: "/", private: true, name: "Home", component: Dashboard }
];

export default routes;