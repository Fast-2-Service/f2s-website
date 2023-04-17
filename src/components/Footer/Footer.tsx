import React from "react";

import ContentBox from "../UI/ContentBox";
import FooterItem from "./FooterItem";

import FooterItemType from "@/interfaces/footer-item";

import footerClasses from './Footer.module.css';

const FOOTER_ITEMS: FooterItemType[] = [
    {
        heading: "OUR PRODUCTS",
        contents: [
            {
                content: ["Home Appliances"],
                link: "",
            },
            {
                content: ["Quick Repair"],
                link: "",
            }
        ],
    },
    {
        heading: "CONTACT US",
        contents: [
            {
                title: "Customer Care",
                content: ["38018023800", "8238173892",],
            },
            {
                title: "Business Enquiry",
                content: ["example@example.com",]
            },
            {
                title: "Main Branch",
                content: ["123, abc road, udaipur, rajasthan - 313001",]
            }
        ]
    }
];

const Footer: React.FC = () => {

    return (
        <ContentBox className={footerClasses["footer-content-box"]}>
            {FOOTER_ITEMS.map(FOOTER_ITEM => <FooterItem key={FOOTER_ITEM.heading} item={FOOTER_ITEM} />)}
        </ContentBox>
    );
}

export default Footer;