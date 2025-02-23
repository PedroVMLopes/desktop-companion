import { useOfficeHours } from "../../context/OfficeHoursContext";
import { FaCaretUp, FaCaretDown, FaHourglassStart } from "react-icons/fa";
import { useState } from "react";

export function OfficeHours() {
    const { setHours, startTimer, stopTimer } = useOfficeHours();
    const [selectorHours, setSelectorHours] = useState(8);

    return (
        <div className="OfficeHoursMain flex flex-col bg-base-200 rounded-box p-2 pt-1">
            <div className="flex flex-col mt-1">
                <h1 className="flex font-Shrikhand text-xl pl-2">Jornada Diária</h1>
                <h2 className="stat-title text-sm italic text-wrap pl-1">Utiliza a barra abaixo do contador do dia para visualizar o tempo total que você quer permanecer focado</h2>
            </div>
            <div className="flex flex-row bg-base-100 w-full rounded-box mt-4">
                <div className="flex flex-row max-w-20 w-full">
                    <div className="flex flex-col w-full p-2">
                        <button onClick={() => setSelectorHours(selectorHours + 1)} className="btn btn-secondary bg-opacity-70 hover:bg-accent border-none w-full min-h-5 h-5 text-lg shadow-md"><FaCaretUp /></button>
                        <label className="input flex items-center justify-evenly p-1 my-1 stat-title italic bg-secondary text-secondary-content shadow-md w-full">
                            <p className="ml-1">hs:</p>
                            <input type="text" value={selectorHours} readOnly className="font-bold text-xl text-center w-6" />
                        </label>
                        <button onClick={() => setSelectorHours(selectorHours - 1)} className="btn btn-secondary bg-opacity-70 hover:bg-accent border-none w-full min-h-5 h-5 text-lg shadow-md"><FaCaretDown /></button>
                    </div>
                </div>
                <div className="flex flex-col w-full justify-around p-2">
                    <button 
                        onClick={() => {
                            setHours(selectorHours);
                            startTimer();
                        }} 
                        className="btn btn-outline btn-secondary min-h-6 h-10 shadow-lg">
                        Iniciar Jornada <FaHourglassStart /> 
                    </button>
                    <div className="tooltip tooltip-bottom">
                        <button 
                            onClick={stopTimer}
                            className="btn btn-outline btn-secondary hover:btn-error min-h-6 h-10 w-full shadow-lg">
                            Finalizar Jornada
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}