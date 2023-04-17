type FooterItemContentType = {
    title?: string,
    content: string[],
    link?: string,
}

type FooterItemType = {
    heading: string,
    contents: FooterItemContentType[],
}

export default FooterItemType;