import { FaCaretUp, FaCaretDown } from "react-icons/fa";

export function OfficeHours() {
    return (
        <div className="OfficeHours flex flex-col bg-base-200 rounded-box p-2 py-1">
            <div className="flex flex-col mt-1">
                <h1 className="flex font-Shrikhand text-xl">Jornada Diária</h1>
                <h2 className="stat-title text-sm italic text-wrap">Substitui a barra de contador do dia pelo tempo que você quer permanecer focado</h2>
            </div>
            <div className="bg-base-100 w-full rounded-box mt-4">
                <div className="flex flex-col w-min p-2">
                    <button className="btn btn-secondary bg-opacity-70 hover:bg-accent border-none w-full min-h-5 h-5 text-lg shadow-md"><FaCaretUp /></button>
                    <label className="input flex items-center gap-1 max-w-14 p-2 stat-title italic my-1 bg-secondary text-secondary-content shadow-md">
                        hs:
                        <input type="text" value={8} readOnly className="grow font-bold text-xl" />
                    </label>
                    <button className="btn btn-secondary bg-opacity-70 hover:bg-accent border-none w-full min-h-5 h-5 text-lg shadow-md"><FaCaretDown /></button>
                </div>
            </div>
        </div>
    )
}