import defaultImage from "./default.png" //! Дефолтне зображення

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
    description
}) {
    console.log(realUrl)
    return (
        <>
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
            className="planesTitle"
            >{title}</h3>
            <img src={url} alt={fullTitle} width="400" onError={(e) => onErrorImg(e)} />
            <p className="textField">Повна назва: <span className="textFieldValue">{fullTitle}</span></p>
            <p className="textField">Тип: <span className="textFieldValue">{type}</span></p>
            <p className="textField">Прізвисько: <span className="textFieldValue">{nickname}</span></p>
            <p className="textField">Країна виробник: <span className="textFieldValue">{country}</span></p>
            <p className="textField">Рік випуску: <span className="textFieldValue">{year}</span></p>
            <p className="textField">Актуальність: <span className="textFieldValue">{(year >= 2000) ? "сучасний" : "минуле століття"}</span></p>
            <p className="textField">Ціна: <span className="textFieldValue">{price}</span></p>
            <p className="textField">Опис: <span className="textFieldValue">{description}</span></p>
            <p className="imageTitles">Рекламна модель:</p>
            <img src={promotialUrl} alt={fullTitle} width="600" onError={(e) => onErrorImg(e)} />
            <p className="imageTitles">Реальна модель:</p>
            <div 
            className="actualImageBox"
            >
                {realUrl.map((img, index) => {
                    return (<img className="actualImage" key={index}
                        src={img} alt={fullTitle} width="300" onError={(e) => onErrorImg(e)} />)
                })}
            </div>
            <br />
            <button 
                className="itemButton"
                type="button">Додати до кошику</button>
        </>
    )
}