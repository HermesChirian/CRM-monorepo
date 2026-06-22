import  Card  from "./Card.tsx";
import PieChart from "./PieChart.tsx";
import BarChart from "./BarChart.tsx";

export default function SummaryState(){

    return(

        <div className="flex flex-row w-screen  items-center justify-center gap-10 p-2">            
            
            {/*Div Izquierda DATOS*/}
            <div className=" bg-black text-white 
                            items-center basis-64 rounded-xl border-2 border-white 
                            min-w-1/2 min-h-1/2 overflow-hidden">
                <h1 >Estado</h1>
                <Card title="Costo real x m util historico" value={305} isPercentage={false}>
                    Promedio sobre todas las planchas.
                </Card>
                <Card title="Rendimiento historico" value={85}>
                    Aprovechamiento de material.
                </Card>
                <Card title="Desperdicio historico" value={15}>
                    Material no utilizado.
                </Card>
                    
            </div>
            

            {/*Div Derecha GRAFICOS*/}
            <div className=" bg-black text-white 
                            p-x-2 items-center basis-64 
                            rounded-xl border-2 border-white 
                            max-w-1/2 max-h-1/2 
                            overflow-hidden">
                <h1>Grafico</h1>
                <div className="">
                <BarChart/>
                <PieChart/>
                </div>
                    
            </div>

        </div>
    )

}