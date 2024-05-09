import SVGAnimationAir from "@/components/animation/SVGAnimationAir";


const CardAir = () => {


    return (

        <div className={"s12 m2"}>

            <article className={"center-align "}>

                <div className={"middle-align flex-bt"}>

                    <label>42343-4234</label>

                    <label className="switch icon">
                        <input checked type="checkbox"/>
                        <span>
                         <i>close</i>
                         <i>done</i>
                     </span>
                    </label>

                </div>

                <SVGAnimationAir/>

                <div className={"disable"}>

                    <label>Temperatura</label>

                    <div className={"row center-align"}>

                        <button className={"circle"}><i>expand_less</i></button>
                        <h5 className={"center-align font-digital"}>22</h5>
                        <button className={"circle"}><i>expand_more</i></button>

                    </div>

                </div>


                <span>Some text here</span>


            </article>

        </div>

    )

}

export default CardAir