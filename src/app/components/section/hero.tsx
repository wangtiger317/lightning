import GetStartedButton from "../global/get-started"

const Hero = () => {
    return (
        <section className="flex flex-col gap-[80px] lg:flex-row lg:gap-[100px] py-[50px] lg:py-[78.04px] w-full">
            <div className="flex flex-col items-start gap-[33px] w-full flex-1 px-6 2xl:px-0">
                <div className="flex flex-col gap-5 w-full">
                    <div className="flex flex-col gap-[15px] w-full">
                        <div className="flex flex-col gap-2 w-full">
                            <span className="text-blue text-base leading-5 font-medium tracking-[-0.02em]">
                                Equipped with Millions of IP Resources
                            </span>
                            <div className="text-primary text-[46px] leading-[58px] tracking-[-0.02em] font-semibold">
                                <div className="text-primary flex items-center gap-0.5 flex-wrap">
                                    The Most <img alt="lightning" src="/lightning_icon.svg" /> Complex
                                </div>
                                <span>
                                    Proxy Network
                                </span>
                            </div>
                        </div>
                        <span className="text-primary/75 text-[18px] leading-[22px] tracking-[-0.02em]">
                            Providing Top-Tier Proxies designed to ensure a high success rate on any task, be it easy or difficult.
                        </span>
                    </div>
                    <div className="flex items-center gap-[25px]">
                        <GetStartedButton />
                        <span className="cursor-pointer font-medium text-18">
                            View Plans
                        </span>
                    </div>
                </div>
                <div className="w-full h-px bg-primary/10 "></div>
                <div className="rounded-[10px] border-2 border-green flex items-center justify-center gap-1.5 lg:gap-2.5 p-2 lg:p-2.5 lg:w-[329px] h-[65px] bg-[#BFECDD]/10 ">
                    <img alt="users" src="/users.svg" />
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-0.5 text-base leading-5 tracking-[-0.02em] text-primary font-semibold">
                            Rated 4.9 <img alt="star" src="/star.svg" /> on TrustPilot
                        </div>
                        <span className="text-[14px] text-primary/50 tracking-[-0.02em] font-medium">
                        By 1000+ Customers
                        </span>
                    </div>
                </div>


            </div>
            <img alt="hero-image" src="/hero.svg" />
        </section>
    )
}

export default Hero