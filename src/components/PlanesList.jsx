// import clsx from "clsx";
import PlaneItem from "./PlaneItem"
import { getBgColorBuiltInStyles, getBgColorVanillaCSS } from "../utils/getBackgroundColor";

// const className = clsx(
//   "first",
//   10,
//   undefined && "second",
//   true && "third",
//   false ? "fourth" : "fifth"
// );

// console.log(className);
// const localImages = require.context("../images", true, /\.(avif|gif|jpe?g|png|svg|webp)$/i)

// function resolveImageUrl(imageUrl) {
//     if (!imageUrl?.startsWith("../images/")) {
//         return imageUrl
//     }

//     const imagePath = `./${imageUrl.slice("../images/".length)}`
//     return localImages(imagePath)
// }
// function getBgColorBuiltInStyles(year) {
//     if (!year || year != Number(year)) return 'grey';

//     if (year < 1946) {
//         return '#ffdb92';
//     } else if (year < 2000) {
//         return '#d2fdbd';
//     } else {
//         return '#d6f1ff';
//     }
// }

export default function PlanesList({ items }) {
    console.log(items);
    return (
        <ul 
        // style={{
        //         marginLeft: 10,
        //         marginRight: 10,
        //         padding: 10,
        //         display: "grid",
        //         gridTemplateColumns: 'repeat(auto-fit, minmax(445px, 1fr))',
        //         gap: 32,
        //         outline: "1px solid red",
        //     }}
        className="planesList"
>
            {items.map((item) =>
                <li
                    key={item.id}
                    // key={index}
                    // style={{
                    //     display: "grid",
                    //     gap: 12,
                    //     padding: 10,
                    //     // backgroundColor: '#ffdb92', // "year" до 1946
                    //     // backgroundColor: '#d2fdbd', // "year"  1946 - 1999
                    //     // backgroundColor: '#d6f1ff', // "year" від 2000
                    //     // ! Для визначення кольору фону картки в залежності від значення "year"
                    //     backgroundColor: getBgColorBuiltInStyles(item.info.year),
                    //     outline: "1px solid grey",
                    // }}
                    // className="planesItem"
                    // className="planesItem last"
                    // className="planesItem last current"
                    className={getBgColorVanillaCSS(item.info.year)}
                    // className={getBgColorVanillaCSS(item.info.year).join(" ")}


                >
                    <PlaneItem
                        url={item.url.main}
                        promotialUrl = {item.url.promotional}
                        realUrl={item.url.actual}

                        title={item.name.brief}
                        fullTitle={item.name.full}
                        nickname={item.name.nickname}

                        country={item.info.country}
                        type={item.info.type}
                        description={item.info.description}
                        price={item.info.price}
                        year={item.info.year}
                    />
                </li>)};
        </ul>
    )
}