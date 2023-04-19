import { FC } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import breadCrumbClasses from "./BreadCrumb.module.css";

import crumb from '@/interfaces/crumb';

const BreadCrumb: FC<{ crumbs: crumb[] }> = (props) => {
    return (
        <Breadcrumb className={breadCrumbClasses["bread-crumb"]}>
            {props.crumbs.map((crumb, idx, crumbs) => {
                let name = crumb.name.split("-");

                name = name.map(ele => {
                    const lower = ele.toLowerCase();
                    return ele.charAt(0).toUpperCase() + lower.slice(1);
                });

                if (idx === crumbs.length - 1) {
                    return <Breadcrumb.Item key={crumb.name} active>{name.join(" ")}</Breadcrumb.Item>
                }
                
                return <Breadcrumb.Item key={crumb.name} href={crumb.link}>{name.join(" ")}</Breadcrumb.Item>
            })} 
        </Breadcrumb>
    );
}

export default BreadCrumb;