
const CopyRight = () => {
    return (
        <div className="
            container mx-auto
            mb-5
            px-4 sm:px-6
            flex
            flex-col sm:flex-row
            items-center
            justify-between
            gap-3
            text-center sm:text-left
        ">

            {/* Copyright Text */}
            <div className="
                c-text
                text-gray-500
                text-xs sm:text-sm
            ">
                © 2026 Dev Stack. All rights reserved.
            </div>


            {/* Links */}
            <div>
                <ul className="
                    flex
                    gap-4
                    text-gray-500
                    text-xs sm:text-sm
                ">
                    <li>
                        <a href="">Privacy</a>
                    </li>

                    <li>
                        <a href="">Terms</a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default CopyRight;