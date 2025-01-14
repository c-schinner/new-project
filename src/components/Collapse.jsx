const Collapse = () => {
    return (
        <div>
            <div
                tabIndex={0}
                className="collapse collapse-arrow border-base-300 bg-base-200 border"
            >
                <div className="collapse-title text-xl font-medium">
                    Here is something to read!
                </div>
                <div className="collapse-content">
                    <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit.
                        Quam imperdiet metus curabitur ullamcorper vitae class
                        potenti pretium.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Collapse;
