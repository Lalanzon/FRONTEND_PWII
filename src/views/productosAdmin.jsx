export default function ProductosAdmin() {

    const productos = [
        {
            id: 1,
            nombre: "Microcontrolador",
            ubicacion: "Estación Universidad",
            condicion: "Usado",
            estudiante: "Mariana López",
            precio: "$500",
            aprobacion: "Aprobado",
            disponibilidad: "Disponible",
            imagen: "/productos/microcontrolador.png"
        },
        {
            id: 2,
            nombre: "Visor de VR",
            ubicacion: "Ciudad Universitaria",
            condicion: "Usado",
            estudiante: "Alan Salas",
            precio: "$800",
            aprobacion: "Aprobado",
            disponibilidad: "Reservado",
            imagen: "/productos/visor-vr.png"
        },
        {
            id: 3,
            nombre: "Calculadora Científica",
            ubicacion: "Cafetería FOD",
            condicion: "Usado",
            estudiante: "Sofía Blanco",
            precio: "$650",
            aprobacion: "Aprobado",
            disponibilidad: "No disponible",
            imagen: "/productos/calculadora.png"
        },
        {
            id: 4,
            nombre: "Tableta Gráfica",
            ubicacion: "Cafetería FCC",
            condicion: "Usado",
            estudiante: "Alejandro",
            precio: "$900",
            aprobacion: "Pendiente",
            disponibilidad: "Disponible",
            imagen: "/productos/tableta.png"
        },
        {
            id: 5,
            nombre: "Microcontrolador",
            ubicacion: "Cafetería FCFM",
            condicion: "Usado",
            estudiante: "Mariana López",
            precio: "$500",
            aprobacion: "Aprobado",
            disponibilidad: "Disponible",
            imagen: "/productos/microcontrolador.png"
        }
    ]


    const colorAprobacion = (estado) => {

        if (estado === "Aprobado") {
            return "bg-[#D9F2E8]"
        }

        if (estado === "Pendiente") {
            return "bg-[#FFF0A8]"
        }

        return "bg-[#FFD7D9]"
    }


    const colorDisponibilidad = (estado) => {

        if (estado === "Disponible") {
            return "bg-[#D9F2E8]"
        }

        if (estado === "Reservado") {
            return "bg-[#FFF0A8]"
        }

        return "bg-[#F7DCDD]"
    }


    return (

        <div className="w-full pb-10">


            {/* TITULO GENERAL */}
            <h1
                className="
                    ml-[28px]
                    mb-[28px]

                    text-[28px]
                    font-extrabold

                    text-[#17161A]
                "
            >
                Administración de UniMarket
            </h1>



            {/* CONTENEDOR TABLA */}
            <section
                className="
                    w-full

                    border-2
                    border-[#159CFF]

                    bg-[#FFFDF8]
                "
            >


                {/* ENCABEZADO SUPERIOR */}
                <div
                    className="
                        h-[54px]

                        flex
                        items-center
                        justify-between

                        px-[38px]

                        bg-[#FFFDF8]
                    "
                >

                    <h2
                        className="
                            text-[22px]
                            font-extrabold

                            text-[#252429]
                        "
                    >
                        Productos Registrados
                    </h2>


                    {/* FILTRO */}
                    <div className="relative">

                        <select
                            className="
                                appearance-none

                                w-[245px]
                                h-[34px]

                                rounded-full

                                border
                                border-[#ECEAE4]

                                bg-white

                                pl-[18px]
                                pr-[40px]

                                text-[11px]
                                text-[#A2A0A5]

                                shadow-[0_2px_4px_rgba(0,0,0,0.25)]

                                outline-none
                            "
                        >

                            <option>FILTRO</option>
                            <option>Todos</option>
                            <option>Aprobados</option>
                            <option>Pendientes</option>
                            <option>Disponibles</option>
                            <option>Reservados</option>

                        </select>


                        <div
                            className="
                                pointer-events-none

                                absolute
                                right-[15px]
                                top-1/2

                                -translate-y-1/2
                            "
                        >

                            <svg
                                width="10"
                                height="10"
                                viewBox="0 0 20 20"
                                fill="none"
                            >

                                <path
                                    d="M10.3087 13.196L15.6668 7.67064C16.0011 7.32586 15.7984 6.66675 15.3581 6.66675H4.64194C4.2016 6.66675 3.99893 7.32586 4.33327 7.67064L9.69135 13.196C9.86894 13.3792 10.1311 13.3792 10.3087 13.196Z"
                                    fill="#252429"
                                />

                            </svg>

                        </div>

                    </div>

                </div>



                {/* CONTENEDOR CON SCROLL POR SI LA PANTALLA ES PEQUEÑA */}
                <div className="overflow-x-auto">

                    <div className="min-w-[950px]">


                        {/* CABECERA TABLA */}
                        <div
                            className="
                                grid
                                grid-cols-[2.2fr_1.1fr_.75fr_1.35fr_1.45fr_1.7fr]

                                items-center

                                min-h-[46px]

                                px-[28px]

                                bg-gradient-to-r
                                from-[#FFF4AF]
                                to-[#FFF9D4]

                                text-[12px]
                                font-extrabold

                                text-[#252429]
                            "
                        >

                            <span>Producto</span>

                            <span>Estudiante</span>

                            <span>Precio</span>

                            <span>Aprobación</span>

                            <span>Disponibilidad</span>

                            <span>Acciones</span>

                        </div>



                        {/* PRODUCTOS */}
                        <div
                            className="
                                px-[28px]
                                bg-[#FFFDF8]
                            "
                        >

                            {productos.map((producto) => (

                                <div
                                    key={producto.id}

                                    className="
                                        grid
                                        grid-cols-[2.2fr_1.1fr_.75fr_1.35fr_1.45fr_1.7fr]

                                        items-center

                                        min-h-[56px]

                                        border-b
                                        border-[#DEDCD5]

                                        text-[12px]

                                        text-[#252429]
                                    "
                                >


                                    {/* PRODUCTO */}
                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-[12px]
                                        "
                                    >

                                        {/* IMAGEN */}
                                        <div
                                            className="
                                                w-[48px]
                                                h-[48px]

                                                shrink-0

                                                rounded-full

                                                bg-[#FFE66B]

                                                flex
                                                items-center
                                                justify-center

                                                overflow-hidden
                                            "
                                        >

                                            <img
                                                src={producto.imagen}
                                                alt={producto.nombre}
                                                className="
                                                    w-[42px]
                                                    h-[42px]

                                                    object-contain
                                                "
                                            />

                                        </div>


                                        {/* TEXTO */}
                                        <div>

                                            <p
                                                className="
                                                    text-[12px]
                                                    font-extrabold
                                                    leading-[15px]
                                                "
                                            >
                                                {producto.nombre}
                                            </p>

                                            <p
                                                className="
                                                    mt-[2px]

                                                    text-[9px]

                                                    text-[#99979B]
                                                "
                                            >
                                                {producto.ubicacion}
                                                {" - "}
                                                {producto.condicion}
                                            </p>

                                        </div>

                                    </div>



                                    {/* ESTUDIANTE */}
                                    <div
                                        className="
                                            text-[11px]
                                            font-medium
                                        "
                                    >
                                        {producto.estudiante}
                                    </div>



                                    {/* PRECIO */}
                                    <div
                                        className="
                                            text-[11px]
                                            font-medium
                                        "
                                    >
                                        {producto.precio}
                                    </div>



                                    {/* APROBACIÓN */}
                                    <div>

                                        <span
                                            className={`
                                                inline-flex

                                                min-w-[95px]

                                                justify-center

                                                rounded-full

                                                px-[14px]
                                                py-[5px]

                                                text-[11px]

                                                shadow-[0_2px_4px_rgba(0,0,0,0.18)]

                                                ${colorAprobacion(producto.aprobacion)}
                                            `}
                                        >

                                            {producto.aprobacion}

                                        </span>

                                    </div>



                                    {/* DISPONIBILIDAD */}
                                    <div>

                                        <span
                                            className={`
                                                inline-flex

                                                min-w-[96px]

                                                justify-center

                                                rounded-full

                                                px-[14px]
                                                py-[5px]

                                                text-[11px]

                                                shadow-[0_2px_4px_rgba(0,0,0,0.18)]

                                                ${colorDisponibilidad(producto.disponibilidad)}
                                            `}
                                        >

                                            {producto.disponibilidad}

                                        </span>

                                    </div>



                                    {/* ACCIONES */}
                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-[9px]
                                        "
                                    >

                                        <button
                                            className="
                                                rounded-full

                                                bg-[#FFE66B]

                                                px-[15px]
                                                py-[5px]

                                                text-[10px]
                                                font-medium

                                                shadow-[0_2px_4px_rgba(0,0,0,0.22)]

                                                transition-all

                                                hover:bg-[#FFDA25]
                                                hover:scale-105
                                            "
                                        >
                                            Disponible
                                        </button>


                                        <button
                                            className="
                                                rounded-full

                                                bg-[#FF747B]

                                                px-[15px]
                                                py-[5px]

                                                text-[10px]
                                                font-medium

                                                shadow-[0_2px_4px_rgba(0,0,0,0.22)]

                                                transition-all

                                                hover:bg-[#FF5B65]
                                                hover:scale-105
                                            "
                                        >
                                            Rechazar
                                        </button>

                                    </div>


                                </div>

                            ))}

                        </div>


                    </div>

                </div>

            </section>

        </div>

    )
}