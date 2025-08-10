"use client"
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react";
import { title } from "process";

const services = [
    {
        title: "Banho & Tosa",
        description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
        price: "$50",
        duration: "1h 30min",
        icon: <Scissors />,
        linkText: "Olá, vi no site sobre Banho e Tosa e gostaria de mais informações."
    },
    {
        title: "Vacinação",
        description: "Aplicação de vacinas essenciais para proteger seu pet contra doenças comuns e graves, garantindo a saúde e o bem-estar dele.",
        price: "$80",
        duration: "30min",
        icon: <Syringe />,
        linkText: "Olá, vi no site sobre Vacinação e gostaria de mais informações."
    },
    {
        title: "Transporte Pet",
        description: "Serviço de transporte seguro e confortável para levar seu pet até o veterinário, banho e tosa ou qualquer destino combinado.",
        price: "$30",
        duration: "Depende da distância",
        icon: <CarTaxiFront />,
        linkText: "Olá, vi no site sobre Transporte Pet e gostaria de mais informações."
    },
    {
        title: "Hotelzinho Pet",
        description: "Hospedagem com conforto, segurança e muito carinho para seu pet enquanto você viaja ou se ausenta por alguns dias.",
        price: "$100",
        duration: "Diária",
        icon: <Hotel />,
        linkText: "Olá, vi no site sobre Hotelzinho Pet e gostaria de mais informações."
    }
];




export function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    })


    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold mb-12">Serviços</h2>


                <div className="relative">

                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex-1 flex items-start justify-between">


                                            <div className="flex gap-3">
                                                <span className="text-3xl">{item.icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-xl mb-1 my-1">{item.title}</h3>
                                                    <p className="text-gray-400 text-sm select-none">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="border-t border-gray-700 pt-4 flex item-center justify-between">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>{item.duration}</span>
                                            </div>

                                            <a
                                                href={`https://wa.me/5567999999999?text=Olá vim pelo site e gostaria de mais informações sobre ${item.title}`}
                        target='_blank'
                                                className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300"
                                            >
                                                <WhatsappLogoIcon className="w-5 h-5" />
                                                Entrar em contato
                                            </a>

                                        </div>

                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 hover:cursor-pointer
                    -translate-x-1/2 top-1/2 z-10"
                        onClick={scrollPrev}
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600 "/>
                    </button>

                    <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-7 -translate-y-1/2 hover:cursor-pointer
                    -translate-x-1/2 top-1/2 z-10"
                        onClick={scrollNext}
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600 "/>
                    </button>

                </div>
            </div>



        </section>
    )
}