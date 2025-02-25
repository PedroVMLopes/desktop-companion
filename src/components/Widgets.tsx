import { useState, useEffect } from "react";
import { getFloatDollarValue } from "../utils/util";

export function SalaryInDollar() {
    const [ dollar, setDollar ] = useState<number | 0>(0);

    useEffect(() => {
        async function fetchDollar() {
            const value = await getFloatDollarValue();
            setDollar(value);
        }
        fetchDollar()
    }, []);

    return (
        <div className='SalaryInDollar flex bg-base-100 rounded-box mx-1 px-2'>
            <div className="card rounded-box p-2 px-3 flex-row font-Poppins items-center">
                <h1 className="stat-title">U$D:</h1><h2 className="ml-1 font-bold">{dollar?.toFixed(3)}</h2>
            </div>
            <div className="divider divider-horizontal py-2"></div>
            <div className="card rounded-box py-1 flex-grow grid place-items-center">
                <h1 className="stat-title">Salário Base:</h1>
                <h2 className="font-bold">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dollar * 2000)}
                </h2>
            </div>
        </div>
    )
}
