"use strict";
exports.id = 985;
exports.ids = [985];
exports.modules = {

/***/ 985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Header.jsx




const Header = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "jsx-dafc2123f811f7b",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                className: "jsx-dafc2123f811f7b",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "jsx-dafc2123f811f7b",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            children: "portfol.io"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        className: "jsx-dafc2123f811f7b",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/about",
                                children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    style: {
                                        color: router.route === "/about" ? "#3C4F38" : "black"
                                    },
                                    className: "jsx-dafc2123f811f7b",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/projects",
                                children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    style: {
                                        color: router.route === "/projects" ? "#3C4F38" : "black"
                                    },
                                    className: "jsx-dafc2123f811f7b",
                                    children: "Projects"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/contact",
                                children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    style: {
                                        color: router.route === "/contact" ? "#3C4F38" : "black"
                                    },
                                    className: "jsx-dafc2123f811f7b",
                                    children: "Contact"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "https://interactive-cv-mrshifu01.vercel.app/",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "jsx-dafc2123f811f7b" + " " + "cv-button",
                                    children: "CV"
                                })
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime.jsx((style_default()), {
                id: "dafc2123f811f7b",
                children: "nav{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:1rem;opacity:.7}ul{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-top:10px;gap:1rem}li{list-style-type:none}a{text-decoration:none;color:#fff}a:hover{text-decoration:none;color:#000;opacity:.6}.cv-button{background-color:#3c4f38;color:rgba(255,255,255,.7);padding:0 1rem;border-color:rgba(255,255,255,.5);-webkit-border-radius:25px;-moz-border-radius:25px;border-radius:25px;-webkit-box-shadow:0 0 20px 10px;-moz-box-shadow:0 0 20px 10px;box-shadow:0 0 20px 10px;opacity:.9;outline:none}.cv-button:hover{opacity:1}"
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Footer.jsx



// Basisc Footer
// Styled to be at the bottom in the middle
const Footer = ()=>{
    const date = new Date().getFullYear();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "jsx-8b4c5b046f72498b",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                className: "jsx-8b4c5b046f72498b",
                children: [
                    "portfol.io \xa9 ",
                    date
                ]
            }),
            jsx_runtime.jsx((style_default()), {
                id: "8b4c5b046f72498b",
                children: "h6.jsx-8b4c5b046f72498b{font-size:1rem;opacity:.5;text-align:center;margin-top:2rem}"
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Layout.jsx




// Styling for the background
const backgroundStyle = {
    backgroundColor: "#C5BCB5"
};
// Styling for the layout container
const layoutStyle = {
    maxWidth: 1440,
    margin: "0 auto",
    padding: "0 2rem",
    backgroundColor: "#CFCCC5",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
};
const Layout = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "portfol.io"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css",
                        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
                        crossorigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("script", {
                        src: "https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js",
                        integrity: "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",
                        crossorigin: "anonymous"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                style: backgroundStyle,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    style: layoutStyle,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components_Header, {}),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            style: {
                                flex: "1"
                            },
                            children: props.children
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components_Footer, {})
                    ]
                })
            })
        ]
    });
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;