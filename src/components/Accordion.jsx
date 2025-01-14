const Accordion = () => {
    return (
        <div>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    This is a Service
                </div>
                <div className="collapse-content">
                    <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit.
                        Ultricies adipiscing phasellus hac facilisis nostra
                        litora nascetur ipsum. Pellentesque porttitor viverra
                        metus lacus sem metus cubilia maximus purus. Montes
                        sodales vehicula eros efficitur aptent ullamcorper
                        ornare.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Here is a Service
                </div>
                <div className="collapse-content">
                    <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit.
                        Ultricies adipiscing phasellus hac facilisis nostra
                        litora nascetur ipsum. Pellentesque porttitor viverra
                        metus lacus sem metus cubilia maximus purus. Montes
                        sodales vehicula eros efficitur aptent ullamcorper
                        ornare.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Another Service Provided
                </div>
                <div className="collapse-content">
                    <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit.
                        Ultricies adipiscing phasellus hac facilisis nostra
                        litora nascetur ipsum. Pellentesque porttitor viverra
                        metus lacus sem metus cubilia maximus purus. Montes
                        sodales vehicula eros efficitur aptent ullamcorper
                        ornare.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
