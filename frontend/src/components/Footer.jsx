import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaPinterestP,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
    return (
<footer className="bg-transparent pt-0 pb-10 px-6">
            <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#0B0F3F] via-[#0C123F] to-[#091030] rounded-[50px] px-14 py-16 text-white shadow-2xl">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

                    {/* Logo + Description */}
                    <div>
                        <h1 className="text-3xl font-semibold mb-6 flex items-center gap-2">
                            <span className="text-purple-500 font-bold">ai</span>
                            <span>Orbia</span>
                        </h1>

                        <p className="text-gray-300 text-sm leading-relaxed mb-8">
                            Our operations are centered on data protection and security,
                            guaranteeing adherence to international regulations such as GDPR
                            and HIPAA.
                        </p>

                        <div className="flex gap-4">
                            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP].map(
                                (Icon, i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 transition duration-300 cursor-pointer"
                                    >
                                        <Icon size={14} />
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
                        <div className="flex gap-2 mb-6">
                            <span className="w-6 h-[2px] bg-purple-500"></span>
                            <span className="w-3 h-[2px] bg-pink-500"></span>
                        </div>

                        <ul className="space-y-3 text-sm text-gray-300">
                            {["Home", "About Us", "Services", "Projects", "Latest Blog", "Contact"].map(
                                (item, i) => (
                                    <li key={i} className="hover:text-white transition cursor-pointer">
                                        {item}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">Our Services</h2>
                        <div className="flex gap-2 mb-6">
                            <span className="w-6 h-[2px] bg-purple-500"></span>
                            <span className="w-3 h-[2px] bg-pink-500"></span>
                        </div>

                        <ul className="space-y-3 text-sm text-gray-300">
                            {[
                                "AI-Powered Solutions",
                                "Custom Technology",
                                "Customer Feedback",
                                "Machine Learning",
                                "Language Processing",
                                "Computer Vision",
                            ].map((item, i) => (
                                <li key={i} className="hover:text-white transition cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">Recent Post</h2>
                        <div className="flex gap-2 mb-6">
                            <span className="w-6 h-[2px] bg-purple-500"></span>
                            <span className="w-3 h-[2px] bg-pink-500"></span>
                        </div>

                        <ul className="space-y-5 text-sm text-gray-300">
                            <li className="flex items-center gap-4">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                                    <FaMapMarkerAlt size={13} />
                                </div>
                                <span>9550 Bolsa Ave #126, USA</span>
                            </li>

                            <li className="flex items-center gap-4">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                                    <FaEnvelope size={13} />
                                </div>
                                <span>info@touron.com</span>
                            </li>

                            <li className="flex items-center gap-4">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                                    <FaPhoneAlt size={13} />
                                </div>
                                <span>(+256) 214 203 215</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p className="mb-4 md:mb-0">
                        © All Copyright 2025 by{" "}
                        <span className="text-purple-500">Orbia</span>. All Rights Reserved.
                    </p>

                    <div className="flex gap-8">
                        <span className="hover:text-white transition cursor-pointer">
                            Terms & Conditions
                        </span>
                        <span className="hover:text-white transition cursor-pointer">
                            Privacy Policy
                        </span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;