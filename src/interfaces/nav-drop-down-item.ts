export type DropDownOptions = {
    name: string,
    link: string,
}

type DropDownItem = {
    name: string,
    description: string,
    options: DropDownOptions[],
}

export default DropDownItem;
