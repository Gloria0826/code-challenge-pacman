// @ts-ignore
import { Accordion, AccordionItem } from 'carbon-components-react';
import React, { Component } from 'react';

class AccordionExample extends Component {
    public render() {
        return (
            <div>
                <Accordion>
                    <AccordionItem
                        title='Section 1 title'
                        open={false}
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                    </AccordionItem>
                    <AccordionItem title="Section 2 title">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                    </AccordionItem>
                </Accordion>
            </div>
        )
    }
}

export default AccordionExample;