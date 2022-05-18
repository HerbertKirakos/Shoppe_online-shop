import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const ProductTabs = () => {
    const [active, setActive] = useState("desc1")

    return (
        <Tabs>
            <TabList className="md:flex gap-24 mb-10 border-b border-b-gray">
                <Tab className={`cursor-pointer ${active.includes('desc1') ? "border-b" : "" }`} onClick={() => setActive('desc1')}>
                    <h3 className="text-heading3 text-dark-gray font-normal mb-8 outline-none">
                        Description
                    </h3>
                </Tab>
                <Tab className={`cursor-pointer ${active.includes('desc2') ? "border-b" : "" }`} onClick={() => setActive('desc2')}>
                    <h3 className="text-heading3 text-dark-gray font-normal mb-8 outline-none">
                        Aditional information
                    </h3>
                </Tab>
                <Tab className={`cursor-pointer ${active.includes('desc3') ? "border-b" : "" }`} onClick={() => setActive('desc3')}>
                    <h3 className="text-heading3 text-dark-gray font-normal mb-8 outline-none">
                        Reviews(0)
                    </h3>
                </Tab>
            </TabList>
        
            <TabPanel>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, 
                    a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, 
                    in molestie diam bibendum sed.
                </p>
            </TabPanel>
            <TabPanel>
                <div className="flex items-start mb-2">
                    <h4 className="text-heading4 text-black font-medium mr-4">
                        Weight: 
                    </h4>
                    <span className="text-bodyLarge text-dark-gray font-normal">
                        0.3 kg
                    </span>
                </div>
                <div className="flex items-start mb-2">
                    <h4 className="text-heading4 text-black font-medium mr-4">
                        Dimentions:
                    </h4>
                    <span className="text-bodyLarge text-dark-gray font-normal">
                        15 x 10 x 1 cm
                    </span>
                </div>
                <div className="flex items-start mb-2">
                    <h4 className="text-heading4 text-black font-medium mr-4">
                        Colours:  
                    </h4>
                    <span className="text-bodyLarge text-dark-gray font-normal">
                        Black, Browns, White
                    </span>
                </div>
                <div className="flex items-start mb-2">
                    <h4 className="text-heading4 text-black font-medium mr-4">
                        Material: 
                    </h4>
                    <span className="text-bodyLarge text-dark-gray font-normal">
                        Metal
                    </span>
                </div>
            </TabPanel>
            <TabPanel>
                <h2>Any content</h2>
            </TabPanel>
        </Tabs>
    );
}
 