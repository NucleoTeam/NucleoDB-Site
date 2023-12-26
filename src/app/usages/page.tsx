import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="lg:static lg:w-auto  lg:p-4">
                    <a href={"/"}>NucleoDB</a>
                </p>
                <div className="topMenu fixed mb-5 mt-5 bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <a href={"https://nucleocore.com"}>&lt;NucleoCore&gt;</a> <a href={"https://docs.synload.com/books/nucleodb"}>&lt;NucleoDB Docs&gt;</a> <a href={"https://docs.synload.com/books/nucleodb/chapter/spring-data-repository-library"}>&lt;Spring Docs&gt;</a>
                </div>
            </div>
            <div className="mb-32 mt-10 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
                <a
                    href="https://animecap.com"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target={"_blank"}
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        AnimeCap{' '}
                    </h2>
                    <p className={`m-4 max-w-[30ch] text-sm opacity-50`}>
                        <Image width={600} height={400} src={"/animecap.png"} alt={""}/>
                        User management, Session Handling, Video MetaData, Video Progress Saving
                    </p>
                </a>
                <a
                    href="https://thejointforge.com"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target={"_blank"}
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Joint Forge{' '}
                    </h2>
                    <p className={`m-4 max-w-[30ch] text-sm opacity-50`}>
                        Coming soon!
                    </p>
                </a>
            </div>
        </main>
    )
}
