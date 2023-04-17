import { Fragment } from "react";
import ContentBox from "../UI/ContentBox";

import contentClasses from './Content.module.css';

const Content = () => {
    return (
        <Fragment>
            <div className={contentClasses.content}>
                <ContentBox>
                    <img src="/stress-free.png" className={contentClasses.img} alt="A girl stress free" />
                </ContentBox>
                <ContentBox  className={contentClasses.contentBox}>
                    <div>
                        <h2>Fast2Service truly cares for you</h2>
                        <div className={contentClasses.advantages}>
                            <img src="/saveTime.png" alt="advantages image" />
                            <div>
                                <div className={contentClasses.advantage}>
                                    <h5>Save Time</h5>
                                    <cite className={contentClasses.cite}>One call is all it takes. We take care of the rest</cite>
                                </div>
                                <div className={contentClasses.advantage}>
                                    <h5>Save Money</h5>
                                    <cite className={contentClasses.cite}>Avoid heavy repair & replacement costs</cite>
                                </div>
                                <div className={contentClasses.advantage}>
                                    <h5>Save Hassles</h5>
                                    <cite className={contentClasses.cite}>No more running around repair centres in case things go wrong</cite>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentBox>
            </div>
            <ContentBox className={contentClasses["who-we-are"]}>
                <h2>Who We Are</h2>
                <p>We provide Assistance and Protection for the things you are most dependent on, in your everyday lives. Anytime. Anywhere.</p>
            </ContentBox>
        </Fragment>
    );

}

export default Content;