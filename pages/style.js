import { makeStyles } from "@material-ui/core/styles"; // импортируем makeStyles для возможности создавать классы со стилями

const useStyles = makeStyles({
    red: {
        color: "red", // задаём красный цвет
    }
}, { name: "MuiExample_Component" }); // позволяет отобржать корректно стили при использовании функции getServerSideProps

export default useStyles; // экспортируем функцию useStyles по умолчанию