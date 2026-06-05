import React from "react";

const Footer = () => {
    return (
        <div className="w-full grid grid-cols-1 py-5 px-10 bg-slate-700 text-slate-200">
            <div className="w-full grid grid-cols-1 md:flex md:items-center md:justify-between">
                <div className="flex items-center justify-center gap-3">
                    <span className="text-sm text-slate-300">Terms</span>
                    <span className="text-sm text-slate-300">Policy</span>
                    <span className="text-sm text-slate-300">Contact</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <div className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Shopping Cart
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
