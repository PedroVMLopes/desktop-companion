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
        <div className="flex flex-col">
            <div className="custom-window-top">/ Inspo / Salário</div>
            <div className='SalaryInDollar flex flex-row px-2 custom-window bg-base-100'>
                <div className="card rounded-box p-2 px-3 flex-row font-Poppins items-center">
                    <h1 className="stat-title">U$D:</h1><h2 className="ml-1 font-bold">{dollar?.toFixed(3)}</h2>
                </div>
                <div className="divider divider-horizontal divider-accent py-2"></div>
                <div className="card rounded-box py-1 flex flex-row items-center">
                    <h1 className="stat-title">Salário Mínimo:</h1>
                    <h2 className="font-bold pl-2">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dollar * 1160)}
                    </h2>
                </div>
                <div className="divider divider-horizontal divider-accent py-2"></div>
                <div className="card rounded-box py-1 flex flex-row items-center">
                    <h1 className="font-bold">深圳 - Shenzhen</h1>
                </div>
            </div>
        </div>
        
    )
}
