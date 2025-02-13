"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var unbounded = google_1.Unbounded({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    style: ['normal'],
    variable: '--font-unbounded'
});
var roboto = google_1.Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    style: ['normal', 'italic'],
    variable: '--font-roboto'
});
exports.metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: unbounded.variable + " " + roboto.variable + " antialiased" }, children)));
}
exports["default"] = RootLayout;
