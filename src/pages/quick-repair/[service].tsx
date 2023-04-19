import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

import crumb from "@/interfaces/crumb";

import { useRouter } from "next/router";

const QuickRepair = () => {
    const router = useRouter();
    const { service } = router.query;
    
    const CRUMBS: crumb[] = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: String(service),
            link: `/quick-repair/${service}`,
        }
    ];



    return (
        <header>
            <BreadCrumb crumbs={CRUMBS}/>
        </header>
    );
}

export default QuickRepair;