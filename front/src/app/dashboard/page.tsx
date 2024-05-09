import "./globals.css"
import CardAir from "@/components/it/CardAir";

const Page = () => {

    return (

        <>
            <nav className="left drawer  m l ">
                <a>
                    <i>home</i>
                    <div>Home</div>
                </a>
                <a>
                    <i>search</i>
                    <div>Search</div>
                </a>
                <a>
                    <i>share</i>
                    <div>share</div>
                </a>
            </nav>
            <main className="responsive surface-container-low">

                <header className="fill fixed ">
                    <nav>
                        <button className="circle transparent">
                            <i>menu</i>
                        </button>
                        <h5 className="max">Refrigeração</h5>
                        <button className="circle transparent">
                            <img className="responsive"
                                 src="https://nexus.daisyui.com/_next/static/media/1.68eaacb8.png"/>
                        </button>
                    </nav>
                </header>

                <div className={"padding"}>

                    <h6>Controles</h6>

                    <div className={"right-align padding"}>
                        <button><i>add</i> Adicionar</button>
                    </div>


                    <div className={"round fill large-padding"}>

                        <h6>Setor B</h6>

                        <div className={"grid"}>
                            <CardAir/>
                        </div>


                    </div>

                </div>


            </main>
        </>

    )

}

export default Page;