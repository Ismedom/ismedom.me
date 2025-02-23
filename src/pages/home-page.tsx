
import { PinContainer } from "../components/ui/3d-pin";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { FlipWords } from "../components/ui/flip-words";
import TECH_STACK_AND_TOOLS from "../data/tech";
import randomColor from "../functions/randomColor";


function Home() {
    const words = ["Fullstack", "React JS", "Nest JS", "Backend"];
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 place-items-center">
                <div>
                    <div className="over-layer-text">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-3" data-aos="fade-left">Hello, My name's Devon</h1>
                    </div>
                    <div className="over-layer-text flex" data-aos="fade-up">
                        I'm a <FlipWords words={words} color={randomColor()} />developer
                    </div>
                    <div className="layer-text" data-aos="fade-up">
                        I enjoy creating websites and applications that are both beautiful and efficient. I’m always learning new technologies and looking for exciting challenges. If you’d like to collaborate or just talk about coding, feel free to reach out!
                    </div>

                </div>
                <div className="relative z-[31]" >
                    <div className="w-[300px]" data-aos="fade-up">
                        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-transparent bg-gray-800 dark:bg-zinc-900" >
                            <img
                                src={'https://final-portforlio-one.vercel.app/assets/profilePic%20(2)-KUndTynq.png'}
                                alt="jordans"
                                height="400"
                                width="400"
                                className="object-contain scale-[1.35]"
                                data-aos="fade-up"
                            />
                        </BackgroundGradient>
                    </div>
                </div>

            </div>
            {/* <div className="mt-8 mb-2">
                <h2 className="relative z-20 text-3xl font-bold text-center text-gray-400">Tech Stack and Tools</h2>
            </div> */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 my-6">
                {TECH_STACK_AND_TOOLS.map((tech, index) => (
                    <PinContainer key={index} title={tech.name} href="" className="w-full rounded-lg" containerClassName="layer-text">
                        <div className="flex flex-col items-center justify-center w-32 h-32 bg-gradient-to-br" >
                            <div className="w-20 flex items-center justify-center">
                                <img
                                    className="w-14 object-contain p-2"
                                    src={tech.logo}
                                    alt={tech.name}
                                />
                            </div>
                            <span className="mt-2 text-center text-sm">{tech.name}</span>
                        </div>
                    </PinContainer>
                ))}
            </div>


        </>
    );
}

export default Home;