import { Tasks } from "../../ui/Tasks";

export function CompletedTasks() {
    return (
        <div className="flex flex-col">
            <Tasks />
            <h1>Completas nas últimas 24h</h1>
            <h1>Completas anteriormente</h1>
        </div>
    )
}