const GoogleMap = () => {
    return (
        <div>
            <h2>Our Location</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.5419936975595!2d-117.16334289999998!3d32.883835499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf8ad74f2ab7f%3A0x967f60c16c4d3774!2sJI%20Machine%20Company%2C%20Inc.!5e0!3m2!1sen!2sus!4v1736890145984!5m2!1sen!2sus"
                className="w-full h-96 sm:h-72 md:h-96 lg:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
