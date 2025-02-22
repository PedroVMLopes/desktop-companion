import { FaCaretUp, FaCaretDown, FaHourglassStart } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

export function OfficeHours() {
    return (
        <div className="OfficeHoursMain flex flex-col bg-base-200 rounded-box p-2 py-1">
            <div className="flex flex-col mt-1">
                <h1 className="flex font-Shrikhand text-xl">Jornada Diária</h1>
                <h2 className="stat-title text-sm italic text-wrap">Substitui a barra de contador do dia pelo tempo que você quer permanecer focado</h2>
            </div>
            <div className="flex flex-row bg-base-100 w-full rounded-box mt-4">
                <div className="flex flex-col w-min p-2">
                    <button className="btn btn-secondary bg-opacity-70 hover:bg-accent border-none w-full min-h-5 h-5 text-lg shadow-md"><FaCaretUp /></button>
                    <label className="input flex items-center gap-1 max-w-14 p-2 stat-title italic my-1 bg-secondary text-secondary-content shadow-md">
                        hs:
                        <input type="text" value={8} readOnly className="grow font-bold text-xl" />
                    </label>
                    <button className="btn btn-secondary bg-opacity-70 hover:bg-accent border-none w-full min-h-5 h-5 text-lg shadow-md"><FaCaretDown /></button>
                </div>
                <div className="flex flex-col w-full justify-around p-2">
                    <button className="btn btn-outline btn-secondary min-h-6 h-10 shadow-lg">Iniciar Jornada <FaHourglassStart /> </button>
                    <div className="tooltip tooltip-bottom" data-tip="Atenção! Isso irá redefinir seu contador">
                        <button className="btn btn-outline btn-secondary min-h-6 h-10 w-full shadow-lg">Recomeçar Jornada <VscDebugRestart /> </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}