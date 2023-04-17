import React from "react";

import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Content from "../Content/Content";

const Main: React.FC = () => {
    return (
        <main>
            <ImageCarousel />
            <Content />
        </main>
    );
}

export default Main;