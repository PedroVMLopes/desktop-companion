import { FaCaretUp, FaCaretDown } from "react-icons/fa";

export function OfficeHours() {
    return (
        <div className="OfficeHours flex flex-col bg-base-200 rounded-box p-2 py-1">
            <div className="flex flex-col mt-1">
                <h1 className="flex font-Shrikhand text-xl">Jornada Diária</h1>
                <h2 className="stat-title text-sm italic text-wrap">Substitui a barra de contador do dia pelo tempo que você quer permanecer focado</h2>
            </div>
            <div className="bg-base-100 w-full rounded-box mt-4">
                <div className="flex flex-col items-center w-min p-2">
                    <button className="btn btn-secondary hover:bg-accent border-none w-full min-h-5 h-5 text-lg"><FaCaretUp /></button>
                    <input type="text" placeholder="8" className="input input-bordered max-w-14 text-center my-2" />
                    <button className="btn btn-secondary hover:bg-accent border-none w-full min-h-5 h-5 text-lg"><FaCaretDown /></button>
                </div>
            </div>
        </div>
    )
}