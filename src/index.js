/** @jsx drawer.createElement */
import '@babel/polyfill';
import drawer from './drawer/drawer';
import Book from './components/Book';
import createRoot from './scripts/root-creator';
import './app';

// const element = {
//         type: "div",
//         props: {
//             id: "container",
//             children: [
//                 { type: "input", props: { value: "foo", type: "text" } },
//                 { type: "a", props: { href: "/bar" } },
//                 {
//                     type: "span", props: {
//                         children: [
//                             {
//                                 type: "TEXT ELEMENT",
//                                 props: { nodeValue: "Foo" }
//                             }
//                         ]
//                     }
//                 }
//             ]
//         }
//     };

document.body.appendChild(createRoot());

drawer.render(<Book/>, document.getElementById("root"));

