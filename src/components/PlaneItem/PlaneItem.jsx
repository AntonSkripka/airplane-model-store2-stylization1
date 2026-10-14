//! Бібліотека react-icons
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa'; //! Приклад react-icons
import { AiOutlineFlag, AiOutlineInfoCircle, AiOutlineClockCircle, AiOutlineDollarCircle } from "react-icons/ai";
import { GiArmoredBoomerang, GiCeremonialMask, GiAirplaneDeparture, GiCommercialAirplane, GiCurlyMask } from "react-icons/gi";
import { CiBadgeDollar, CiGlobe, CiAirportSign1 } from "react-icons/ci";
import { TbClockHour4Filled } from "react-icons/tb";
import { FcTrademark } from "react-icons/fc";
//? nameBrief
//? nameFull - <FcTrademark /> - Повна назва
//? type - <GiArmoredBoomerang /> - бумеранг, <GiCommercialAirplane /> - літак- Тип
//? nickname - <GiCeremonialMask /> маска1, <GiCurlyMask /> маска2  - Прізвисько
//? country - <AiOutlineFlag /> - прапор, <CiGlobe /> - глобус - Країна виробник
//? year - <AiOutlineClockCircle /> - годинник - Рік випуску
//? duration - <TbClockHour4Filled /> - годинник - Тривалість виробництва(в роках)
//? price - <CiBadgeDollar/> - $, <AiOutlineDollarCircle /> - $ - Ціна
//? description - <AiOutlineInfoCircle /> - info - Опис
//? <GiAirplaneDeparture /> - Рекламна модель
//? <CiAirportSign1 /> - Реальна модель

import defaultImage from "./default.png" //! Дефолтне зображення
import { iconSize } from '@/constants/iconSize.js';
import { getManufacturingYears } from '@/utils/formatDateDuration';
// iconSize.md = 56;
import css from "./PlaneItem.module.css"; //! CSS-модулі
// //! Стилі для текстових полів
// const textField = {
//     fontSize: '18px',
//     fontWeight: 700,
// }

// //! Стилі для значень текстових полів
// const textFieldValue = {
//     fontWeight: 400,
//     fontStyle: "italic",
// }

// //! Стилі для заголовків зображень
// const imageTitles = {
//     textAlign: 'center',
//     color: 'blue'
// }


function onErrorImg(e) {
    e.target.onError = null;
    e.target.src = defaultImage;
}

export default function PlaneItem({
    url = defaultImage,
    promotialUrl = defaultImage,
    realUrl,

    title,
    fullTitle,
    nickname,

    year,
    country,
    type,
    price,
    description,

    startM,
    endM
}) {
    console.log(realUrl)
    return (
        <>
            {/* //! Приклад react-icons */ }

            <h3 
            // style={{
            //     marginBottom: 12,
            //     padding: "12px 16px",
            //     fontSize: 32,
            //     textAlign: 'center',
            //     borderRadius: 8,
            //     backgroundColor: "yellow",
            //     color: "blue",
            // }}
            className={css.planesTitle}
            >
                {title}
            </h3>
            <img src={url} alt={fullTitle} width="400" onError={(e) => onErrorImg(e)} />
            <p className={css.textField}><FcTrademark size={iconSize.md} className={css.icon}/>Повна назва: <span className="textFieldValue">{fullTitle}</span></p>
            <p className={css.textField}><GiArmoredBoomerang size={iconSize.md} className={css.icon}/>Тип: <span className="textFieldValue"><GiCommercialAirplane />{type}</span></p>
            <p className={css.textField}><GiCeremonialMask size={iconSize.md} className={css.icon}/>Прізвисько: <span className="textFieldValue">{nickname}</span></p>
            <p className={css.textField}><AiOutlineFlag size={iconSize.md} className={css.icon}/>Країна виробник: <span className="textFieldValue">{country}</span></p>
            <p className={css.textField}><AiOutlineClockCircle size={iconSize.md} className={css.icon}/>Рік випуску: <span className="textFieldValue">{year}</span></p>
            <p className={css.textField}><TbClockHour4Filled size={iconSize.md} className={css.icon}/>Тривалість виробництва(в роках): <span className="textFieldValue">{getManufacturingYears(startM, endM)}</span></p>
            <p className={css.textField}><TbClockHour4Filled size={iconSize.md} className={css.icon}/>Актуальність: <span className="textFieldValue">{(year >= 2000) ? "сучасний" : "минуле століття"}</span></p>
            <p className={css.textField}><CiBadgeDollar size={iconSize.md} className={css.icon}/>Ціна: <span className="textFieldValue">{price}</span></p>
            <p className={css.textField}><AiOutlineInfoCircle size={iconSize.md} className={css.icon}/>Опис: <span className="textFieldValue">{description}</span></p>
            <p className={css.imageTitles}><GiAirplaneDeparture size={iconSize.md}/>Рекламна модель:</p>
            <img src={promotialUrl} alt={fullTitle} width="600" onError={(e) => onErrorImg(e)} />
            <p className={css.imageTitles}><CiAirportSign1 size={iconSize.md}/>Реальна модель:</p>
            <div 
            className={css.actualImageBox}
            >
                {realUrl.map((img, index) => {
                    return (<img className={css.actualImage} key={index}
                        src={img} alt={fullTitle} width="300" onError={(e) => onErrorImg(e)} />)
                })}
            </div>
            <br />
            <button 
                className={css.itemButton}
                type="button">Додати до кошику</button>
        </>
    )
}