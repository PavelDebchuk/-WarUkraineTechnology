import "./Filter.styled.css";

const Filter = () => {
    const typeTech = [
        "танк",
        "рсзо",
        "Бронеавто",
        "САУ",
        "Ракетні установки",
        "Зенітні самохідні установки",
        "МТМБ",
        "БМП",
        "Автомобілі",
        "Інженерна техніка",
        "РЛС",
        "Літак",
        "Дрон"
    ]
    return(
        <div>
            <ul className="Filter_list">
                {typeTech.map((type) => 
                <li className="Filter_item">
                    <label><input type="checkbox" name="{type}">
                        {type}
                        </input></label>
                </li>)}
            </ul>
        </div>
    )
}

export default Filter;
