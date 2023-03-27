import './App.css';
import React, {useState} from 'react';
import {useForm} from "react-hook-form";

const App = () => {
    let {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset
    } = useForm({
        mode: "onChange"
    });

    let [productNameSymbols, setProductNameSymbols] = useState(0);
    let [productDescriptionSymbols, setProductDescriptionSymbols] = useState(0);

    const onSubmit = (data) => {
        console.log(data);

        reset();
    }

    return (
        <div>
            <h2>Форма добавления нового продукта</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Название продукта:
                    <input type="text" {
                        ...register("productName", {
                            required: "название продукта не может быть пустым",
                            minLength: {
                                value: 6,
                                message: "Минимум 6 символов."
                            },
                            maxLength: {
                                value: 10,
                                message: "Максимум 10 символов."
                            }
                        })
                    }
                           />
                    {/*onChange={(event) => setProductNameSymbols(event.target.value.length)}*/}
                    <b>{productNameSymbols}</b>
                </p>
                <div>{errors?.productName?.message}</div>

                <p>Описание продукта:
                    <input type="text" {
                        ...register("productDescription", {
                            required: "описание продукта не может быть пустым",
                            minLength: {
                                value: 6,
                                message: "Минимум 6 символов."
                            },
                            maxLength: {
                                value: 15,
                                message: "Максимум 15 символов."
                            }
                        })
                    }
                           />

                    {/*onChange={(event) => setProductDescriptionSymbols(event.target.value.length)}*/}
                    <b>{productDescriptionSymbols}</b>
                </p>
                <div>{errors?.productDescription?.message}</div>

                <p><input type="submit" value={"Добавить"} disabled={!isValid}/></p>
            </form>
        </div>
    );
};

export default App;