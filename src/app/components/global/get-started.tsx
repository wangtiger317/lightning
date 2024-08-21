import ArrowRightIcon from "../icon"

const GetStartedButton = () => {
    return (
        <button className="flex items-center justify-center gap-0.5 h-14 lg:h-[64px] px-9 lg:w-[223px] bg-blue lg:text-[18px] lg:leading-[22px] font-medium text-white rounded-default">
            Get Started
            <ArrowRightIcon />
        </button>
    )
}

export default GetStartedButton