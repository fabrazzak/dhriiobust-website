import React from 'react';

const Loader = () => {
    return (
        <div>
            <div className="flex justify-center  items-center  h-[100vh]">
                <div className="animate-spin  rounded-full h-10 w-10 border-t-2 border-b-2 border-[#074287]">
                     <p >.</p>
                </div>
            </div>
        </div>
    );
};

export default Loader;