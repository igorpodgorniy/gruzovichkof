import React, {useState, useEffect} from "react"; // React импортируется по умолчанию. useState, useEffect - импорт в фигурных скобках
import {Grid} from "@material-ui/core"; // Grid импортируется не по умолчанию

import useStyles from "./style"; // импорт стилей из файла style.js

export default function Page({id, options, count=0, color, data}) { // в компонент необходимо передавать промис. В данном случае деструктуризацией
    // задал значение по умолчанию для count
    return <MyWonderfulComponent
                id={id} // Передача аргументов в фигурных скобках
                options={options}
                count={count}
                color={color}
                data={data}>I'm text from a component
            </MyWonderfulComponent>
}

function MyWonderfulComponent({id, options, children, ...other}) { // добавил остаточный оператор.
    // В компонент необходимо передавать промис. В данном случае деструктуризацией
    const color = useStyles(); // передача значения функции useStyles в color
    const { count } = other;
    const [ summ, setSumm ] = useState(count); // деструктцризация useState() происходит через []

    useEffect(() => {
        if (id && options && options.params && options.params.fields && options.params.fields.isDynamic) {
            setSumm(summ + 1);
        }
    });

    return (
        //из компонента необходимо возвращать один эелемент. Обернул всё в div
        <div>
            {/* добавление класса для изменения цвета h1 */}
            <h1 className={color.red}>Hello World!</h1>   
            <Grid>
                {/* при использовании атрибута xs необходим атрибут item со значением true */}
                <Grid xs={12} item={true}>{children}</Grid> 
                <Grid>{ summ }</Grid>
            </Grid>
        </div>
    );
}

// использование функции getServerSideProps для вывода текста в консоль на стороне сервера
export async function getServerSideProps() {
    const log = {text: 'Hello from SSR'};
    console.log(log.text);
    return {
        props: {log}
    }
}