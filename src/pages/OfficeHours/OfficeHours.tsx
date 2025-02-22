import { useState } from "react";
import { FaCaretUp, FaCaretDown, FaHourglassStart } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

export function OfficeHours() {
    let [ totalOfficeHours, setTotalOfficeHours ] = useState(8)

    return (
        <div className="OfficeHoursMain flex flex-col bg-base-200 rounded-box p-2 pt-1">
            <div className="flex flex-col mt-1">
                <h1 className="flex font-Shrikhand text-xl pl-2">Jornada Diária</h1>
                <h2 className="stat-title text-sm italic text-wrap pl-1">Substitui a barra de contador do dia pelo tempo que você quer permanecer focado</h2>
            </div>
            <div className="flex flex-row bg-base-100 w-full rounded-box mt-4">
                <div className="flex flex-row max-w-20 w-full">
                    <div className="flex flex-col w-full p-2">
                        <button onClick={() => setTotalOfficeHours(totalOfficeHours + 1)} className="btn btn-secondary bg-opacity-70 hover:bg-accent border-none w-full min-h-5 h-5 text-lg shadow-md"><FaCaretUp /></button>
                        <label className="input flex items-center justify-evenly p-1 my-1 stat-title italic bg-secondary text-secondary-content shadow-md w-full">
                            <p>hs:</p>
                            <input type="text" value={totalOfficeHours} readOnly className="font-bold text-center text-xl w-6" />
                        </label>
                        <button onClick={() => setTotalOfficeHours(totalOfficeHours - 1)} className="btn btn-secondary bg-opacity-70 hover:bg-accent border-none w-full min-h-5 h-5 text-lg shadow-md"><FaCaretDown /></button>
                    </div>
                </div>
                    <div className="flex flex-col w-full justify-around p-2">
                        <button className="btn btn-outline btn-secondary min-h-6 h-10 shadow-lg">Iniciar Jornada <FaHourglassStart /> </button>
                        <div className="tooltip tooltip-bottom">
                            <button className="btn btn-outline btn-secondary hover:btn-error min-h-6 h-10 w-full shadow-lg">Recomeçar Jornada <VscDebugRestart /> </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}