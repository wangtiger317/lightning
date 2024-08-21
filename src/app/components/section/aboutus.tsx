const AboutUs = () => {
    const about = [
        {
            icon: "/about/feat-icon-01.svg",
            heading: "Lightning Fast Speeds",
            description: "Our proxies are hosted on dedicated servers with 10GBps Network Speed, assuring a fast response time and no rate limits."
        },
        {
            icon: "/about/feat-icon-02.svg",
            heading: "Global Proxies",
            description: <>
                Our proxy network contains millions of unique IP addresses from 150+ countries and 1000+ cities.
                Web scraping has never been so easy since us.
            </>
        },
        {
            icon: "/about/feat-icon-03.svg",
            heading: "Diversity",
            description: <>
                Be it Datacenter, Residential, ISP or IPv6 Proxies, we have everything to scale your business up.
            </>
        },
        {
            icon: "/about/feat-icon-04.svg",
            heading: "Enhanced Privacy",
            description: <>
                We have a strict no log policy, your privacy is a Top-Priority for us.
            </>
        },
        {
            icon: "/about/feat-icon-05.svg",
            heading: "Priority Support",
            description: <>
                We are available 24/7/365 even on holidays to support you every step of the way, in case you need it.
            </>
        },
        {
            icon: "/about/feat-icon-06.svg",
            heading: "User-Friendly Dashboard",
            description: <>
                With our advanced featured dashboard, you can easily manage your plans and keep track of your proxy usage.
            </>
        }
    ]
    return (
        <section className="flex flex-col items-center justify-center gap-10 lg:gap-[46px] pt-12 lg:pt-[90px] px-6 lg:px-0 w-full">
            <div className="flex flex-col items-center justify-center gap-2">
                <span className="subheading text-center">
                    ABOUT US
                </span>
                <span className="heading text-center">
                    Why do businesses choose us for their operations?
                </span>
                <span className="description text-center max-w-[534px] mx-auto">
                    We offer a reliable & complex proxy infrastructure at everyone's disposal, ready to deliver outstanding performances.
                </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 gap-y-[22px] w-full">
                {about.map((item, index) => (
                    <div key={index} className="flex flex-col gap-[11px] cursor-pointer border-2 border-transparent hover:border-blue hover:bg-blue/10 py-5 px-8 lg:py-[37px] lg:px-[45px] rounded-[15px]">
                        <img alt={`feat-icon-${index}`} src={item.icon} className="w-[50px] h-[50px]" />
                        <div className="flex flex-col gap-2.5 w-full">
                            <span className="text-primary text-[20px] leading-[25px] font-medium tracking-[-0.02em] text-start">
                                {item.heading}
                            </span>
                            <span className="text-[14px] tracking-[-0.02em] text-primary/75">
                                {item.description}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AboutUs