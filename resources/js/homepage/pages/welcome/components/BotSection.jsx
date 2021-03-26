function BotSection() {
    return (
        <div className="welcome__page--bot--section">
            <div className="promo__tile">
                <img
                    className="promo__tile--image"
                    src="../images/welcome_tile1.jpg"
                    alt="placeholder"
                />
                <div className="promo__tile--text">
                    <h4>
                        Do you often know about something you'd like to receive
                        as a gift but don't want to ask someone directly? Add it
                        to your wish list! Your family and friends will see it
                        and maybe you'll get lucky!
                    </h4>
                </div>
            </div>

            <div className="promo__tile">
                <div className="promo__tile--text">
                    <h4>
                        It's so easy, just add a link from the internet or type
                        the name of the item in your wish list. Other will be
                        able to see all the items you might want, so it will
                        help them deciding what to buy for you.
                    </h4>
                </div>
                <img
                    className="promo__tile--image"
                    src="../images/welcome_tile2.jpg"
                    alt="placeholder"
                />
            </div>

            <div className="promo__tile">
                <img
                    className="promo__tile--image"
                    src="../images/welcome_tile3.jpg"
                    alt="placeholder"
                />
                <div className="promo__tile--text">
                    <h4>
                        Do you always have a problem picking up the right
                        presents for your friends and family? Check out their
                        wish list and be sure you are buying them something they
                        really want!
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default BotSection;
