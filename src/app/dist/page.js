"use strict";
exports.__esModule = true;
var HeroSection_1 = require("@/section/HeroSection");
function Home() {
    return (React.createElement("div", { className: "min-h-screen flex justify-center  h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]" },
        React.createElement("main", { className: "w-full container mx-auto" },
            React.createElement(HeroSection_1["default"], null))));
}
exports["default"] = Home;
