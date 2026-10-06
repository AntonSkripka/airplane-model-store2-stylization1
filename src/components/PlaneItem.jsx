import defaultImage from "./default.png" //! Дефолтне зображення

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
            <h3>{title}</h3>
            <img src={url} alt={fullTitle} width="400" onError={(e) => onErrorImg(e)}/>
            <p>Повна назва: {fullTitle}</p>
            <p>Тип: {type}</p>
            <p>Прізвисько: {nickname}</p>
            <p>Країна виробник: {country}</p>
            <p>Рік випуску: {year}</p>
            <p>Актуальність: {(year >= 2000) ? "сучасний" : "минуле століття"}</p>
            <p>Ціна: {price}</p>
            <p>Опис: {description}</p>
            <p>Рекламна модель:</p>
            <img src={promotialUrl} alt={fullTitle} width="600" onError={(e) => onErrorImg(e)}/>
            <p>Реальна модель:</p>
            <ul>
                {realUrl.map((img, index) => {
                    return (<li key={index}>
                        <img src={img} alt={fullTitle} width="300" onError={(e) => onErrorImg(e)}/>
                    </li>)
                })}
            </ul>
            <br />
            <button type="button">Додати до кошику</button>
        </>
    )
}