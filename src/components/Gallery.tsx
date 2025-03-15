export function Gallery() {

    const images = [
        "https://i.pinimg.com/736x/ba/51/ef/ba51efc2ffe3810f6a8237aae37f42c3.jpg",
        "https://i.pinimg.com/736x/b4/1d/02/b41d029fcfbd64150b2ddb05fe464437.jpg",
        "https://i.pinimg.com/736x/bb/56/46/bb564648e79b93f7d0e33204ffe39654.jpg",
        "https://i.imgur.com/LWAEoJw.jpeg",
        "https://i.imgur.com/Vh29B2H.png",
        "https://i.imgur.com/zkaB2Y5.png",
        "https://i.imgur.com/45G0Z2x.png"
    ];

    return (
        <div className="w-fit custom-border rounded-t-3xl">
            <div className="custom-window-top flex flex-row px-4">
                <div className="divider divider-horizontal divider-accent py-2 ml-1"></div>
                <div className="card rounded-box py-1 flex flex-row items-center">
                    <h1 className="font-bold text-nowrap">深圳</h1>
                </div>
            </div>

            <div className="w-full">
                <img
                    src={"https://i.imgur.com/zkaB2Y5.png"}
                    className="w-full max-h-[320px] max-w-[270px] rounded-b-xl"
                    alt="Burberry store front"
                />
            </div>

        </div>
    );
}