import { ReactNode } from "react";

const WrapperContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className="container mx-auto px-4 sm:px-10 py-12 md:py-[100px]">{children}</div>
    );
};

export default WrapperContainer;