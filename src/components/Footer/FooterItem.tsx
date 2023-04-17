import Link from "next/link";
import React from "react";

import FooterItemType from "@/interfaces/footer-item";

import footerItemClasses from './FooterItem.module.css';

const FooterItem: React.FC<{ item: FooterItemType, children?: React.ReactElement }> = (props) => {
    const content = props.item.contents.map(content => {
        return (
            <li className={footerItemClasses["footer-content"]} key={content.content[0]}>
                {content.title && <span>{content.title}</span>}
                {content.content.map(ele => <Link key={ele} className={footerItemClasses["footer-links"]} href={content.link ? content.link : "/"}>{ele}</Link>)}
            </li>
        )
    });

    return (
        <div className={footerItemClasses["footer-item"]}>
            <h5>{props.item.heading}</h5>
            <ul>{content}</ul>
        </div>
    );
}

export default FooterItem;